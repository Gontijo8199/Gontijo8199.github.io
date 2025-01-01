document.addEventListener("DOMContentLoaded", () => {
    const quoteElement = document.getElementById("random-quote");
    
    fetch("https://go-quote.azurewebsites.net/api/Quote/Random")
        .then(response => {
            if (!response.ok) {
                throw new Error("Erro ao obter a frase motivacional.");
            }
            return response.json();
        })
        .then(data => {
            quoteElement.textContent = `"${data.text}" — ${data.author}`;
        })
        .catch(error => {
            quoteElement.textContent = "Não foi possível carregar uma frase motivacional no momento.";
            console.error(error);
        });
});
