import lean from "../assets/lean.jpg";
import "./About.css";

export default function About() {
  return (
    <div className="about-container">
      <main className="about-text">
        <h1>Josef Wolf</h1>
        <p>
          Hi! I am a Computer Science and Data Science student at UW-Madison, expected to graduate May 2026. 
          I have experience with C, Java, Python, and more, and I am eager to continue growing in the field. 
          I’m always open to learning and connecting with others in the industry!
        </p>
      </main>
      <div className="about-image">
        <img src={lean} alt="Josef Wolf" />
      </div>
    </div>
  );
}
