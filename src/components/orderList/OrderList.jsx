import useCartStore from "../../stores/useCartStore";
import SingleOrder from "../singleOrder/SingleOrder";

function OrderList() {
  const cartOrders = useCartStore((state) => state.cartOrders);

  return (
  <section className="orders">
    {cartOrders.map((order) => (
        <SingleOrder key={order.id} order={order} />
    ))}
  </section>);
}

export default OrderList;
