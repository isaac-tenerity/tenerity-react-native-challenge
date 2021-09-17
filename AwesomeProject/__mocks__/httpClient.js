const get = url => {
  // i mocked just the offers response to show how could i mock an async request
  // if we want to mock all requests we should have here a switch handles the url and return the fake data depends on the url
  return Promise.resolve([
    {
      id: 1,
      offerType: 'travel',
      title: 'New York City break',
      description:
        'Praesentium similique deserunt iste ute. Neque voluptate aspernatur aut nesciunt adipisci.',
      tagIds: [1, 3],
      image: 'https://picsum.photos/id/274/400/200',
      price: 249.99,
    },
  ]);
};

const post = (url, data) => {
  // here also i mocked a post request which is the user register or add user
};

export { get, post };
