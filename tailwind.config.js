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
                'solid-7': '0px 30px 50px rgba(45, 74, 170, .1)',
                'solid-8': '0px 12px 120px rgba(45,74,170,.06)',
            },
            fontSize: {
                'hero': ['44px', { lineHeight: '58px' }],
                'sectiontitle3': ["44px", { lineHeight: "55px" }],
                'sectiontitle': ["14px", { lineHeight: "22px" }],
                'sectiontitle4': ["34px", { lineHeight: "48px" }],
                'para2': ["22px", { lineHeight: "35px" }],
                'metatitle3': ["18px", {lineHeight: "26px"}]
            },
        },
    },
    plugins: [],
}