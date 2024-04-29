import { useState } from "react";

export default function ContactForm() {
  const [result, setResult] = useState("");
  const [name, setName] = useState("");
  const accessKey = "d6f78704-093d-4cdb-93bc-5d1628d51e37";

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", accessKey);
    formData.append("subject", name+ " has submitted a form from your website."); 

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setResult("Error submitting form. Please try again.");
    }
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  return (
    <div className="contact-section">
      <h2>Contact Us</h2>
      <p>
        Please fill out the form below and we will get back to you as soon as possible.
      </p>
      <div className="contact-form-wrapper">
        <form onSubmit={onSubmit}
        className="contactForm">
          <input
            type="hidden"
            name="access_key"
            value={accessKey}
          />
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={name}
            onChange={handleNameChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="E-mail"
            required
          />
          <textarea
            name="message"
            placeholder="Add your message here."
            required
          />
          <input 
            type="checkbox" 
            name="botcheck" 
            className="hidden" 
            style=
            {{display: "none"}}>
          </input>
          <button type="submit">
            Submit Form
          </button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
}
