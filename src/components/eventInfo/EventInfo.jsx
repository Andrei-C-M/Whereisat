import styles from "./eventInfo.module.css"

const EventInfo = ({ event, quantity, setQuantity }) => {
  return (
    <section className={styles.eventInfo}>
      <p className={styles.eventInfoTag}>You are about to score some tickets to</p>
      <div className={styles.eventInfoDetails}>
        <h2 className={styles.eventInfoAct}>{event.name}</h2>
        <p className={styles.eventInfoWhen}>
          {event.when.date} kl {event.when.from} - {event.when.to}
        </p>
        <p className={styles.eventInfoWhere}>@ {event.where}</p>
      </div>
      <div className={styles.eventInfoTickets}>
        <p className={styles.eventInfoCost}>{event.price * quantity} sek</p>
        <div className={styles.eventInfoAmount}>
          <p
            className={styles.eventInfoDecrement}
            onClick={() => setQuantity(Math.max(0, quantity - 1))}
          >
            -
          </p>
          <p className={styles.eventInfoNumber}>{quantity}</p>
          <p
            className={styles.eventInfoIncrement}
            onClick={() => setQuantity(quantity + 1)}
          >
            +
          </p>
        </div>
      </div>
    </section>
  );
}

export default EventInfo;
