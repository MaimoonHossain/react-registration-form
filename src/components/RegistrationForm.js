// RegistrationForm.js
import React, { useState, useEffect } from "react";
import useFormValidation from "./hook/useFormValidation";
import "./RegistrationForm.css";

const RegistrationForm = () => {
  const [fieldsFilled, setFieldsFilled] = useState(false);
  const [validate, setValidate] = useState(false);
  // State for form inputs
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contact: "",
    password: "",
    confirmPassword: "",
  });

  useEffect(() => {
    if (
      formData?.firstName &&
      formData?.lastName &&
      formData?.email &&
      formData?.contact &&
      formData?.password &&
      formData?.confirmPassword
    ) {
      setFieldsFilled(true);
    } else {
      setFieldsFilled(false);
    }
  }, [formData]);

  // Custom hook for form validation

  // Function to handle input change and form validation
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
      edited: true,
    });
  };

  const { errors, isFormValid } = useFormValidation(formData, validate);

  // Function to handle form submission
  const handleSubmit = (e) => {
    setValidate(true);
    e.preventDefault();
    // Validate form
    // const isValid = validateForm(formData);
    // console.log("hello");
    // console.log("valid", isValid);
    if (isFormValid) {
      // Display form data in console
      console.log(formData);
      // Clear form inputs
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        contact: "",
        password: "",
        confirmPassword: "",
      });
    } else {
      console.log("Form validation failed");
    }
  };

  return (
    <>
      {!isFormValid && (
        <div className="registration-form-container">
          <>
            <h2>Register</h2>
            <div className="form-group">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
              />
              {errors.firstName && (
                <p className="error-message">{errors.firstName}</p>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
              />
              {errors.lastName && (
                <p className="error-message">{errors.lastName}</p>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
              />
              {errors.email && <p className="error-message">{errors.email}</p>}
            </div>
            <div className="form-group">
              <label htmlFor="contact">Contact</label>
              <input
                type="text"
                id="contact"
                name="contact"
                value={formData.contact}
                onChange={handleInputChange}
              />
              {errors.contact && (
                <p className="error-message">{errors.contact}</p>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
              />
              {errors.password && (
                <p className="error-message">{errors.password}</p>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
              />
              {errors.confirmPassword && (
                <p className="error-message">{errors.confirmPassword}</p>
              )}
            </div>
            <button
              type="submit"
              onClick={handleSubmit}
              disabled={!fieldsFilled}
            >
              Submit
            </button>
          </>
        </div>
      )}
      {isFormValid && (
        <div className="success-message">
          <h2>Form submitted successfully!!</h2>
        </div>
      )}
    </>
  );
};

export default RegistrationForm;
