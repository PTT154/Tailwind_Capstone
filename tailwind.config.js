module.exports = {
    darkMode: 'class',
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {
            colors: {
                stroke: 'rgb(238 238 238)',
                strokedark: 'rgb(45 47 64)',
            },
            boxShadow: {
                'solid-l': '0px 10px 120px 0px rgba(45, 74, 170, 0.1)',
            },
            fontSize: {
                'hero': ['44px', { lineHeight: '58px' }],
                'sectiontitle3': ["44px", { lineHeight: "55px" }],
                'para2': ["22px", {lineHeight: "35px"}],
            },
        },
    },
    plugins: [],
}