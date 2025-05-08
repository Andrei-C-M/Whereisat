import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Ticket from "../../components/ticket/Ticket";
import useCartStore from "../../stores/useCartStore";
import "./tickets.css";
import "swiper/css";

function Tickets() {
  const [tickets, setTickets] = useState([]);
  const cartOrdersPayed = useCartStore((state) => state.cartOrdersPayed);

  function generateSection() {
    const section = String.fromCharCode(65 + Math.floor(Math.random() * 5));
    return section;
  }

  function generateSeat(section, ticketQuantity) {
    let seat;
    if (section === "A") {
      seat = Math.floor(Math.random() * 40) + 1 - ticketQuantity;
    } else if (section === "B") {
      seat = Math.floor(Math.random() * 40) + 41 - ticketQuantity;
    } else if (section === "C") {
      seat = Math.floor(Math.random() * 40) + 81 - ticketQuantity;
    } else if (section === "D") {
      seat = Math.floor(Math.random() * 40) + 121 - ticketQuantity;
    } else if (section === "E") {
      seat = Math.floor(Math.random() * 40) + 161 - ticketQuantity;
    }
    return seat;
  }

  function generateTicketID(length) {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let code = "";
    for (let i = 0; i < length; i++) {
      code += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return code;
  }

  useEffect(() => {
    const generatedTickets = [];
  
    cartOrdersPayed.flat().forEach((order) => {
      for (let i = 0; i < order.quantity; i++) {
        if (i === 0) {
          let section = generateSection();
          generatedTickets.push({
            ticketID: generateTicketID(5),
            name: order.name,
            where: order.where,
            date: order.when.date,
            from: order.when.from,
            to: order.when.to,
            section: section,
            seat: generateSeat(section, order.quantity),
          });
        } else {
          generatedTickets.push({
            ticketID: generateTicketID(5),
            name: order.name,
            where: order.where,
            date: order.when.date,
            from: order.when.from,
            to: order.when.to,
            section: generatedTickets[generatedTickets.length - 1].section,
            seat: generatedTickets[generatedTickets.length - 1].seat + 1,
          });
        }
      }
    });
  
    setTickets(generatedTickets);
  }, [cartOrdersPayed]);

  return (
    <>
      <section className="tickets">
        {tickets.length === 0 ? (
          <div className="tickets__empty">
            <img src="/src/assets/logo.svg" alt="Logo" />
            <p>No tickets</p>
          </div>
        ) : (
          <Swiper spaceBetween={50} slidesPerView={1}>
            {tickets.map((ticket, index) => (
            <SwiperSlide key={ticket.ticketID}>
              <Ticket ticket={ticket} index={index} />
            </SwiperSlide>
      ))}
          </Swiper>
        )}
      </section>

    </>
  );
}

export default Tickets;
