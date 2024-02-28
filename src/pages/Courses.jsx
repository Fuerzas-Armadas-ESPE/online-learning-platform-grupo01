import { useEffect, useState } from "react";
import { getCoursesFromFirestore } from "../api/coursesApi";

const Courses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      const coursesData = await getCoursesFromFirestore();
      const formattedCourses = coursesData.map((course) => ({
        ...course,
        create: course.create.toDate(),
      }));
      setCourses(formattedCourses);
    };

    fetchCourses();
  }, []);

  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    padding: "20px",
    border: "1px solid #e0e0e0",
    borderRadius: "10px",
    maxWidth: "800px", // Aumenté el ancho de la tabla para mostrar mejor los datos
    margin: "auto",
    marginTop: "50px",
  };

  const tableStyle = {
    width: "100%",
    borderCollapse: "collapse",
    marginTop: "20px",
  };

  const thStyle = {
    backgroundColor: "#f2f2f2",
    padding: "10px",
    border: "1px solid #dddddd",
    textAlign: "left",
  };

  const tdStyle = {
    padding: "10px",
    border: "1px solid #dddddd",
    textAlign: "left",
  };

  return (
    <div style={containerStyle}>
      <h1>Courses</h1>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>Title</th>
            <th style={thStyle}>Description</th>
            <th style={thStyle}>Instructor</th>
            <th style={thStyle}>Created</th>
            <th style={thStyle}>URL</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course) => (
            <tr key={course.id}>
              <td style={tdStyle}>{course.title}</td>
              <td style={{ ...tdStyle, textAlign: "justify" }}>{course.description}</td>
              <td style={tdStyle}>{course.instructor}</td>
              <td style={tdStyle}>{new Date(course.create).toLocaleString()}</td>
              <td style={tdStyle}>
                <a href={course.url} target="_blank" rel="noopener noreferrer">
                  {course.url}
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Courses;