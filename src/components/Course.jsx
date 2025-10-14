export default function Course({ course }) {
  return (
    <div className="course">
      <h3>{course.code}</h3>
      <h4>{course.title}</h4>
      <p>{course.description}</p>
      {course.grade && <p>Grade: {course.grade}</p>}
    </div>
  );
}
