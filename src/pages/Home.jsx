import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const Home = () => {
  const containerStyle = {
    padding: "20px",
    textAlign: "center",
    border: "1px solid #e0e0e0",
    borderRadius: "10px",
    maxWidth: "600px", // Establece un ancho máximo para evitar que el contenido se extienda demasiado
    margin: "auto", // Centra el contenido horizontalmente
    marginTop: "50px", // Añade margen superior para centrarlo verticalmente
  };

  const footerStyle = {
    borderTop: "1px solid #e0e0e0",
    paddingTop: "10px",
    color: "#777",
  };

  return (
    <div style={containerStyle}>
      <h1 style={{ color: "#333" }}>Welcome to Online Learning Platform</h1>
      <h2 style={{ color: "#555" }}>Escobar Juliana - Espin Marco</h2>
      <p style={{ color: "#555" }}>Start your learning journey today!</p>
      <footer style={footerStyle}>
      </footer>
    </div>
  );
};

export default Home;
