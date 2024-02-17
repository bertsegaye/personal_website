import React, { useState } from "react";
import "./ContactForm.css"; // Import CSS file for styling

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setFormErrors({
      ...formErrors,
      [name]: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm(formData);
    if (Object.keys(errors).length === 0) {
      // Form submission logic goes here
      console.log("Form submitted:", formData);
    } else {
      setFormErrors(errors);
    }
  };

  const validateForm = (data) => {
    let errors = {};
    if (!data.name.trim()) {
      errors.name = "Name is required";
    }
    if (!data.email.trim()) {
      errors.email = "Email is required";
    } else if (!isValidEmail(data.email)) {
      errors.email = "Invalid email address";
    }
    if (!data.message.trim()) {
      errors.message = "Message is required";
    }
    return errors;
  };

  const isValidEmail = (email) => {
    // Simple email validation regex
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  return (
    <div className="contact-form" style={{ marginTop: "5rem" }}>
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
          />
          {formErrors.name && <span className="error">{formErrors.name}</span>}
        </div>
        <div className="form-group">
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
          />
          {formErrors.email && (
            <span className="error">{formErrors.email}</span>
          )}
        </div>
        <div className="form-group">
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          {formErrors.message && (
            <span className="error">{formErrors.message}</span>
          )}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
