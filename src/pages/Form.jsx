import React, { useState } from "react";

function ContactForm() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Email:", email);
    console.log("Message:", message);
    // You can send the form data to your server or perform any other action
    // Reset the form fields if needed
    setEmail("");
    setMessage("");
  };

  return (
    <div className="container mx-auto">
      <form onSubmit={handleSubmit} className="mx-auto max-w-lg">
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-300"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleEmailChange}
            className="mt-1 block w-full rounded-md border-gray-300 bg-gray-100 p-2 text-black focus:border-blue-500 focus:ring-blue-500"
            placeholder="Your email"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-300"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={message}
            onChange={handleMessageChange}
            className="mt-1 block w-full rounded-md border-gray-300 bg-gray-100 p-2 text-black focus:border-blue-500 focus:ring-blue-500"
            rows="4"
            placeholder="Your message"
            required
          ></textarea>
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="inline-block rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 focus:bg-blue-600 focus:outline-none"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export { ContactForm };
