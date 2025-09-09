document.querySelectorAll('.tab-btn').forEach((btn, idx) => {
    btn.addEventListener('click', function () {
        // Xóa active ở tất cả các nút
        document.querySelectorAll('.tab-btn').forEach(b =>
            b.classList.remove(
                'active',
                'before:absolute',
                'before:bottom-0',
                'before:left-0',
                'before:h-1',
                'before:w-full',
                'before:rounded-tl-[4px]',
                'before:rounded-tr-[4px]',
                'before:bg-primary',

            ));
        // Ẩn tất cả nội dung
        document.querySelectorAll('.tab-content').forEach(c => c.classList.add('hidden'));
        // Thêm active cho nút vừa click
        btn.classList.add(
            'active',
            'before:absolute',
            'before:bottom-0',
            'before:left-0',
            'before:h-1',
            'before:w-full',
            'before:rounded-tl-[4px]',
            'before:rounded-tr-[4px]',
            'before:bg-primary',
        );
        // Hiển thị nội dung tương ứng
        document.querySelectorAll('.tab-content')[idx].classList.remove('hidden');
    });
});