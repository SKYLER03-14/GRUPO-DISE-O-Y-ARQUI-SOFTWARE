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
  setupAuthFormListeners()
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
  window.location.href = "login.html"
}

// Handle register
function handleRegister(): void {
  console.log("[v0] Register button clicked")
  window.location.href = "register.html"
}

// Setup auth form handlers for login and register pages
function setupAuthFormListeners(): void {
  const loginForm = document.getElementById("loginForm") as HTMLFormElement
  const registerForm = document.getElementById("registerForm") as HTMLFormElement

  if (loginForm) {
    loginForm.addEventListener("submit", (e) => handleLoginSubmit(e))
  }

  if (registerForm) {
    registerForm.addEventListener("submit", (e) => handleRegisterSubmit(e))
  }

  // Account type selector for register page
  const accountTypeButtons = document.querySelectorAll(".account-type-btn")
  accountTypeButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      accountTypeButtons.forEach((b) => b.classList.remove("active"))
      btn.classList.add("active")
      console.log(`[v0] Account type selected: ${btn.getAttribute("data-type")}`)
    })
  })

  // Social login buttons
  const socialButtons = document.querySelectorAll(".btn-social")
  socialButtons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault()
      const provider = btn.classList.contains("google") ? "Google" : "Facebook"
      console.log(`[v0] Social login with ${provider}`)
      alert(`Iniciando sesión con ${provider}...`)
    })
  })
}

function handleLoginSubmit(e: Event): void {
  e.preventDefault()
  const form = e.target as HTMLFormElement
  const email = (form.querySelector("#email") as HTMLInputElement).value
  const remember = (form.querySelector("#remember") as HTMLInputElement).checked

  console.log(`[v0] Login attempt: ${email}, Remember: ${remember}`)
  alert(`Iniciando sesión con: ${email}`)
  // Redirect to home after login
  setTimeout(() => {
    window.location.href = "index.html"
  }, 1000)
}

function handleRegisterSubmit(e: Event): void {
  e.preventDefault()
  const form = e.target as HTMLFormElement
  const nombre = (form.querySelector("#nombre") as HTMLInputElement).value
  const apellidos = (form.querySelector("#apellidos") as HTMLInputElement).value
  const email = (form.querySelector("#email-register") as HTMLInputElement).value
  const password = (form.querySelector("#password-register") as HTMLInputElement).value
  const confirmPassword = (form.querySelector("#confirm-password") as HTMLInputElement).value
  const terms = (form.querySelector("#terms") as HTMLInputElement).checked

  if (password !== confirmPassword) {
    alert("Las contraseñas no coinciden")
    return
  }

  if (!terms) {
    alert("Debes aceptar los términos y condiciones")
    return
  }

  console.log(`[v0] Register attempt: ${nombre} ${apellidos} - ${email}`)
  alert(`Cuenta creada exitosamente para: ${email}`)
  // Redirect to login after registration
  setTimeout(() => {
    window.location.href = "login.html"
  }, 1000)
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