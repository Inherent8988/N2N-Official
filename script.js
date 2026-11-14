document.addEventListener("DOMContentLoaded", () => {
  const openModal = (modal) => {
    if (!modal) return;
    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  };

  const closeModal = (modal) => {
    if (!modal) return;
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  };

  document.querySelectorAll(".modal").forEach((modal) => {
    modal.querySelector(".modal-close")?.addEventListener("click", () => closeModal(modal));
    modal.addEventListener("click", (event) => {
      if (event.target === modal) closeModal(modal);
    });
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      document.querySelectorAll(".modal.is-open").forEach(closeModal);
    }
  });

  document.getElementById("episodesButton")?.addEventListener("click", () => {
    openModal(document.getElementById("episodesNotice"));
  });

  document.getElementById("continueEpisodes")?.addEventListener("click", () => {
    window.location.href = "episodes.html";
  });

  document.getElementById("aboutButton")?.addEventListener("click", () => {
    openModal(document.getElementById("aboutModal"));
  });

  document.getElementById("episodeOneButton")?.addEventListener("click", () => {
    openModal(document.getElementById("episodeModal"));
  });
});
