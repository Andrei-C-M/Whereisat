import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "./searchEvent.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function SearchEvent({ searchTerm, onSearch }) {
  return (
    <div className="searchEvent">
      <FontAwesomeIcon icon={faSearch} className="searchEventIco" />
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => onSearch(e.target.value)}
        className="searchEventInput"
        aria-label="Sök efter event"
      />
    </div>
  );
}

export default SearchEvent;