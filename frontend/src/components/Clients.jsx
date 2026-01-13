import { useEffect, useState } from "react";
import axios from "axios";

const Clients = () => {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/client/get-client") // backend endpoint
      .then((res) => {
        setClients(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <section className="happy-section">
      <div className="container">

        {/* Heading */}
        <div className="text-center mb-5">
          <h3 className="happy-title">Happy Clients</h3>
          <p className="happy-subtitle">
            See what our satisfied clients say about our services
          </p>
        </div>

        {/* Clients Cards */}
        <div className="happy-grid">
          {clients.map((client) => (
            <div className="happy-card" key={client._id}>
              <img
                src={client.image}
                alt={client.name}
                className="client-img"
              />

              <p className="client-msg">
                “{client.description}”
              </p>

              <h6 className="client-name">{client.name}</h6>
              <span className="client-role">{client.designation}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Clients;
