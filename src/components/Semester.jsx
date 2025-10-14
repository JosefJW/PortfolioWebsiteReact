import { useState } from "react";
import Course from "./Course";

export default function Semester({ semester }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div className="toggleable" onClick={() => setIsOpen(!isOpen)}>
        {semester.name}
      </div>
      <div className={`courses ${isOpen ? "open" : ""}`}>
        {semester.courses.map((course) => (
          <Course key={course.code} course={course}></Course>
        ))}
      </div>
    </div>
  );
}
