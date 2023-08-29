const form = document.querySelector('form');

form.addEventListener('submit', handleSubmit);

function handleSubmit (event) {
  event.preventDefault()

  const myForm = event.target // pridobimo formo (html element)
  const formData = new FormData(myForm) // pridobimo podatke iz forme

  // fetch je funkcija, ki pošlje podatke na določen URL
  // v tem primeru pošljemo podatke na isto stran, kjer smo
  // zato, ker Netlify posluša na tej strani, ko pošljemo podatke
  fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(formData).toString(),
  })
    // če je vse v redu, izpišemo sporočilo
    .then(() => console.log("Form successfully submitted"))
    // če pride do napake, izpišemo napako
    .catch((error) => alert(error))
}
