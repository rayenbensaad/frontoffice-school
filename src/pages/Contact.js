import React, { useState } from "react";
import NavbarStart from "../components/NavbarStart";
import Footer from "../components/Footer";
import ContactService from "../services/contact";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");
  const [messageSucces, setMessageSucces] = useState("");

  const handleSend = () => {
    const data = {
      Name: name,
      email,
      phone,
      subject,
      message,
    };

    setLoading(true);

    if (
      name === "" ||
      email === "" ||
      phone === "" ||
      subject === "" ||
      message === ""
    ) {
      setMsg("Champs obligatoires");
      setMessageSucces("");
    } else {
      ContactService.contact(data)
        .then((res) => {
          console.log("res", res);
          setLoading(false);
          setMessageSucces("Votre Message est envoyé");
          setMsg("");
        })
        .catch((err) => {
          console.log("err", err);
          setMsg(err);
          setLoading(false);
          setMessageSucces("");
        });
    }
  };

  return (
    <>
      <NavbarStart />
      <div className="container-fluid pt-5">
        <div className="container">
          <div className="text-center pb-2">
            <p className="section-title px-5">
              <span className="px-2">Contactez-nous</span>
            </p>
            <h1 className="mb-4">Contactez-nous pour toute question</h1>
          </div>
          <div className="row">
            <div className="col-lg-7 mb-5">
              <div className="contact-form">
                <div id="success"></div>
                <form
                  name="sentMessage"
                  id="contactForm"
                  noValidate="novalidate"
                >
                  <div className="control-group">
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      placeholder="Your Name"
                      required="required"
                      data-validation-required-message="Please enter your name"
                      onChange={(e) => setName(e.target.value)}
                    />
                    <p className="help-block text-danger"></p>
                  </div>
                  <div className="control-group">
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Your Email"
                      required="required"
                      data-validation-required-message="Please enter your email"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <p className="help-block text-danger"></p>
                  </div>
                  <div className="control-group">
                    <input
                      type="number"
                      className="form-control"
                      id="phone"
                      placeholder="Your phone +216 "
                      required="required"
                      data-validation-required-message="Please enter your Phone"
                      onChange={(e) => setPhone(e.target.value)}
                    />
                    <p className="help-block text-danger"></p>
                  </div>
                  <div className="control-group">
                    <input
                      type="text"
                      className="form-control"
                      id="subject"
                      placeholder="Subject"
                      required="required"
                      data-validation-required-message="Please enter a subject"
                      onChange={(e) => setSubject(e.target.value)}
                    />
                    <p className="help-block text-danger"></p>
                  </div>
                  <div className="control-group">
                    <textarea
                      className="form-control"
                      rows="6"
                      id="message"
                      placeholder="Message"
                      required="required"
                      data-validation-required-message="Please enter your message"
                      onChange={(e) => setMessage(e.target.value)}
                    ></textarea>
                    <p className="help-block text-danger"></p>
                  </div>
                  <div>
                    <button
                      className="btn btn-primary py-2 px-4"
                      type="button"
                      id="sendMessageButton"
                      onClick={() => handleSend()}
                    >
                      Send Message
                      {loading && (
                        <span className="spinner-border spinner-border-sm"></span>
                      )}
                    </button>
                  </div>
                </form>
                {msg !== "" ? (
                  <div className="form-group mt-4">
                    <div className="alert alert-danger" role="alert">
                      {msg}
                    </div>
                  </div>
                ) : null}

                {messageSucces !== "" ? (
                  <div className="form-group mt-4">
                    <div className="alert alert-success" role="alert">
                      Votre message est envoyé
                    </div>
                  </div>
                ) : null}
              </div>
            </div>
            <div className="col-lg-5 mb-5">
              <p>
                L'école a été construite en 1960 , à Monastir , c'était la
                première école de la ville , elle a commencé avec deux salles de
                classe.
              </p>
              <div className="d-flex">
                <i
                  className="fa fa-map-marker-alt d-inline-flex align-items-center justify-content-center bg-primary text-secondary rounded-circle"
                  style={{ width: 45, height: 45 }}
                ></i>
                <div className="pl-3">
                  <h5>Adresse</h5>
                  <p>5090, Bekalta</p>
                </div>
              </div>
              <div className="d-flex">
                <i
                  className="fa fa-envelope d-inline-flex align-items-center justify-content-center bg-primary text-secondary rounded-circle"
                  style={{ width: 45, height: 45 }}
                ></i>
                <div className="pl-3">
                  <h5>Email</h5>
                  <p>écoleprimaire@gmail.com</p>
                </div>
              </div>
              <div className="d-flex">
                <i
                  className="fa fa-phone-alt d-inline-flex align-items-center justify-content-center bg-primary text-secondary rounded-circle"
                  style={{ width: 45, height: 45 }}
                ></i>
                <div className="pl-3">
                  <h5>Téléphone</h5>
                  <p>+012 345 67890</p>
                </div>
              </div>
              <div className="d-flex">
                <i
                  className="far fa-clock d-inline-flex align-items-center justify-content-center bg-primary text-secondary rounded-circle"
                  style={{ width: 45, height: 45 }}
                ></i>
                <div className="pl-3">
                  <h5>Horaires d'ouvertures</h5>
                  <strong>dimanche - vendredi:</strong>
                  <p className="m-0">08:00 AM - 05:00 PM </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
