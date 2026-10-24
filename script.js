const form = document.getElementById("queryForm");
const message = document.getElementById("message");

   const webhookUrl = "https://sanchit0333.app.n8n.cloud/webhook/customer_query";

form.addEventListener("submit", async function (event) {
    event.preventDefault();

    const customerData = {
        name: document.getElementById("name").value.trim(),
        email: document.getElementById("email").value.trim(),
        query: document.getElementById("query").value.trim()
    };

    console.log("Sending data to n8n:", customerData);

    try {
        const response = await fetch(webhookUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(customerData)
        });

        console.log("n8n response:", response.status);

      if (response.ok) {
    const data = await response.text();
    message.textContent = data;
    form.reset();
} else {
    message.textContent = "n8n returned an error.";
}

    } catch (error) {
        console.error("Connection error:", error);
        message.textContent = "Unable to connect to n8n.";
    }
});