const container = document.getElementById('container');
const registerBtn = document.getElementById('registerBtn'); // Changed to correct button id
const loginBtn = document.getElementById('loginBtn'); // Changed to correct button id

registerBtn.addEventListener('click', () => {
    container.classList.add("active"); // Corrected spelling of "active"
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active"); // Corrected to remove "active" class
});
