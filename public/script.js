async function loadContent() {
  try {
    const response = await fetch("/api/content");

    if (!response.ok) {
      throw new Error("Failed to load content");
    }

    const content = await response.json();

    document.getElementById("title").textContent = content.title;
    document.getElementById("message").textContent = content.message;
  } catch (error) {
    document.getElementById("title").textContent = "Content Unavailable";
    document.getElementById("message").textContent =
      "Unable to load content. Please try again later.";

    console.error(error);
  }
}

loadContent();
