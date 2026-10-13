// Service worker mínimo: só existe para o Chrome reconhecer a app como instalável.
// Não guarda dados nem faz cache.
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", e => e.waitUntil(self.clients.claim()));
self.addEventListener("fetch", () => {});
