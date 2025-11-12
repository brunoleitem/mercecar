const contactForm = document.querySelector("#contact form");

const scriptUrl =
  "https://script.google.com/macros/s/AKfycbzJBMGkLXYOhK68Luz7kdKtiICaYSs2BUVbXPnieXPmlI4nu3gqY5mrVmtwuFsL9INj/exec";

contactForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const data = {};
  const inputs = contactForm.querySelectorAll("input");
  console.log(inputs);
  for (const input of inputs) {
    data[input.name] = input.value;
  }
  const textarea = contactForm.querySelector("textarea");
  data[textarea.name] = textarea.value;

  alert("Enviado com sucesso!");
});
