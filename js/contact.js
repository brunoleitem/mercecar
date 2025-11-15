const contactForm = document.querySelector("#contact form");

contactForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const data = {};
  const inputs = contactForm.querySelectorAll("input");

  for (const input of inputs) {
    data[input.name] = input.value;
  }
  const textarea = contactForm.querySelector("textarea");
  data[textarea.name] = textarea.value;

  alert("Enviado com sucesso!");
});
