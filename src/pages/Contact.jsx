import bridge from "../assets/bridge.jpg";
import "./Contact.css"

export default function Contact() {
  return (
    <main className="contact-page">
      <img src={bridge} alt="Bridge" className="contact-image" />
      <div className="contact-info">
        <h1>Contact Me Here:</h1>
        <div className="contact-method">
          <h3>Email:</h3>
          <a href="mailto:josefwolf591@gmail.com">josefwolf591@gmail.com</a>
          <p>Quickest response</p>
        </div>
        <div className="contact-method">
          <h3>LinkedIn:</h3>
          <a
            href="https://www.linkedin.com/in/josef-j-wolf"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin.com/in/josef-j-wolf
          </a>
        </div>
      </div>
    </main>
  );
}
