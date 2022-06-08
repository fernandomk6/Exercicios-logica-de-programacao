products = [
  {
    name: 'fogão',
    price: 299.99
  },
  {
    name: 'fone de ouvido',
    price: 199.99
  },
  {
    name: 'teclado',
    price: 99.99
  },
  {
    name: 'salgadão do gil',
    price: 10.00
  }
];

const cheaper = (products) => {
  const cheapestProduct = products.reduce((accumulator, element) => {
    if (element.price <= accumulator.price) {
      accumulator = element;
    }
    return element;
  });

  return cheapestProduct;
};

console.log(cheaper(products));