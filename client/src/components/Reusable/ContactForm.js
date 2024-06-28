import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import "../../styles/contactForm.css";

function ContactForm() {
  const form = useRef();
  const [submitStatus, setSubmitStatus] = useState(null);
  const [formData, setFormData] = useState({
    client_firstName: "",
    client_lastName: "",
    client_email: "",
    client_contact: "",
    budget_range: 100,
    budget_range_holder: 100,
    timeline: "",
    client_message: "",
  });
  const [currency, setCurrency] = useState("usd");
  const [submit, setSubmit] = useState(false);

  const convertBudget = (budget) => {
    if (currency === "usd") {
      return budget;
    } else if (currency === "php") {
      const converted_budget = budget * 50;
      return converted_budget;
    }
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setSubmit(true);
    emailjs
      .sendForm(
        "service_xu0d3nt",
        "template_8bogi4k",
        form.current,
        "gcINKDKWf3CJtT1Pa"
      )
      .then(
        () => {
          setSubmit(false);
          setSubmitStatus("success");
          setFormData({
            client_firstName: "",
            client_lastName: "",
            client_email: "",
            client_contact: "",
            budget_range: 100,
            budget_range_holder: 100,
            timeline: "",
            client_message: "",
          });
          console.log("SUCCESS!");
        },
        (error) => {
          setSubmit(false);
          setSubmitStatus("error");
          console.log("FAILED...", error.text);
        }
      );
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      id="contactForm"
      className="contactForm"
    >
      <div className="header">
        <p className="title">Let's build something great together!</p>
        <p className="label">( You will hear back from me within 24 hours )</p>
      </div>
      <div className="inputs">
        <input
          type="text"
          name="budget_range"
          value={`${currency === "usd" ? "$" : "₱"}${convertBudget(
            formData.budget_range_holder
          )}`}
          className="custom-input"
          required
          disabled={submit}
          style={{ display: "none" }}
        />
        <div className="section">
          <p className="section-label">Help me get to know you.</p>
          <div className="section-inputs">
            <div className="side-by-side">
              <input
                type="text"
                onChange={handleChange}
                name="client_firstName"
                value={formData.client_firstName}
                className="custom-input"
                placeholder="First Name"
                required
                disabled={submit}
              />
              <input
                type="text"
                onChange={handleChange}
                name="client_lastName"
                value={formData.client_lastName}
                className="custom-input"
                placeholder="Last Name"
                required
                disabled={submit}
              />
            </div>
            <input
              type="email"
              onChange={handleChange}
              name="client_email"
              value={formData.client_email}
              className="custom-input"
              placeholder="Email"
              required
              disabled={submit}
            />
            <input
              type="number"
              onChange={handleChange}
              name="client_contact"
              value={formData.client_contact}
              className="custom-input"
              placeholder="Phone number (optional)"
              disabled={submit}
            />
          </div>
        </div>

        <div className="section">
          <p className="section-label">What budget range are you in?</p>
          <div className="section-inputs">
            <div className="labels">
              <p className="budget">
                Budget: {currency === "usd" ? "$" : "₱"}
                {convertBudget(formData.budget_range_holder)}
              </p>
              <div className="curency">
                <span
                  className={`currency-toggle ${
                    currency === "usd" ? "active" : ""
                  }`}
                  onClick={() => setCurrency("usd")}
                >
                  USD
                </span>
                <span
                  className={`currency-toggle ${
                    currency === "php" ? "active" : ""
                  }`}
                  onClick={() => setCurrency("php")}
                >
                  PHP
                </span>
              </div>
            </div>
            <input
              type="range"
              name="budget_range_holder"
              step={100}
              className="custom-range"
              value={formData.budget_range_holder}
              onChange={handleChange}
              min={100}
              max={1000}
              disabled={submit}
            />
          </div>
        </div>

        <div className="section">
          <p className="section-label">Tell me more about the project.</p>
          <div className="section-inputs">
            <select
              onChange={handleChange}
              name="timeline"
              value={formData.timeline}
              className="custom-select"
              disabled={submit}
            >
              <option value="" disabled>
                Select timeline
              </option>
              <option value="1 Month">1 Month</option>
              <option value="2 Months">2 Months</option>
              <option value="3 Months">3 Months</option>
            </select>
            <textarea
              name="client_message"
              onChange={handleChange}
              value={formData.client_message}
              className="custom-textarea"
              placeholder="Hello, I’m looking for a designer to help me out with..."
              disabled={submit}
            ></textarea>
          </div>
        </div>

        <div className="section">
          <p className="section-label mini">
            We promise to never sell your personal information or give it to
            anyone, for any reason.
          </p>
          <button type="submit" disabled={submit}>
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}

export default ContactForm;
