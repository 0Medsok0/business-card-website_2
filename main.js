const form = document.querySelector("form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = nameInput.value;
  const email = emailInput.value;

  window.open(
    `mailto:smykov.iw@yandex.ru?subject=subject&body=Сообщение с сайта&body=Имя: ${name}\nEmail: ${email}`
  );

  // Очистка полей формы после отправки
  nameInput.value = "";
  emailInput.value = "";
});
