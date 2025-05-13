const graduationDate = new Date("2028-07-01T00:00:00");

function updateCountdown() {
  const now = new Date();
  const diff = graduationDate - now;

  if (diff <= 0) {
    document.querySelector("#countdown").innerHTML =
      "<h2>🎓 Поздравляем! Вы уже окончили бакалавриат!</h2>";
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  document.getElementById("days").textContent = days;
  document.getElementById("hours").textContent = hours;
  document.getElementById("minutes").textContent = minutes;
  document.getElementById("seconds").textContent = seconds;
}

updateCountdown();
setInterval(updateCountdown, 1000);
