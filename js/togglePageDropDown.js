document.addEventListener('DOMContentLoaded', function () {
    var pageBtn = document.getElementById('pageDropDown');
    var dropdown = pageBtn.parentElement.querySelector('.dropdown');

    pageBtn.onclick = function (e) {
        e.stopPropagation();
        dropdown.classList.toggle('hidden');
    };
});