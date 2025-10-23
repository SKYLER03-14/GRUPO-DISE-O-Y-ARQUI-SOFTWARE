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
        bubbles: false,
        cancelBubble: false,
        cancelable: false,
        composed: false,
        currentTarget: undefined,
        defaultPrevented: false,
        eventPhase: 0,
        isTrusted: false,
        returnValue: false,
        srcElement: undefined,
        target: undefined,
        timeStamp: 0,
        type: "",
        composedPath: function () {
            throw new Error("Function not implemented.");
        },
        initEvent: function (type, bubbles, cancelable) {
            throw new Error("Function not implemented.");
        },
        preventDefault: function () {
            throw new Error("Function not implemented.");
        },
        stopImmediatePropagation: function () {
            throw new Error("Function not implemented.");
        },
        stopPropagation: function () {
            throw new Error("Function not implemented.");
        },
        NONE: 0,
        CAPTURING_PHASE: 1,
        AT_TARGET: 2,
        BUBBLING_PHASE: 3
    },
    {
        id: 2,
        title: "Vibra Perú 2025",
        date: "22 Oct 2025",
        time: "6:00 PM",
        location: "Green Arena",
        capacity: 2500,
        bubbles: false,
        cancelBubble: false,
        cancelable: false,
        composed: false,
        currentTarget: undefined,
        defaultPrevented: false,
        eventPhase: 0,
        isTrusted: false,
        returnValue: false,
        srcElement: undefined,
        target: undefined,
        timeStamp: 0,
        type: "",
        composedPath: function () {
            throw new Error("Function not implemented.");
        },
        initEvent: function (type, bubbles, cancelable) {
            throw new Error("Function not implemented.");
        },
        preventDefault: function () {
            throw new Error("Function not implemented.");
        },
        stopImmediatePropagation: function () {
            throw new Error("Function not implemented.");
        },
        stopPropagation: function () {
            throw new Error("Function not implemented.");
        },
        NONE: 0,
        CAPTURING_PHASE: 1,
        AT_TARGET: 2,
        BUBBLING_PHASE: 3
    },
    {
        id: 3,
        title: "Feria Gastronómica Mixtura",
        date: "29 Oct 2025",
        time: "11:00 AM",
        location: "Parque de la Amistad",
        capacity: 500,
        bubbles: false,
        cancelBubble: false,
        cancelable: false,
        composed: false,
        currentTarget: undefined,
        defaultPrevented: false,
        eventPhase: 0,
        isTrusted: false,
        returnValue: false,
        srcElement: undefined,
        target: undefined,
        timeStamp: 0,
        type: "",
        composedPath: function () {
            throw new Error("Function not implemented.");
        },
        initEvent: function (type, bubbles, cancelable) {
            throw new Error("Function not implemented.");
        },
        preventDefault: function () {
            throw new Error("Function not implemented.");
        },
        stopImmediatePropagation: function () {
            throw new Error("Function not implemented.");
        },
        stopPropagation: function () {
            throw new Error("Function not implemented.");
        },
        NONE: 0,
        CAPTURING_PHASE: 1,
        AT_TARGET: 2,
        BUBBLING_PHASE: 3
    },
];
// Initialize app
function initializeApp() {
    console.log("[v0] Eventía app initialized");
    setupEventListeners();
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
    alert("Redirigiendo a página de inicio de sesión...");
}
// Handle register
function handleRegister() {
    console.log("[v0] Register button clicked");
    alert("Redirigiendo a página de registro...");
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