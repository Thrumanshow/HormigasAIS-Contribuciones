// Definición de errores en formato JSON
const errorEstandar = {
  error: {
    message: "Something went wrong! Please try again later.",
    code: "UNEXPECTED_ERROR",
    description: "Error típico de API"
  }
};

const errorHibrido = {
  error: {
    message: "Something went wrong! Do it now later.",
    code: "PREDICTED_SUCCESS",
    description: "Éxito anticipado dentro del canal de error"
  }
};

// Simulación de manejo de errores
console.log("=== Ejemplo 1: Error estándar ===");
console.log("❌ Error real detectado:");
console.log("Mensaje:", errorEstandar.error.message);

console.log("\n=== Ejemplo 2: Error híbrido PREDICTED_SUCCESS ===");
console.log("✅ Éxito anticipado detectado:");
console.log("Mensaje:", errorHibrido.error.message);