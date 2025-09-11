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
                'solid-9': '0px 12px 30px rgba(45,74,170,.06)',
                'solid-3': '0px 6px 90px rgba(8, 14, 40, .04)',
                'solid-4': '0px 6px 90px rgba(8, 14, 40, .1)',
                'solid-5': '0px 8px 24px rgba(45, 74, 170, .08)',
                'solid-6': '0px 8px 24px rgba(10, 16, 35, .08)',
                'solid-10': '0px 8px 30px rgba(45, 74, 170, .06)',
                'solid-11': '0px 6px 20px rgba(45, 74, 170, .05)',
            },
            fontSize: {
                'hero': ['44px', { lineHeight: '58px' }],
                'sectiontitle3': ["44px", { lineHeight: "55px" }],
                'sectiontitle2': ["40px", { lineHeight: "52px" }],
                'sectiontitle': ["14px", { lineHeight: "22px" }],
                'sectiontitle4': ["34px", { lineHeight: "48px" }],
                'para2': ["22px", { lineHeight: "35px" }],
                'metatitle3': ["18px", {lineHeight: "26px"}],
                'itemtitle': ["26px", {lineHeight: "32px"}],
                'regular': ["16px", {lineHeight: "26px"}],
                'itemtitle2': ["24px", {lineHeight: "32px"}],
            },
        },
    },
    plugins: [],
}