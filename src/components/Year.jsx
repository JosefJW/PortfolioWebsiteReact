import { useState } from "react";
import Semester from "./Semester";

export default function Year({ yearData }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="year">
      <div className="toggleable" onClick={() => setIsOpen(!isOpen)}>
        {yearData.year}
      </div>
      <div className={`semesters ${isOpen ? "open" : ""}`}>
        {yearData.semesters.map((semester) => (
          <Semester key={semester.name} semester={semester} />
        ))}
      </div>
    </div>
  );
}
