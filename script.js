function showPopup() {

    const name = document.getElementById("full_name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const amount = document.getElementById("amount").value;

    if (name === "" || email === "" || phone === "" || amount === "") {
        alert("Please complete all required fields before donating.");
        return;
    }

    document.getElementById("popup").style.display = "flex";
}

function closePopup() {
    document.getElementById("popup").style.display = "none";

    // Refresh page
    location.reload();
}

function updateDateStamp() {
    const dateElement = document.getElementById("date-stamp");
    const currentDate = new Date();
    const options = { year: "numeric", month: "long", day: "numeric" };
    dateElement.textContent = currentDate.toLocaleDateString(undefined, options);
}

window.onload = updateDateStamp;