import React from "react";

export default function ContactMe() {
  const handleGetInTouch = (contactOption) => {
    if(contactOption === 'email'){
      window.location.href = 'mailto:altinmurtezaj2002@gmail.com';
    }
    else if (contactOption === 'phone'){
      window.location.href = 'tel:+383043827825';
    }

  };

  return (
    <section id="Contact" className="contact--section">
      <div>
        <p className="sub--title">Get In Touch</p>
        <h2>Contact Me</h2>
      </div>
      <div className="mt-6 flex justify-center">
        <button className="btn btn-primary mr-4" onClick={() => handleGetInTouch('email')}>Contact via Email</button>
        <button className="btn btn-secondary" onClick={() => handleGetInTouch('phone')}>Contact via Phone</button>
      </div>
    </section>
  );
}
