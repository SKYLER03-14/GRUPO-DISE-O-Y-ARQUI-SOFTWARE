// Event interface
interface EventItem {
  id: number
  title: string
  date: string
  time: string
  location: string
  capacity: number
}

// Sample events data
const events: EventItem[] = [
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
]

// Initialize app
function initializeApp(): void {
  console.log("[v0] Eventía app initialized")
  setupEventListeners()
  loadEvents()
}

// Setup event listeners
function setupEventListeners(): void {
  // Search button
  const searchBtn = document.querySelector(".btn-search") as HTMLButtonElement
  const searchInput = document.querySelector(".search-bar input") as HTMLInputElement

  if (searchBtn && searchInput) {
    searchBtn.addEventListener("click", () => handleSearch(searchInput.value))
    searchInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        handleSearch(searchInput.value)
      }
    })
  }

  // Event detail buttons
  const detailButtons = document.querySelectorAll(".btn-details")
  detailButtons.forEach((btn, index) => {
    btn.addEventListener("click", () => handleEventClick(index))
  })

  // Category cards
  const categoryCards = document.querySelectorAll(".category-card")
  categoryCards.forEach((card) => {
    card.addEventListener("click", () => handleCategoryClick(card))
  })

  // Auth buttons
  const loginBtn = document.querySelector(".btn-login") as HTMLButtonElement
  const registerBtn = document.querySelector(".btn-register") as HTMLButtonElement

  if (loginBtn) {
    loginBtn.addEventListener("click", () => handleLogin())
  }

  if (registerBtn) {
    registerBtn.addEventListener("click", () => handleRegister())
  }
}

// Handle search
function handleSearch(query: string): void {
  if (query.trim() === "") {
    alert("Por favor ingresa un término de búsqueda")
    return
  }
  console.log(`[v0] Searching for: ${query}`)
  alert(`Buscando eventos: "${query}"`)
}

// Handle event click
function handleEventClick(index: number): void {
  const event = events[index]
  console.log(`[v0] Event clicked: ${event.title}`)
  alert(`Evento: ${event.title}\nFecha: ${event.date}\nUbicación: ${event.location}`)
}

// Handle category click
function handleCategoryClick(card: Element): void {
  const categoryName = card.querySelector("h3")?.textContent || "Categoría"
  console.log(`[v0] Category clicked: ${categoryName}`)
  alert(`Mostrando eventos de: ${categoryName}`)
}

// Handle login
function handleLogin(): void {
  console.log("[v0] Login button clicked")
  alert("Redirigiendo a página de inicio de sesión...")
}

// Handle register
function handleRegister(): void {
  console.log("[v0] Register button clicked")
  alert("Redirigiendo a página de registro...")
}

// Load events
function loadEvents(): void {
  console.log(`[v0] Loaded ${events.length} events`)
  events.forEach((event) => {
    console.log(`[v0] Event: ${event.title} - ${event.date}`)
  })
}

// Run app when DOM is ready
document.addEventListener("DOMContentLoaded", initializeApp)