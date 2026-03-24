/**
 * NEXUS 2026 - Official Landing Page Logic
 * Hand-coded for high performance and security.
 */

document.addEventListener("DOMContentLoaded", () => {
  const eventForm = document.getElementById("eventForm");
  const submitBtn = document.getElementById("submitBtn");
  const successMsg = document.getElementById("successMsg");

  // 1. Form Submission Handler
  if (eventForm) {
    eventForm.addEventListener("submit", async (e) => {
      e.preventDefault();

      // Store original button state
      const originalBtnContent = submitBtn.innerHTML;

      // Set Loading State
      submitBtn.disabled = true;
      submitBtn.innerHTML = `
                <div class="flex items-center justify-center gap-3">
                    <svg class="animate-spin h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span>Securing Spot...</span>
                </div>
            `;

      // Simulation of API Processing
      try {
        // Collect Data (Ready for HTTPS POST)
        const formData = {
          name: document.getElementById("name").value,
          email: document.getElementById("email").value,
        };

        console.log("Dispatching Registration:", formData);

        // Delay to simulate network latency
        await new Promise((resolve) => setTimeout(resolve, 2500));

        // On Success: Smooth Transition
        eventForm.classList.add("hidden");
        successMsg.classList.remove("hidden");
      } catch (error) {
        console.error("Registration failed:", error);
        alert("Connection timeout. Please check your network and try again.");
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalBtnContent;
      }
    });
  }

  // 2. Dynamic Navbar Scroll Effect
  window.addEventListener("scroll", () => {
    const nav = document.querySelector("nav");
    if (window.scrollY > 80) {
      nav.classList.add("shadow-2xl", "py-1", "bg-white/90");
    } else {
      nav.classList.remove("shadow-2xl", "py-1", "bg-white/90");
    }
  });
});
