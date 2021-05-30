const form = document.getElementById("form");
const email = document.getElementById("email");
const divError = document.getElementById("divError");
const pError = document.getElementById("pError");

form.addEventListener("submit", (e) => {
   // ? pervenir el comportamiento por defecto
   e.preventDefault();
   //

   // ? validar que el email sea validos
   if (
      /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test(
         email.value
      )
   ) {
      divError.classList.add("error");
      pError.classList.add("error");
      email.style.border = "2px solid var(--Desaturated-Red)";
   } else {
      email.style.border = "2px solid red";
      divError.classList.remove("error");
      pError.classList.remove("error");
   }
});
