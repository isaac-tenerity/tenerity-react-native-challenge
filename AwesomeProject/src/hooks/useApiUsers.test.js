import { useGetUser } from '@/hooks/useApiUsers';
import { cleanup, renderHook } from '@testing-library/react-hooks';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import React from 'react';
import { QueryClient, QueryClientProvider, setLogger } from 'react-query';

export const server = setupServer();
// Establish API mocking before all tests.
beforeAll(() => server.listen());
// Reset any request handlers that we may add during the tests,
// so they don't affect other tests.
afterEach(() => server.resetHandlers());
// Clean up after the tests are finished.
afterAll(() => server.close());
setLogger({
  log: console.log,
  warn: console.warn,
  // ✅ no more errors on the console
  error: () => {},
});

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // ✅ turns retries off
      retry: false,
    },
  },
});

const wrapper = ({ children }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);
describe('useApiTags hook', () => {
  beforeEach(() => {
    jest.useFakeTimers();
    queryClient.clear();
  });

  afterEach(() => {
    jest.clearAllMocks();
    jest.clearAllTimers();
    cleanup();
  });

  test('successful get user query should report success', async () => {
    server.use(rest.get('*', (req, res, ctx) => res(ctx.status(200))));
    const { result, waitFor } = renderHook(() => useGetUser(), {
      wrapper,
    });

    await waitFor(() => result.current.isSuccess);

    expect(result.current.isSuccess).toBeTruthy();
  });

  test('error useGetUser query should report error', async () => {
    server.use(rest.get('*', (req, res, ctx) => res(ctx.status(500))));
    const { result, waitFor } = renderHook(() => useGetUser(), {
      wrapper,
    });

    await waitFor(() => result.current.isError);
    expect(result.current.error).toBeTruthy();
  });

  test('timeout failure useGetUser query should report a timeout error', async () => {
    const timeoutDelay = 2000;
    server.use(
      rest.get('*', (req, res, ctx) =>
        res(ctx.status(501), ctx.delay(timeoutDelay))
      )
    );
    const { result, waitFor } = renderHook(() => useGetUser(), {
      wrapper,
    });

    jest.runAllTimers();
    await waitFor(() => result.current.isError, { timeout: timeoutDelay });
    expect(result.current.error).toBeTruthy();
  });
});
