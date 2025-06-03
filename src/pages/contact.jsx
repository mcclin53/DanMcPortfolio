import React, { useState } from 'react';

export default function Contact() {
    const [formData, setFormData] = useState({
        Name: '',
        Email: '',
        Message: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    return (
        <div>
            <h1>Contact Me</h1>
            <form>
                <input
                    type="text"
                    name="Name"
                    value={formData.Name}
                    onChange={handleInputChange}
                    placeholder="Name"
                />
                                <input
                    type="text"
                    name="Email"
                    value={formData.Email}
                    onChange={handleInputChange}
                    placeholder="Email"
                />
                                <input
                    type="text"
                    name="Message"
                    value={formData.Message}
                    onChange={handleInputChange}
                    placeholder="Message"
                />
                <button>Submit</button>
            </form>
        </div>
    );
}