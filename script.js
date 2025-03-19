document.addEventListener("DOMContentLoaded", function () {
    const jugadoresPorTier = {
        "N+": ["Andrs", "Danverz", "Jerwmy", "Pul"],
        "S": ["vMwn", "4Lgnd", "3Milly", "Anntz", "Blood", "1Wos", "Abrantostado", "Arcen", "Cottgg", "Juanz", "Maytane", "SxRodriSV", "Straw"],
        "A": ["oAxls", "4IDeivd", "oFiqz", "Diego_tumam32", "Julicito456", "4Blwq", "4Btx", "4Wtx", "4Mqte", "4Jxhan", "Anii"],
        "B": ["SxYisus", "Gilbeer", "Grxoo", "ChamakitoMateo", "4Nicat", "69Dav", "COF", "AleexGa", "Umilitiz", "4Moree", "Nxhu", "Rxusito24", "4Mvti"]
    };

    const container = document.getElementById("miembros-container");

    for (let tier in jugadoresPorTier) {
        let tierTitle = document.createElement("h3");
        tierTitle.innerText = `Tier ${tier}`;
        container.appendChild(tierTitle);

        let tierContainer = document.createElement("div");
        tierContainer.className = "tier-container";

        jugadoresPorTier[tier].forEach(jugador => {
            let jugadorCard = document.createElement("div");
            jugadorCard.className = "jugador-card";
            jugadorCard.innerText = jugador;
            tierContainer.appendChild(jugadorCard);
        });

        container.appendChild(tierContainer);
    }
});
