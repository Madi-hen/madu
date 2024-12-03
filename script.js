// Получаем элементы
const openBtn = document.getElementById("openBtn");
const modal = document.getElementById("modal");
const closeBtn = document.getElementById("closeBtn");
const likeBtn = document.getElementById("likeBtn");

// Функция для отображения модального окна
function showMessage() {
    modal.classList.add("show"); // Показываем модальное окно
}

// Функция для скрытия модального окна
function hideMessage() {
    modal.classList.remove("show"); // Скрываем модальное окно
}

// Функция для действия при нажатии кнопки "Ты тоже меня любишь?"
function loveMessage() {
    alert("Да, я тебя люблю! 💖"); // Сообщение на подтверждение
}

// Назначаем обработчики для кнопок
openBtn.addEventListener("click", showMessage); // Открыть модальное окно
closeBtn.addEventListener("click", hideMessage); // Закрыть модальное окно
likeBtn.addEventListener("click", loveMessage); // Ответить на вопрос с любовью
