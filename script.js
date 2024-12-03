// Функция для отображения сообщения
function showMessage() {
    const modal = document.getElementById("modal");
    modal.classList.remove("hidden"); // Показываем модальное окно
}

// Функция для скрытия сообщения
function hideMessage() {
    const modal = document.getElementById("modal");
    modal.classList.add("hidden"); // Скрываем модальное окно
}
