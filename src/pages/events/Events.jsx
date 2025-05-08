import { useEffect, useState } from "react";
import "./events.css";
import PrimaryButton from "../../components/primaryButton/primaryButton";
import EventList from "../../components/eventList/EventList";
import EventInfo from "../../components/eventInfo/EventInfo";
import useCartStore from "../../stores/useCartStore";
import OrderList from "../../components/orderList/OrderList";
import { useNavigate } from "react-router-dom";

function Events() {
  const [view, setView] = useState("events");
  const [selectedEvent, setSelectedEvent] = useState([]);
  const [quantity, setQuantity] = useState(0);
  const [ordersCost, setOrdersCost] = useState(0);
  const navigate = useNavigate();
  const addOrder = useCartStore((state) => state.addOrder);
  const cartOrders = useCartStore((state) => state.cartOrders);
  const addPayedOrders = useCartStore((state) => state.addPayedOrders);

  useEffect(() => {
    const totalCost = cartOrders.reduce(
      (sum, ticket) => sum + ticket.price * ticket.quantity,
      0
    );
    setOrdersCost(totalCost);
  });

  function handleSelectedEvent(event) {
    setQuantity(0);
    setSelectedEvent(event);
    setView("event");
  }

  function handleClick() {
    if (view === "events") {
      setView("orders");
    } else if (view === "event") {
      addOrder(selectedEvent, quantity);
      setView("events");
    } else if (view === "orders") {
      addPayedOrders();
      navigate("/tickets");
    }
  }

  let pageTitle;
  let btnText;

  if (view === "events") {
    pageTitle = "Events";
    btnText = "Till varukorgen";
  } else if (view === "event") {
    pageTitle = "Event";
    btnText = "Lägg i varukorgen";
  } else {
    pageTitle = "Order";
    btnText = "Skicka order";
  }

  return (
    <section className="events">
      <h1 className="events__heading">{pageTitle}</h1>

      {view === "events" && (
        <article>
          <EventList onSelect={handleSelectedEvent} />
        </article>
      )}

      {view === "event" && selectedEvent && (
        <section>
          <EventInfo
            event={selectedEvent}
            quantity={quantity}
            setQuantity={setQuantity}
          />
        </section>
      )}

      {view === "orders" && (
        <section>
          <OrderList quantity={quantity} setQuantity={setQuantity} />
          <p className="orders__total">Totalt</p>
          <p className="orders__sum">{ordersCost} sek</p>
        </section>
      )}

      <PrimaryButton buttonText={btnText} handleClick={handleClick} />
    </section>
  );
}

export default Events;
