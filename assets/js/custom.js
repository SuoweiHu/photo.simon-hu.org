// Add "front-page" class to html tag if on root page
if (window.location.pathname === "/" || window.location.pathname === "") {
    document.documentElement.classList.add("front-page");
}