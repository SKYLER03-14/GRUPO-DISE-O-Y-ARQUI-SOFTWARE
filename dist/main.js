"use strict";
// Sample events data
const events = [
    {
        id: 1,
        title: "Festival de Electrónica",
        date: "15 Oct 2025",
        time: "8:00 PM",
        location: "Estadio Nacional",
        capacity: 300,
    },
    {
        id: 2,
        title: "Vibes Perú 2025",
        date: "22 Oct 2025",
        time: "6:00 PM",
        location: "Great Arena",
        capacity: 2500,
    },
    {
        id: 3,
        title: "Feria Gastronómica Mixtura",
        date: "29 Oct 2025",
        time: "11:00 AM",
        location: "Parque de la Amistad",
        capacity: 500,
    },
];
// Initialize app
function initializeApp() {
    console.log("[v0] Eventía app initialized");
    setupEventListeners();
    setupAuthFormListeners();
    loadEvents();
}
// Setup event listeners
function setupEventListeners() {
    // Search button
    const searchBtn = document.querySelector(".btn-search");
    const searchInput = document.querySelector(".search-bar input");
    if (searchBtn && searchInput) {
        searchBtn.addEventListener("click", () => handleSearch(searchInput.value));
        searchInput.addEventListener("keypress", (e) => {
            if (e.key === "Enter") {
                handleSearch(searchInput.value);
            }
        });
    }
    // Event detail buttons
    const detailButtons = document.querySelectorAll(".btn-details");
    detailButtons.forEach((btn, index) => {
        btn.addEventListener("click", () => handleEventClick(index));
    });
    // Category cards
    const categoryCards = document.querySelectorAll(".category-card");
    categoryCards.forEach((card) => {
        card.addEventListener("click", () => handleCategoryClick(card));
    });
    // Auth buttons
    const loginBtn = document.querySelector(".btn-login");
    const registerBtn = document.querySelector(".btn-register");
    if (loginBtn) {
        loginBtn.addEventListener("click", () => handleLogin());
    }
    if (registerBtn) {
        registerBtn.addEventListener("click", () => handleRegister());
    }
}
// Handle search
function handleSearch(query) {
    if (query.trim() === "") {
        alert("Por favor ingresa un término de búsqueda");
        return;
    }
    console.log(`[v0] Searching for: ${query}`);
    alert(`Buscando eventos: "${query}"`);
}
// Handle event click
function handleEventClick(index) {
    const event = events[index];
    console.log(`[v0] Event clicked: ${event.title}`);
    alert(`Evento: ${event.title}\nFecha: ${event.date}\nUbicación: ${event.location}`);
}
// Handle category click
function handleCategoryClick(card) {
    const categoryName = card.querySelector("h3")?.textContent || "Categoría";
    console.log(`[v0] Category clicked: ${categoryName}`);
    alert(`Mostrando eventos de: ${categoryName}`);
}
// Handle login
function handleLogin() {
    console.log("[v0] Login button clicked");
    window.location.href = "login.html";
}
// Handle register
function handleRegister() {
    console.log("[v0] Register button clicked");
    window.location.href = "register.html";
}
// Setup auth form handlers for login and register pages
function setupAuthFormListeners() {
    const loginForm = document.getElementById("loginForm");
    const registerForm = document.getElementById("registerForm");
    if (loginForm) {
        loginForm.addEventListener("submit", (e) => handleLoginSubmit(e));
    }
    if (registerForm) {
        registerForm.addEventListener("submit", (e) => handleRegisterSubmit(e));
    }
    // Account type selector for register page
    const accountTypeButtons = document.querySelectorAll(".account-type-btn");
    accountTypeButtons.forEach((btn) => {
        btn.addEventListener("click", () => {
            accountTypeButtons.forEach((b) => b.classList.remove("active"));
            btn.classList.add("active");
            console.log(`[v0] Account type selected: ${btn.getAttribute("data-type")}`);
        });
    });
    // Social login buttons
    const socialButtons = document.querySelectorAll(".btn-social");
    socialButtons.forEach((btn) => {
        btn.addEventListener("click", (e) => {
            e.preventDefault();
            const provider = btn.classList.contains("google") ? "Google" : "Facebook";
            console.log(`[v0] Social login with ${provider}`);
            alert(`Iniciando sesión con ${provider}...`);
        });
    });
}
function handleLoginSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const email = form.querySelector("#email").value;
    const remember = form.querySelector("#remember").checked;
    console.log(`[v0] Login attempt: ${email}, Remember: ${remember}`);
    alert(`Iniciando sesión con: ${email}`);
    // Redirect to home after login
    setTimeout(() => {
        window.location.href = "index.html";
    }, 1000);
}
function handleRegisterSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const nombre = form.querySelector("#nombre").value;
    const apellidos = form.querySelector("#apellidos").value;
    const email = form.querySelector("#email-register").value;
    const password = form.querySelector("#password-register").value;
    const confirmPassword = form.querySelector("#confirm-password").value;
    const terms = form.querySelector("#terms").checked;
    if (password !== confirmPassword) {
        alert("Las contraseñas no coinciden");
        return;
    }
    if (!terms) {
        alert("Debes aceptar los términos y condiciones");
        return;
    }
    console.log(`[v0] Register attempt: ${nombre} ${apellidos} - ${email}`);
    alert(`Cuenta creada exitosamente para: ${email}`);
    // Redirect to login after registration
    setTimeout(() => {
        window.location.href = "login.html";
    }, 1000);
}
// Load events
function loadEvents() {
    console.log(`[v0] Loaded ${events.length} events`);
    events.forEach((event) => {
        console.log(`[v0] Event: ${event.title} - ${event.date}`);
    });
}
// Run app when DOM is ready
document.addEventListener("DOMContentLoaded", initializeApp);
//# sourceMappingURL=main.js.map