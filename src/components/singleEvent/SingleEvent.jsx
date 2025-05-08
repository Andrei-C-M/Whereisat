import "./singleEvent.css";

function SingleEvent({ event, onSelect }) {
  const [day, monthFull] = event.when.date.split(" ");
  const monthShort = monthFull.slice(0, 3).toUpperCase();

  return (
    <article className="event" onClick={() => onSelect(event)}>
      <p className="eventDate">
        <span className="eventDay">{day}</span>
        <span className="eventMonth">{monthShort}</span>
      </p>
      <div className="eventDetails">
        <h2 className="eventAct">{event.name}</h2>
        <p className="eventVenue">{event.where}</p>
        <p className="eventTime">{event.when.from} - {event.when.to}</p>
      <p className="eventCost">{event.price} sek</p>
      </div>
    </article>
  );
}

export default SingleEvent;
