interface Event {
    id: number;
    title: string;
    date: string;
    time: string;
    location: string;
    capacity: number;
}
declare const events: Event[];
declare function initializeApp(): void;
declare function setupEventListeners(): void;
declare function handleSearch(query: string): void;
declare function handleEventClick(index: number): void;
declare function handleCategoryClick(card: Element): void;
declare function handleLogin(): void;
declare function handleRegister(): void;
declare function loadEvents(): void;
//# sourceMappingURL=main.d.ts.map