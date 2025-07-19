import { restaurants, Restaurant } from "./restaurants";
import { orders, Order, PriceBracket } from "./orders";

// Add your getMaxPrice() function below:
function getMaxPrice(price: PriceBracket) {
  switch (price) {
    case PriceBracket.Low:
      return 10.0;
    case PriceBracket.Medium:
      return 20.0;
    case PriceBracket.High:
      return 30.0;
  }
}
// Add your getOrders() function below:
function getOrders(price: PriceBracket, orders: Order[][]) {
  let filteredOrders: Order[][] = [];
  orders[0].filter((order: Order) => order.price <= getMaxPrice(price));

  orders.forEach((restaurent: Order[]) => {
    const res = restaurent.filter((order: Order) => order.price <= getMaxPrice(price));
    filteredOrders.push(res);
  });

  return filteredOrders;
}
// Add your printOrders() function below:
function printOrders(restaurants: Restaurant[], orders: Order[][]): void {
  orders.forEach((restaurantOrders, index) => {
    if (restaurantOrders.length > 0 && restaurants[index]) {
      console.log(`Restaurant: ${restaurants[index].name}`);
      restaurantOrders.forEach((order) => {
        console.log(` - ${order.name}: $${order.price.toFixed(2)}`);
      });
    }
  });
}

// Main
const eligibleOrders = getOrders(PriceBracket.Low, orders);
// console.log(eligibleOrders);
printOrders(restaurants, eligibleOrders);
