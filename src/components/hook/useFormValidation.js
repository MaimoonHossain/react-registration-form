// useFormValidation.js
import { useState, useEffect } from "react";

const useFormValidation = (formData, validate) => {
  console.log("validate", validate);
  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);

  console.log("formData", formData);

  useEffect(() => {
    if (formData && validate) {
      validateForm();
    }
  }, [formData, validate]);

  const validateForm = () => {
    const newErrors = {};

    // Validate each field
    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    }
    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.contact.trim()) {
      newErrors.contact = "Contact is required";
    } else if (!/^\d{11}$/.test(formData.contact)) {
      newErrors.contact = "Contact is invalid";
    }
    if (!formData.password.trim()) {
      newErrors.password = "Password is required";
    } else if (formData.password.trim().length < 8) {
      newErrors.password = "Password must be at least 8 characters long";
    }
    if (!formData.confirmPassword.trim()) {
      newErrors.confirmPassword = "Confirm Password is required";
    } else if (formData.confirmPassword !== formData.password) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    // Check if there are any errors
    const isValid = Object.keys(newErrors).length === 0;
    setErrors(newErrors);
    setIsFormValid(isValid);
  };

  return { errors, isFormValid };
};

export default useFormValidation;
