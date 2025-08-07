const btn = document.getElementById("btn");
const popover = document.getElementById("css");

btn.addEventListener("click", () => {
    if (popover.matches(":popover-open")) {
        const rect = btn.getBoundingClientRect();
        popover.style.top = `${rect.bottom + window.scrollY}px`;
        popover.style.left = `${rect.left + window.scrollX}px`;
    }
});