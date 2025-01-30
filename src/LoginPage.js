import React, { useState } from "react";
import './LoginPage.css'

function AddUser() {
    const [userData, setUserData] = useState({
        email: null,
        password: null,
    });

    const [userDataErrors, setUserDataErrors] = useState({
        emailError: "",
        passwordError: "",
    });

    const handleData = (e) => {
        const { name, value } = e.target;

        if (name === "email") {
        setUserData({
            ...userData,
            email: value,
        });


        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        setUserDataErrors({
            ...userDataErrors,
            emailError: value.length === 0 
            ? "This field is required" 
            : !emailRegex.test(value) 
            ? "Please enter a valid email" 
            : "",
        });
        } else if (name === "password") {
        setUserData({
            ...userData,
            password: value,
        });

        // Validate password
        setUserDataErrors({
            ...userDataErrors,
            passwordError: value.length === 0 
            ? "This field is required" 
            : value.length < 8 
            ? "Password must be at least 8 characters long" 
            : "",
        });
        }
    };

    const submitData = (e) => {
        e.preventDefault();
        alert("Form submitted successfully!");
    };

    const isFormValid = 
        userData.email && 
        userData.password && 
        !userDataErrors.emailError && 
        !userDataErrors.passwordError;

    return (
        <form onSubmit={submitData}>
            <h1 className="text-center text-secondary">Login</h1>
        <div className="mb-3">
            <label htmlFor="email" className="form-label">
            Email Address
            </label>
            <input
            type="email"
            className={`form-control ${
                userDataErrors.emailError ? "is-invalid" : "is-valid" &&null
            }`}
            value={userData.email}
            onChange={handleData}
            name="email"
            />
            <p className="text-danger">{userDataErrors.emailError}</p>
        </div>

        <div className="mb-3">
            <label htmlFor="password" className="form-label">
            Password
            </label>
            <input
            type="password"
            className={`form-control ${
                userDataErrors.passwordError ? "is-invalid" : "is-valid" &&null
            }`}
            value={userData.password}
            onChange={handleData}
            name="password"
            />
            <p className="text-danger">{userDataErrors.passwordError}</p>
        </div>

        <button
            type="submit"
            className="btn btn-primary"
            disabled={!isFormValid}
        >
            Submit
        </button>
        </form>
    );
}

export default AddUser;