import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const [asientos, setAsientos] = useState([]); // Estado inicial vacío para los asientos

  // Obtener los asientos desde el backend
  useEffect(() => {
    const fetchAsientos = async () => {
      try {
        const response = await axios.get("http://localhost:3001/api/asientos");
        setAsientos(response.data); // Guardar los datos obtenidos en el estado
      } catch (error) {
        console.error("Error al obtener los asientos:", error.message);
        alert("No se pudieron cargar los asientos.");
      }
    };

    fetchAsientos(); // Llamar a la función al montar el componente
  });

  // Reservar un asiento
  const reservarAsiento = async (numero) => {
    try {
      const response = await axios.post(
        "http://localhost:3001/api/asientos/reservar",
        { numero, reservadoPor: "Pedro" }
      );
      setAsientos((prev) =>
        prev.map((asiento) =>
          asiento.numero === numero
            ? { ...asiento, disponible: 0, reservadoPor: "Usuario" }
            : asiento
        )
      );
    } catch (error) {
      console.error("Error al reservar el asiento:", error.message);
      alert("El asiento no pudo ser reservado.");
    }
  };

  // Liberar un asiento
  const liberarAsiento = async (numero) => {
    try {
      const response = await axios.post(
        " http://localhost:3001/api/asientos/liberar",
        { numero }
      );
      setAsientos((prev) =>
        prev.map((asiento) =>
          asiento.Numero === numero
            ? { ...asiento, disponible: 1, reservadoPor: null }
            : asiento
        )
      );
    } catch (error) {
      console.error("Error al liberar el asiento:", error.message);
      alert("El asiento no pudo ser liberado.");
    }
  };

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Reserva de Asientos</h1>
      <div className="row">
        {asientos.map((asiento) => (
          <div key={asiento.Numero} className="col-md-3 col-sm-6 mb-3">
            <button
              className={`btn btn-block ${
                asiento.Disponible ? "btn-success" : "btn-danger"
              }`}
              onClick={() =>
                asiento.Disponible
                  ? reservarAsiento(asiento.Numero)
                  : liberarAsiento(asiento.Numero)
              }
            >
              {asiento.Disponible
                ? `Asiento ${asiento.Numero}`
                : `Reservado (${asiento.reservadoPor || "N/A"})`}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
