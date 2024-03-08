import React, { useState } from "react";
import { Link } from "react-router-dom";

const SignUpPage: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    role: "student", // Default role is student
    phone: "",
    designation: "",
  });

  const [formErrors, setFormErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phone: "",
    designation: "",
  });

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleRoleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      role: event.target.value,
    });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    // Form validation
    const errors: typeof formErrors = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      phone: "",
      designation: "",
    };
    if (!formData.firstName.trim()) {
      errors.firstName = "First name is required";
    }
    if (!formData.lastName.trim()) {
      errors.lastName = "Last name is required";
    }
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    }
    if (!formData.password.trim()) {
      errors.password = "Password is required";
    }
    if (formData.role === "teacher" && !formData.phone.trim()) {
      errors.phone = "Phone number is required";
    }
    if (formData.role === "teacher" && !formData.designation.trim()) {
      errors.designation = "Designation is required";
    }

    setFormErrors(errors);

    // If there are no errors, proceed with form submission
    if (Object.keys(errors).length === 0) {
      // Perform form submission logic here
      console.log("Form submitted with data:", formData);
      // Reset form fields after submission
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        role: "student", // Reset role to student
        phone: "",
        designation: "",
      });
    }
  };

  return (
    <div
      className="container-fluid d-flex justify-content-center align-items-center vh-100"
      style={{
        backgroundImage: `url('../../public/mymind-XUlsF9LYeVk-unsplash.jpg')`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        minHeight: "100vh",
      }}
    >
      <div
        className="container mt-5 p-4"
        style={{
          backgroundColor: "#ffffff",
          borderRadius: "10px",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          maxWidth: "400px",
          fontFamily: "Poppins, sans-serif",
        }}
      >
        <h2 className="text-center mb-4">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label>First Name</label>
            <input
              type="text"
              className={`form-control ${formErrors.firstName && "is-invalid"}`}
              placeholder="First Name"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              required
            />
            <div className="invalid-feedback">{formErrors.firstName}</div>
          </div>

          <div className="mb-3">
            <label>Last Name</label>
            <input
              type="text"
              className={`form-control ${formErrors.lastName && "is-invalid"}`}
              placeholder="Last Name"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              required
            />
            <div className="invalid-feedback">{formErrors.lastName}</div>
          </div>

          <div className="mb-3">
            <label>Email</label>
            <input
              type="email"
              className={`form-control ${formErrors.email && "is-invalid"}`}
              placeholder="Email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
            <div className="invalid-feedback">{formErrors.email}</div>
          </div>

          <div className="mb-3">
            <label>Password</label>
            <input
              type="password"
              className={`form-control ${formErrors.password && "is-invalid"}`}
              placeholder="Password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              required
            />
            <div className="invalid-feedback">{formErrors.password}</div>
          </div>

          {formData.role === "teacher" && (
            <>
              <div className="mb-3">
                <label>Phone Number:</label>
                <input
                  type="text"
                  className={`form-control ${formErrors.phone && "is-invalid"}`}
                  placeholder="Phone Number"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                />
                <div className="invalid-feedback">{formErrors.phone}</div>
              </div>
              <div className="mb-3">
                <label>Designation:</label>
                <select
                  className={`form-control ${
                    formErrors.designation && "is-invalid"
                  }`}
                  name="designation"
                  value={formData.designation}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select Designation</option>
                  <option value="Lecturer">Lecturer</option>
                  <option value="Associate Professor">
                    Associate Professor
                  </option>
                  <option value="Professor">Professor</option>
                </select>
                <div className="invalid-feedback">{formErrors.designation}</div>
              </div>
            </>
          )}

          <div className="mb-3">
            <label className="mr-2">Role:</label>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="role"
                value="student"
                checked={formData.role === "student"}
                onChange={handleRoleChange}
              />
              <label className="form-check-label">Student</label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="role"
                value="teacher"
                checked={formData.role === "teacher"}
                onChange={handleRoleChange}
              />
              <label className="form-check-label">Teacher</label>
            </div>
          </div>

          <div className="form-group">
            <button type="submit" className="btn btn-primary btn-block">
              Sign Up
            </button>
            <Link className="nav-link mt-2" to="/">
              Back
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;
