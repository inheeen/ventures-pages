// Открыть модальное окно
document.getElementById("open-modal-btn").addEventListener("click", function() {
    document.getElementById("my-modal").classList.add("open");
});

// Закрыть модальное окно при нажатии на кнопку "Закрыть"
document.getElementById("close-my-modal-btn").addEventListener("click", function() {
    document.getElementById("my-modal").classList.remove("open");
});

// Закрыть модальное окно при нажатии на клавишу Esc
window.addEventListener('keydown', (e) => {
    if (e.key === "Escape") {
        document.getElementById("my-modal").classList.remove("open");
    }
});

// Закрыть модальное окно при клике вне его
document.querySelector("#my-modal .modal__box").addEventListener('click', event => {
    event.stopPropagation(); // Остановить всплытие события
});

document.getElementById("my-modal").addEventListener('click', event => {
    document.getElementById("my-modal").classList.remove("open");
});