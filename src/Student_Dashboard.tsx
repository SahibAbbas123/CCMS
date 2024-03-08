import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

interface StudentInfo {
  name: string;
  email: string;
  photo: string | null;
  age: number;
  dob: string;
  password: string;
}

const Student_Dashboard: React.FC = () => {
  const navigate = useNavigate();
  const [studentInfo, setStudentInfo] = useState<StudentInfo>({
    name: "John Doe",
    email: "johndoe@example.com",
    photo: null,
    age: 25,
    dob: "1999-01-01",
    password: "********",
  });

  const [editMode, setEditMode] = useState<boolean>(false);
  const [tempInfo, setTempInfo] = useState<StudentInfo>({ ...studentInfo });
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setTempInfo({
      ...tempInfo,
      [name]: value,
    });
  };

  const handlePhotoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setTempInfo({
          ...tempInfo,
          photo: reader.result as string,
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const startEditMode = () => {
    setTempInfo({ ...studentInfo });
    setEditMode(true);
  };

  const cancelEditMode = () => {
    setEditMode(false);
  };

  const saveChanges = () => {
    setStudentInfo({ ...tempInfo });
    setEditMode(false);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const isEmailValid = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <div
      style={{
        backgroundImage: `url('../public/mymind-XUlsF9LYeVk-unsplash.jpg')`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        fontFamily: "Poppins, sans-serif",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div style={{ width: "400px" }}>
        <div
          style={{
            border: "1px solid #ccc",
            borderRadius: "8px",
            padding: "20px",
            backgroundColor: "#fff",
          }}
        >
          <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
            Student Dashboard
          </h2>
          <div style={{ textAlign: "center", marginBottom: "20px" }}>
            {editMode ? (
              <div style={{ marginBottom: "10px" }}>
                <label htmlFor="photoInput" style={{ cursor: "pointer" }}>
                  <i
                    className="fas fa-camera"
                    style={{ marginRight: "5px" }}
                  ></i>
                  Upload Photo
                </label>
                <input
                  type="file"
                  id="photoInput"
                  onChange={handlePhotoUpload}
                  accept="image/*"
                  style={{ display: "none" }}
                />
              </div>
            ) : studentInfo.photo ? (
              <img
                src={studentInfo.photo}
                alt="Student"
                style={{
                  width: "200px",
                  borderRadius: "50%",
                  border: "1px solid #ccc",
                }}
              />
            ) : (
              <div>No photo uploaded</div>
            )}
          </div>
          {editMode ? (
            <form>
              <div style={{ marginBottom: "10px" }}>
                <label>Name:</label>
                <input
                  type="text"
                  name="name"
                  value={tempInfo.name}
                  onChange={handleInputChange}
                  style={{ width: "100%" }}
                />
              </div>
              <div style={{ marginBottom: "10px" }}>
                <label>Email:</label>
                <input
                  type="email"
                  name="email"
                  value={tempInfo.email}
                  onChange={handleInputChange}
                  style={{ width: "100%" }}
                />
                {!isEmailValid(tempInfo.email) && (
                  <div style={{ color: "red", fontSize: "12px" }}>
                    Invalid email address
                  </div>
                )}
              </div>
              <div style={{ marginBottom: "10px" }}>
                <label>Age:</label>
                <input
                  type="number"
                  name="age"
                  value={tempInfo.age}
                  onChange={handleInputChange}
                  style={{ width: "100%" }}
                />
              </div>
              <div style={{ marginBottom: "10px" }}>
                <label>Date of Birth:</label>
                <input
                  type="date"
                  name="dob"
                  value={tempInfo.dob}
                  onChange={handleInputChange}
                  style={{ width: "100%" }}
                />
              </div>
              <div style={{ marginBottom: "10px" }}>
                <label>Password:</label>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={tempInfo.password}
                    onChange={handleInputChange}
                    style={{ width: "calc(100% - 30px)" }}
                  />
                  <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    style={{
                      marginLeft: "5px",
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                    }}
                  >
                    {showPassword ? (
                      <i className="fas fa-eye-slash"></i>
                    ) : (
                      <i className="fas fa-eye"></i>
                    )}
                  </button>
                </div>
              </div>
              <div style={{ textAlign: "center" }}>
                {/* <button
                  type="button"
                  onClick={saveChanges}
                  style={{
                    marginRight: "10px",
                    padding: "10px 20px",
                    background: "#007bff",
                    color: "#fff",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                  }}
                >
                  Save
                </button> */}
                <button
                  onClick={saveChanges}
                  type="submit"
                  className="btn btn-primary btn-block me-3"
                >
                  Save
                </button>
                {/* <button
                  type="button"
                  className="btn-outline-primary"
                  onClick={cancelEditMode}
                  style={{
                    padding: "10px 20px",
                    background: "gray",
                    color: "#fff",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                  }}
                >
                  Cancel
                </button> */}
                <button
                  onClick={cancelEditMode}
                  type="submit"
                  className="btn btn-outline-primary btn-block me-3"
                >
                  Cancel
                </button>
              </div>
            </form>
          ) : (
            <div>
              <div style={{ marginBottom: "10px" }}>
                <strong>Name:</strong> {studentInfo.name}
              </div>
              <div style={{ marginBottom: "10px" }}>
                <strong>Email:</strong> {studentInfo.email}
              </div>
              <div style={{ marginBottom: "10px" }}>
                <strong>Age:</strong> {studentInfo.age}
              </div>
              <div style={{ marginBottom: "10px" }}>
                <strong>Date of Birth:</strong> {studentInfo.dob}
              </div>
              <div style={{ marginBottom: "10px" }}>
                <strong>Password:</strong> ********
              </div>
              <div style={{ textAlign: "center" }}>
                {/* <button className="me-3"
                  onClick={startEditMode}
                  style={{
                    padding: "10px 20px",
                    background: "#007bff",
                    color: "#fff",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                  }}
                >
                  Edit
                </button> */}
                <button
                  onClick={startEditMode}
                  type="submit"
                  className="btn btn-primary btn-block me-3"
                >
                  Edit
                </button>
                {/* <Link  className="nav-link mt-2" to="/student">Back</Link> */}
                <button
                  className="btn btn-outline-primary"
                  onClick={() => navigate(-1)}
                >
                  Go Back
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Student_Dashboard;
