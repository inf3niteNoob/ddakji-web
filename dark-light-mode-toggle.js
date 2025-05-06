
var isDark = false

const toggleDarkMode = () => {
    isDark = !isDark;
    if(isDark){//add dark to body class
        document.body.classList.remove("light");
        document.body.classList.add("dark");
    } else {//remove dark from body class
        document.body.classList.remove("dark");
        document.body.classList.add("light");
    }

}