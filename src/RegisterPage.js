import React, { useState } from "react";
import './RegisterPage.css'

function RegisterUser() {
    const [userData, setUserData] = useState({
        email: "",
        name: "",
        username: "",
        password: "",
        confirmPassword: "",
    });

    const [userDataErrors, setUserDataErrors] = useState({
        emailError: "",
        nameError: "",
        usernameError: "",
        passwordError: "",
        confirmPasswordError: "",
    });

    const handleData = (e) => {
        const { name, value } = e.target;

        if (name === "email") {
            setUserData({ ...userData, email: value });

            const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            setUserDataErrors({
                ...userDataErrors,
                emailError: value.length === 0
                    ? "This field is required"
                    : !emailRegex.test(value)
                    ? "Please enter a valid email"
                    : "",
            });
        } else if (name === "name") {
            setUserData({ ...userData, name: value });

            setUserDataErrors({
                ...userDataErrors,
                nameError: value.length === 0 ? "This field is required" : "",
            });
        } else if (name === "username") {
            setUserData({ ...userData, username: value });

            const usernameRegex = /^\S*$/;
            setUserDataErrors({
                ...userDataErrors,
                usernameError: value.length === 0
                    ? "This field is required"
                    : !usernameRegex.test(value)
                    ? "Username must not contain spaces"
                    : "",
            });
        } else if (name === "password") {
            setUserData({ ...userData, password: value });

            const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@%$#*])[A-Za-z\d@%$#*]{8,}$/;
            setUserDataErrors({
                ...userDataErrors,
                passwordError: value.length === 0
                    ? "This field is required"
                    : !passwordRegex.test(value)
                    ? "Password must be at least 8 characters long, contain one lowercase, one uppercase, one digit, and one special character"
                    : "",
            });
        } else if (name === "confirmPassword") {
            setUserData({ ...userData, confirmPassword: value });

            setUserDataErrors({
                ...userDataErrors,
                confirmPasswordError: value !== userData.password ? "Passwords do not match" : "",
            });
        }
    };

    const submitData = (e) => {
        e.preventDefault();
        alert("Registration successful!");
    };

    const isFormValid =
        userData.email &&
        userData.name &&
        userData.username &&
        userData.password &&
        userData.confirmPassword &&
        !userDataErrors.emailError &&
        !userDataErrors.nameError &&
        !userDataErrors.usernameError &&
        !userDataErrors.passwordError &&
        !userDataErrors.confirmPasswordError;

    return (
        <form onSubmit={submitData}>
            <h1 className="text-center text-secondary">Register</h1>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email Address</label>
                <input
                    type="email"
                    className={`form-control ${userDataErrors.emailError ? "is-invalid" : "is-valid" && null}`}
                    value={userData.email}
                    onChange={handleData}
                    name="email"
                />
                <p className="text-danger">{userDataErrors.emailError}</p>
            </div>

            <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input
                    type="text"
                    className={`form-control ${userDataErrors.nameError ? "is-invalid" : "is-valid" && null}`}
                    value={userData.name}
                    onChange={handleData}
                    name="name"
                />
                <p className="text-danger">{userDataErrors.nameError}</p>
            </div>

            <div className="mb-3">
                <label htmlFor="username" className="form-label">Username</label>
                <input
                    type="text"
                    className={`form-control ${userDataErrors.usernameError ? "is-invalid" : "is-valid" && null}`}
                    value={userData.username}
                    onChange={handleData}
                    name="username"
                />
                <p className="text-danger">{userDataErrors.usernameError}</p>
            </div>

            <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input
                    type="password"
                    className={`form-control ${userDataErrors.passwordError ? "is-invalid" : "is-valid" && null}`}
                    value={userData.password}
                    onChange={handleData}
                    name="password"
                />
                <p className="text-danger">{userDataErrors.passwordError}</p>
            </div>

            <div className="mb-3">
                <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                <input
                    type="password"
                    className={`form-control ${userDataErrors.confirmPasswordError ? "is-invalid" : "is-valid" && null}`}
                    value={userData.confirmPassword}
                    onChange={handleData}
                    name="confirmPassword"
                />
                <p className="text-danger">{userDataErrors.confirmPasswordError}</p>
            </div>

            <button type="submit" className="btn btn-primary" disabled={!isFormValid}>
                Submit
            </button>
        </form>
    );
}

export default RegisterUser;
