import educationData from "../data/education.json";
import Year from "../components/Year";
import "./education.css";

export default function Education() {
  return (
    <main className="toggleDisplays" id="education">
      {educationData.map((yearData) => (
        <Year key={yearData.year} yearData={yearData} />
      ))}
    </main>
  );
}
