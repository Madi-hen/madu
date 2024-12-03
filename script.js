// Функция для отображения модального окна
function showMessage() {
    console.log("Кнопка нажата!"); // Проверка в консоли
    const modal = document.getElementById("modal");
    if (modal) {
        modal.classList.remove("hidden"); // Показываем модальное окно
        console.log("Модальное окно показано");
    } else {
        console.error("Модальное окно не найдено");
    }
}

// Функция для скрытия модального окна
function hideMessage() {
    console.log("Закрыть нажато!"); // Проверка в консоли
    const modal = document.getElementById("modal");
    if (modal) {
        modal.classList.add("hidden"); // Скрываем модальное окно
        console.log("Модальное окно скрыто");
    } else {
        console.error("Модальное окно не найдено");
    }
}

// Добавляем обработчик для кнопки закрытия после загрузки страницы
window.onload = function() {
    const closeBtn = document.getElementById("closeBtn");
    if (closeBtn) {
        closeBtn.addEventListener("click", hideMessage); // Назначаем событие на кнопку "Закрыть"
        console.log("Обработчик на кнопку 'Закрыть' добавлен");
    } else {
        console.error("Кнопка 'Закрыть' не найдена");
    }
};
