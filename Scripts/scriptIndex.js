document.addEventListener('DOMContentLoaded', function () {
    const dropdown = document.querySelector('.dropdown');
    const dropdownContent = dropdown.querySelector('.dropdown-content');

    // Показване и скриване на падащото меню
    dropdown.addEventListener('click', function (e) {
        e.stopPropagation();
        dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
    });

    // Скриване на менюто при клик извън него
    document.addEventListener('click', function () {
        dropdownContent.style.display = 'none';
    });

    // Клик върху елементи в менюто
    dropdownContent.addEventListener('click', function (e) {
        e.stopPropagation();
    });
});

