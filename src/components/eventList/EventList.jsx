import { useState, useEffect } from "react";
import axios from "axios";
import SingleEvent from "../singleEvent/SingleEvent";
import SearchEvent from "../searchEvent/SearchEvent";
import "./eventList.css";

function EventList({ onSelect }) {
  const [events, setEvents] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchEvents() {
      try {
        const response = await axios.get(
          "https://santosnr6.github.io/Data/events.json"
        );
        setEvents(response.data.events);
        setLoading(false);
      } catch (error) {
        console.error("Error getting events", error);
        setError(true);
        setLoading(false);
      }
    }
    fetchEvents();
  }, []);

  const filteredEvents = events.filter((event) =>
    event.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return <p className="eventsLoading">Loading events...</p>;
  }

  if (error) {
    return (
      <div className="eventsError">
            <img src="/src/assets/logo.svg" alt="logo" />
            <p>API error</p>
      </div>
    );
  }

  return (
    <>
      <SearchEvent searchTerm={searchTerm} onSearch={setSearchTerm} />
      <section className="eventsList">
        {filteredEvents.length > 0 ? (
          filteredEvents.map((event) => (
            <SingleEvent key={event.id} event={event} onSelect={onSelect} />
          ))
        ) : (
          <div className="eventsNoResults">
            <img src="./src/assets/logo.svg" alt="Logo" />
            <p>No results</p>
          </div>
        )}
      </section>
    </>
  );
}

export default EventList;
