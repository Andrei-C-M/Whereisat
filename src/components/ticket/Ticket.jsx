import React from "react";
import Barcode from "react-barcode";
import "./ticket.css";

function Ticket({ ticket }) {
  const [day, monthFull] = ticket.date.split(" ");
  const monthShort = monthFull.slice(0, 3).toUpperCase();

  return (
<article className="passCard">
  <div className="passCardHeader">
    <p className="passCardLabel">WHAT</p>
    <div className="passCardContent">
      <h2>{ticket.name}</h2>
    </div>
  </div>

  <div className="passCardVenue">
    <p className="passCardLabel">WHERE</p>
    <div className="passCardContent">
      <p>{ticket.where}</p>
    </div>
  </div>

  <div className="passCardTimeBlock">
    <div className="passCardTimeItem">
      <p className="passCardLabel">WHEN</p>
      <div className="passCardContent">
        <p>{day} {monthShort}</p>
      </div>
    </div>

    <div className="passCardTimeItem">
      <p className="passCardLabel">FROM</p>
      <div className="passCardContent">
        <p>{ticket.from}</p>
      </div>
    </div>

    <div className="passCardTimeItem">
      <p className="passCardLabel">TO</p>
      <div className="passCardContent">
        <p>{ticket.to}</p>
      </div>
    </div>
  </div>

  <div className="passCardMeta">
    <p className="passCardLabel">INFO</p>
    <div className="passCardContent">
      <p>section {ticket.section} – seat {ticket.seat}</p>
    </div>
  </div>

  <div className="passCardBarcode">
    <div className="barcodeBox">
      <Barcode
        value={ticket.ticketID}
        width={1.5}
        height={60}
        displayValue={true}
        fontSize={14}
      />
    </div>
  </div>
</article>

  );
}

export default Ticket;
