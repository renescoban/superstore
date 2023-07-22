'use client'

import { useState } from "react";

const page = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: ''
      });

      function signUpUser(userData) {
        // Replace the following URL with your server endpoint for saving to MongoDB
        const url = 'YOUR_SERVER_ENDPOINT';

        // Send the user data to your server
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        })
        .then(response => response.json())
        .then(data => {
            // Handle the response from the server, e.g., show success message, redirect, etc.
            console.log(data);
            alert('Signup successful!');
        })
        .catch(error => {
            // Handle errors here
            console.error('Error:', error);
            alert('Signup failed. Please try again later.');
        });
    }



      const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
          ...formData,
          [name]: value
        });
      };
      const handleSubmit = (event) => {
        event.preventDefault();
        // Add code to handle form submission here (e.g., call an API or perform validation)
        console.log(formData);
      };

    return (
        <div className="flex flex-col justify-center items-center">
            <h1>Signup</h1>
            <form id="signupForm" onSubmit={handleSubmit} className="flex flex-col" >
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" name="username" value={formData.username} onChange={handleChange} required />

                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />

                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} required /> 
                
                <button type="submit">Sign Up</button>
            </form>
        </div>
    )
}

export default page