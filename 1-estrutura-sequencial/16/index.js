const costPainting = (areaToBePainted) => {
  const litersOfPaint = areaToBePainted / 3;
  const paintCans = Math.ceil(litersOfPaint / 18);
  const price = paintCans * 80;

  return {
    qtdLatas: paintCans.toFixed(2),
    preco: price.toFixed(2)
  };
}

console.log(costPainting(100));