import Home from "./pages/home/Home";
import Events from "./pages/events/Events";
import Tickets from "./pages/tickets/Tickets";
import Navigation from "./components/navigation/Navigation";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/tickets" element={<Tickets />} />
      </Routes>
    </Router>
  );
}

export default App;
