// ROOM BOOKING

function selectRoom(roomName) {
    document.getElementById("roomSelect").value = roomName;

    document.getElementById("booking").scrollIntoView({
        behavior: "smooth"
    });
}


// BOOKING FORM

const form = document.getElementById("bookingForm");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("guestName").value;
    const room = document.getElementById("roomSelect").value;
    const message = document.getElementById("bookingMessage");

    message.textContent =
        `✓ Booking confirmed! Welcome ${name}. Your ${room} has been reserved.`;

    form.reset();

    updateDashboard();
});


// DASHBOARD UPDATE

function updateDashboard() {

    const bookings = document.getElementById("bookings");
    const rooms = document.getElementById("availableRooms");

    bookings.textContent = Number(bookings.textContent) + 1;
    rooms.textContent = Number(rooms.textContent) - 1;
}


// FAVORITE ROOM

document.querySelectorAll(".heart-btn").forEach(button => {

    button.addEventListener("click", function () {

        this.textContent =
            this.textContent === "♡" ? "♥" : "♡";

        this.style.color =
            this.textContent === "♥" ? "#c9a227" : "black";
    });

});


// PREVENT PAST DATES

const today = new Date().toISOString().split("T")[0];

document.querySelectorAll('input[type="date"]').forEach(input => {
    input.min = today;
});


// PAGE LOADED

console.log("GrandStay Hotel loaded successfully!");