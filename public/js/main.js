document.getElementById("messageForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const phoneNumber = document.getElementById("phoneNumber").value;
  const message = document.getElementById("message").value;

  try {
    const response = await fetch("/send-message", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ phoneNumber, message }),
    });

    const data = await response.json();
    alert(`Mensaje enviado: ${data.message}`);
  } catch (error) {
    alert(`Error: ${error.message}`);
  }
});
