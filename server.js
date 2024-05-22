const express = require("express");
const app = express();
const axios = require("axios");

app.use(express.static("public"));

// Endpoint para enviar mensajes
app.post("/send-message", async (req, res) => {
  try {
    const response = await axios.post("https://your-whatsapp-api-url", {
      // Aquí va la configuración de tu solicitud a la API de WhatsApp
    });
    res.send(response.data);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
