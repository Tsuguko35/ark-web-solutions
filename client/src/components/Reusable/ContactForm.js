import React, { useState } from "react";
import "../../styles/contactForm.css";

function ContactForm() {
  const [formData, setFormData] = useState({
    budget_range: 100,
  });
  const [currency, setCurrency] = useState("usd");

  const convertBudget = (budget) => {
    if (currency === "usd") {
      return budget;
    } else if (currency === "php") {
      const converted_budget = budget * 50;
      return converted_budget;
    }
  };
  return (
    <form id="contactForm" className="contactForm">
      <div className="header">
        <p className="title">Let's build something great together!</p>
        <p className="label">( You will hear back from me within 24 hours )</p>
      </div>
      <div className="inputs">
        <div className="section">
          <p className="section-label">Help me get to know you.</p>
          <div className="section-inputs">
            <div className="side-by-side">
              <input
                type="text"
                className="custom-input"
                placeholder="First Name"
                required
              />
              <input
                type="text"
                className="custom-input"
                placeholder="Last Name"
                required
              />
            </div>
            <input
              type="email"
              className="custom-input"
              placeholder="Email"
              required
            />
            <input
              type="number"
              className="custom-input"
              placeholder="Phone number (optional)"
            />
          </div>
        </div>

        <div className="section">
          <p className="section-label">What budget range are you in?</p>
          <div className="section-inputs">
            {/* <div className="side-by-side">
              <div className="custom-radio">
                <input name="radio" id="radio1" type="radio" />
                <label for="radio1">$200 - $400</label>
              </div>
              <div className="custom-radio">
                <input name="radio" id="radio2" type="radio" />
                <label for="radio2">$400 - $600</label>
              </div>
            </div>
            <div className="side-by-side">
              <div className="custom-radio">
                <input name="radio" id="radio3" type="radio" />
                <label for="radio3">$600 - $800</label>
              </div>
              <div className="custom-radio">
                <input name="radio" id="radio4" type="radio" />
                <label for="radio4">$800 - $1000+</label>
              </div>
            </div> */}
            <div className="labels">
              <p className="budget">
                Budget: {currency === "usd" ? "$" : "₱"}
                {convertBudget(formData.budget_range)}
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
              step={100}
              className="custom-range"
              value={formData.budget_range}
              onChange={(e) =>
                setFormData({ ...formData, budget_range: e.target.value })
              }
              min={100}
              max={1000}
            />
          </div>
        </div>

        <div className="section">
          <p className="section-label">Tell me more about the project.</p>
          <div className="section-inputs">
            <select name="" id="" value={""} className="custom-select">
              <option value="" disabled>
                Select timeline
              </option>
              <option value="1">1 Month</option>
            </select>
            <textarea
              name=""
              id=""
              className="custom-textarea"
              placeholder="Hello, I’m looking for a designer to help me out with..."
            ></textarea>
          </div>
        </div>

        <div className="section">
          <p className="section-label mini">
            We promise to never sell your personal information or give it to
            anyone, for any reason.
          </p>
          <button type="submit">Submit</button>
        </div>
      </div>
    </form>
  );
}

export default ContactForm;
