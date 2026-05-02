const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark")
{
    document.body.classList.add("dark-theme");
}

const button = document.getElementById("themeToggle");

if (button)
{
    button.addEventListener("click", function()
    {
        document.body.classList.toggle("dark-theme");

        if (document.body.classList.contains("dark-theme"))
        {
            localStorage.setItem("theme", "dark");
        }
        else
        {
            localStorage.setItem("theme", "light");
        }
    });
}