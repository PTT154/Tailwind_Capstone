const button = document.getElementById('toggleBtn');
const target = document.getElementById('target');

button.onclick = function () {
    // Toggle từng class một
    const classes = [
        'navbar',
        '!visible',
        'mt-4',
        'h-auto',
        'max-h-[400px]',
        'rounded-md',
        'bg-white',
        'p-7.5',
        'shadow-solid-5',
        'dark:bg-blacksection',
        'xl:h-auto',
        'xl:p-0',
        'xl:shadow-none',
        'xl:dark:bg-transparent'
    ];
    classes.forEach(cls => target.classList.toggle(cls));
}