import { setupServer } from 'msw/node';
import { cleanup, renderHook } from '@testing-library/react-hooks';
import { rest } from 'msw';
import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
const { apiClient } = require('@/api/ApiQueries');
const { default: useGetOffers } = require('@/hooks/useApiOffers');

export const server = setupServer();
// Establish API mocking before all tests.
beforeAll(() => server.listen());
// Reset any request handlers that we may add during the tests,
// so they don't affect other tests.
afterEach(() => server.resetHandlers());
// Clean up after the tests are finished.
afterAll(() => server.close());

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // ✅ turns retries off
      retry: false,
    },
  },
});

const axiosInstance = apiClient;
const wrapper = ({ children }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);
describe('useApiOffers hook', () => {
  beforeEach(() => {
    jest.useFakeTimers();
    queryClient.clear();
  });

  afterEach(() => {
    jest.clearAllMocks();
    jest.clearAllTimers();
    cleanup();
  });

  test('successful get offers query should report success', async () => {
    server.use(rest.get('*', (req, res, ctx) => res(ctx.status(200))));
    const { result, waitFor } = renderHook(() => useGetOffers(), {
      wrapper,
    });

    await waitFor(() => result.current.isSuccess);

    expect(result.current.isSuccess).toBeTruthy();
  });

  test('error get offers query query should report error', async () => {
    server.use(rest.get('*', (req, res, ctx) => res(ctx.status(500))));
    const { result, waitFor } = renderHook(() => useGetOffers(), {
      wrapper,
    });

    await waitFor(() => result.current.isError);
    expect(result.current.error).toBeTruthy();
  });
});
