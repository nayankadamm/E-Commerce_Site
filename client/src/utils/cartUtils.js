export const addDecimals = (num) => {
  return (Math.round(num * 100) / 100).toFixed(2);
};

export const upadateCart = (state) => {
  //calculate the item price
  state.itemPrice = addDecimals(
    state.cartItems.reduce((acc, item) => {
      //console.log(item.price);

      return acc + item.price * item.qty;
    }, 0)
  );

  //calculate the shipping price
  //if order is > 100 then free else 10$
  state.shippingPrice = addDecimals(state.itemPrice > 100 ? 0 : 10);

  //calculate the tax price
  //tax price will be the 15% of the item price
  state.taxPrice = addDecimals(Number(0.15 * state.itemPrice).toFixed(2));

  //calculate the total price
  state.totalprice = (
    Number(state.itemPrice) +
    Number(state.shippingPrice) +
    Number(state.taxPrice)
  ).toFixed(2);

  //now save this all the data of the cart and price in local storages
  localStorage.setItem("cart", JSON.stringify(state));
};
