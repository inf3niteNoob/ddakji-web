var isDark = false

const toggleDarkMode = () => {
    isDark = !isDark;
    const darkModeButton = document.querySelector('.button[onclick="toggleDarkMode()"]');
    if(isDark){//add dark to body class
        document.body.classList.remove("light");
        document.body.classList.add("dark");
        darkModeButton.textContent = "🌞 Light Mode";
    } else {//remove dark from body class
        document.body.classList.remove("dark");
        document.body.classList.add("light");
        darkModeButton.textContent = "🌙 Dark Mode";
    }

}

const smoothScrollTo = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth', block: 'start' });
};