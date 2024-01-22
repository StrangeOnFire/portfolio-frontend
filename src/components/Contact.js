import React, { useState } from "react";
import "../css/contact.css";
import myImg from "../assets/my-img.svg";
import axios from "axios";

// ---------------------------------------------
export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [messageSent, setMessageSent] = useState(false);
  
  const handleSubmit = () => {
    axios
      .post(`${process.env.REACT_APP_SERVER_LINK}/form/`, {
        name,
        email,
        message,
      })
      .then(() => {
        setName("");
        setEmail("");
        setMessage("");
        setMessageSent(true);
      })
      .catch((err) =>
        console.log(
          "some error happened while submitting form to backend" + err
        )
      );
  };

  return (
    <>
      <div className="contact bg-green" id="contact">
        <div className="contact-heading">
          <h1 className="bold gray">INTERESTED?</h1>
          <h1 className="bold gray">LET{"’"}S TALK!</h1>
        </div>

        <div className="contact-heading">
          <h2 className=" gray">or contact me at</h2>
          <a href="mailto:info.ayushkumar@gmail.com" className=" gray">
            info.ayushkumar@gmail.com
          </a>
        </div>

        <div className="form-container" style={{ borderRadius: "50px" }}>
          <div className="form-img">
            <img src={myImg} alt="" />
          </div>

          {!messageSent && (
            <div className="form-text bg-gray green">
              <label>
                <h2>What's your name?</h2>
                <input
                  type="text"
                  placeholder="Ayush"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  name="name"
                />
              </label>
              <label>
                <h2>What's your e-mail?</h2>
                <input
                  type="email"
                  placeholder="Your@email.here"
                  value={email}
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </label>
              <label>
                <h2>Your message-</h2>
                <textarea
                  rows={6}
                  placeholder="type here.."
                  value={message}
                  name="messageToAyush"
                  onChange={(e) => setMessage(e.target.value)}
                />
              </label>
              <div className="form-btn-div">
                <button className="gray bold bg-green" onClick={handleSubmit}>
                  SUBMIT
                </button>
              </div>
            </div>
          )}

          {messageSent && (
            <div className=" contactMessage-sent bold bg-gray green">
              <h4>Amazing. Thanks,</h4>
              <h4>I'll be in touch soon!</h4>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
