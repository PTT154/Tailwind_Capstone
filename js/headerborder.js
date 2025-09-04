const header = document.getElementById('mainHeader');
window.addEventListener('scroll', function () {
    if (window.scrollY > 10) {
        header.classList.add('shadow', 'bg-white', 'dark:bg-black', 'transition', 'duration-100', '!py-4');
    } else {
        header.classList.remove('shadow', 'bg-white', 'dark:bg-black', 'transition', 'duration-100', '!py-4');
    }
});