"use client";

import { useState, useEffect } from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaGlobe } from "react-icons/fa"; 

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });
  const [errorMessage, setErrorMessage] = useState<string>("");

  useEffect(() => {
    const backToTopButton = document.getElementById("btn-back-to-top");

    if (backToTopButton) {
      const handleScroll = () => {
        if (window.scrollY > 100) {
          backToTopButton.style.display = "block";
        } else {
          backToTopButton.style.display = "none";
        }
      };

      window.addEventListener("scroll", handleScroll);

      backToTopButton.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      });

      return () => {
        window.removeEventListener("scroll", handleScroll);
        backToTopButton.removeEventListener("click", () => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        });
      };
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.mobile || !formData.message) {
      setErrorMessage("Please fill out all fields before submitting.");
      return;
    }

    setErrorMessage(""); 
    alert("Form submitted successfully!");
  };

  return (
    <section className="contact py-5" id="contact">
      <div className="heading text-center">
        <small>Get in Touch</small>
        <h3>Any Questions? Feel Free to Contact</h3>
      </div>
      <div className="row justify-content-evenly mt-5">
        <div className="col-md-5 col-10 contact-details" data-aos="slide-right">
          <div className="row justify-content-evenly">
            <div className="col-1">
              <FaMapMarkerAlt size={30} />
            </div>
            <div className="col-11">
              <p>Orangi Town Sec-10 Karachi, Pakistan</p>
            </div>
          </div>
          <div className="row justify-content-evenly">
            <div className="col-1">
              <FaPhoneAlt size={30} />
            </div>
            <div className="col-11">
              <p>+92 3151156286</p>
            </div>
          </div>
          <div className="row justify-content-evenly">
            <div className="col-1">
              <FaEnvelope size={30} />
            </div>
            <div className="col-11">
              <p>shumailawaheed253@gmail.com</p>
            </div>
          </div>
          <div className="row justify-content-evenly">
            <div className="col-1">
              <FaGlobe size={30} />
            </div>
            <div className="col-11">
              <p>coding.com</p>
            </div>
          </div>
        </div>
        <div className="col-md-5 col-10 mt-3 mt-md-0" data-aos="slide-left">
          <div className="contact-form">
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="E-mail"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                id="mobile"
                placeholder="Mobile No."
                value={formData.mobile}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <textarea
                className="form-control"
                id="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>

            {errorMessage && (
              <div className="alert alert-danger">{errorMessage}</div>
            )}

            <button className="c-btn h-btn mt-3 py-3 px-5 rounded-pill" onClick={handleSubmit}>
              Submit
            </button>
          </div>
        </div>
      </div>
      <button
        type="button"
        className="btn btn-floating btn-lg rounded-pill"
        id="btn-back-to-top"
      >
        <i className="bi bi-arrow-up"></i>
      </button>
    </section>
  );
};

export default Contact;
