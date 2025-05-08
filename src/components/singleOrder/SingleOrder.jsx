import "./SingleOrder.css";
import useCartStore from "../../stores/useCartStore";

function SingleOrder({ order }) {
  const updateQuantity = useCartStore((state) => state.updateQuantity);

  const handleDecrement = () => {
    if (order.quantity > 0) {
      updateQuantity(order.id, order.quantity - 1);
    }
  };

  const handleIncrement = () => {
    updateQuantity(order.id, order.quantity + 1);
  };

  return (
    <article className="order">
      <div className="order__info">
        <h2 className="order__name">{order.name}</h2>
        <p className="order__details">
          {order.when.date} kl {order.when.from} - {order.when.to}
        </p>
      </div>
      <div className="order__quantity">
        <p className="order__decrement" onClick={handleDecrement}>
          -
        </p>
        <p className="order__numberOf">{order.quantity}</p>
        <p className="order__increment" onClick={handleIncrement}>
          +
        </p>
      </div>
    </article>
  );
}

export default SingleOrder;
