document.querySelectorAll('.faq-toggle-btn > button').forEach((btn) => {
    btn.addEventListener('click', function () {
        const content = btn.parentElement.querySelector('.faq-content');
        // Đóng tất cả các content khác (nếu muốn chỉ mở 1 cái)
        document.querySelectorAll('.faq-content').forEach((el) => {
            if (el !== content) el.classList.add('hidden');
        });
        // Toggle content hiện tại
        content.classList.toggle('hidden');
        // Đổi icon +/-
        const svg = btn.querySelector('svg');
        if (content.classList.contains('hidden')) {
            svg.innerHTML = `<path d="M7.83331 7.83337V0.833374H10.1666V7.83337H17.1666V10.1667H10.1666V17.1667H7.83331V10.1667H0.833313V7.83337H7.83331Z" fill="currentColor"></path>`;
        } else {
            svg.innerHTML = `<path d="M0.833313 7.83337H17.1666V10.1667H0.833313V7.83337Z" fill="currentColor"></path>`;
        }
    });
});