//your JS code here. If required.
document.getElementById("btn").addEventListener("click", showMessage);

function delayTime(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function showMessage() {
    const text = document.getElementById("text").value;
    const delay = Number(document.getElementById("delay").value);
    const output = document.getElementById("output");

    // Clear previous output
    output.textContent = "";

    // Wait for the delay
    await delayTime(delay);

    // Display message
    output.textContent = text;
}

