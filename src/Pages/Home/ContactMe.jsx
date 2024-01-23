import React, { useState } from "react";

export default function ContactMe() {
  const [showContact, setShowContact] = useState(false);

  const toggleContact = () => {
    setShowContact(!showContact);
  };

  return (
    <section id="Contact" className="contact--section">
      <div>
        <p className="text-lg"></p>
      </div>
      <div
        className="contact--info"
        style={{ display: showContact ? "block" : "none" }}
      >
        <p>
          <strong>Telefon:</strong> +49 163 630 2259
        </p>
        <p>
          <strong>E-Mail:</strong> benedikt.stoeck@web.de{" "}
        </p>
      </div>
      <button onClick={toggleContact} className="btn btn-primary">
        {showContact ? "Kontaktdaten ausblenden" : "Kontaktdaten anzeigen"}
      </button>
    </section>
  );
}
