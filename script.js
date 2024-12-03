// Получаем элементы
const openBtn = document.getElementById("openBtn");
const modal = document.getElementById("modal");
const closeBtn = document.getElementById("closeBtn");
const likeBtn = document.getElementById("likeBtn");
const mainText = document.getElementById("mainText"); // Основная надпись
const fortuneBtn = document.getElementById("fortuneBtn"); // Кнопка Фортуна
const fortuneMessage = document.getElementById("fortuneMessage"); // Элемент для комплимента
const fortuneText = document.getElementById("fortuneText"); // Текст комплимента

// Массив с комплиментами
const compliments = [
    "Ты — моя звезда! ⭐",
    "Ты самая красивая! 💖",
    "Ты — мое счастье! 🌟",
    "Ты волшебная! ✨",
    "Ты — лучшая! 🏅",
    "Ты моя мечта! 🌙"
];

// Функция для отображения модального окна
function showMessage() {
    mainText.style.display = "none"; // Скрываем основную надпись
    modal.classList.add("show"); // Показываем модальное окно
}

// Функция для скрытия модального окна
function hideMessage() {
    mainText.style.display = "block"; // Показываем основную надпись
    modal.classList.remove("show"); // Скрываем модальное окно
}

// Функция для действия при нажатии кнопки "Ты тоже меня любишь?"
function loveMessage() {
    alert("Да, я тебя люблю! 💖");
}

// Функция для запуска "Фортуны"
function fortune() {
    fortuneMessage.classList.add("show"); // Показываем сообщение

    // Вращаем текст комплимента и выбираем случайный комплимент
    let counter = 0;
    let interval = setInterval(() => {
        fortuneText.textContent = compliments[counter % compliments.length];
        counter++;
    }, 500); // Каждые 500мс меняем комплимент

    // После 3 секунд останавливаем вращение
    setTimeout(() => {
        clearInterval(interval);
        fortuneText.style.animation = 'none'; // Убираем анимацию вращения
        setTimeout(() => {
            fortuneMessage.classList.remove("show"); // Скрываем сообщение
        }, 500); // Немного подождать перед скрытием
    }, 3000); // Останавливаем через 3 секунды
}

// Назначаем обработчики для кнопок
openBtn.addEventListener("click", showMessage); // Открыть модальное окно
closeBtn.addEventListener("click", hideMessage); // Закрыть модальное окно
likeBtn.addEventListener("click", loveMessage); // Ответить на вопрос с любовью
fortuneBtn.addEventListener("click", fortune); // Запуск "Фортуны"
