// Получаем элементы
const openBtn = document.getElementById("openBtn");
const modal = document.getElementById("modal");
const closeBtn = document.getElementById("closeBtn");
const likeBtn = document.getElementById("likeBtn");
const mainText = document.getElementById("mainText"); // Основная надпись

// Функция для отображения модального окна
function showMessage() {
    // Скрываем основную надпись
    mainText.style.display = "none";

    // Показываем модальное окно
    modal.classList.add("show");
}

// Функция для скрытия модального окна
function hideMessage() {
    // Показываем основную надпись
    mainText.style.display = "block";

    // Скрываем модальное окно
    modal.classList.remove("show");
}

// Функция для действия при нажатии кнопки "Ты тоже меня любишь?"
function loveMessage() {
    alert("Да, я тебя люблю! 💖");
}

// Назначаем обработчики для кнопок
openBtn.addEventListener("click", showMessage); // Открыть модальное окно
closeBtn.addEventListener("click", hideMessage); // Закрыть модальное окно
likeBtn.addEventListener("click", loveMessage); // Ответить на вопрос с любовью
