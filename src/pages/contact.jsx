export default function Contact() {
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