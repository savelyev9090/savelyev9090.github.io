const form = document.getElementById('feedback-form');
const button = form.querySelector('button');

function validateName(name) {
  const nameRegex = /^[а-яА-ЯёЁa-zA-Z\s'\-]+$/;

    if (name.length < 2 || name.length > 30) {
        return false;
    }

    return nameRegex.test(name);
}

function validateEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-z]{2,}$/;

    if (email.length > 254) {
        return false;
    }

    return emailRegex.test(email);
}

function validateMessage(message) {
  const messageRegex = /^[а-яА-ЯёЁa-zA-Z0-9 .,!?\n\r\-]+$/;

  return messageRegex.test(message);
}

form.addEventListener('submit', (e) => {
e.preventDefault();

const name = form.name.value.trim();
const email = form.email.value.trim();
const message = form.message.value.trim();

if (!name || !email || !message) {
  alert("Заполните все поля!");
  return;
}

if (!validateName(name)) {
    alert("Введите, пожалуйста, Ваше реальное имя.");
    return;
}

if (!validateEmail(email)) {
  alert("Неверный формат email!");
  return;
}

if (!validateMessage(message)) {
  alert("Пожалуйста, перепишите обращение.");
  return;
}

button.textContent = "Отправляем...";
button.classList.add("sending");
button.disabled = true;

setTimeout(() => {
    console.log("Отправлено на сервер:", { name, email, message });

    button.textContent = "Успешно отправлено";
    button.classList.remove("sending");
    button.classList.add("success");
    }, 2000);
});