
document.addEventListener("DOMContentLoaded", function () {
    const cursorOuter = document.createElement("div");
    const cursorInner = document.createElement("div");

    cursorOuter.className = "custom-cursor custom-cursor-outer";
    cursorInner.className = "custom-cursor custom-cursor-inner";

    document.body.appendChild(cursorOuter);
    document.body.appendChild(cursorInner);

    document.addEventListener("mousemove", (e) => {
        cursorOuter.style.left = e.pageX + "px";
        cursorOuter.style.top = e.pageY + "px";
        cursorInner.style.left = e.pageX + "px";
        cursorInner.style.top = e.pageY + "px";
    });
    const sections = document.querySelectorAll("section");

    sections.forEach((section) => {
        section.addEventListener("mouseenter", () => {
            cursorInner.style.width = "20px";
            cursorInner.style.height = "20px";
            cursorOuter.style.width = "40px";
            cursorOuter.style.height = "40px";
        });
        section.addEventListener("mouseleave", () => {
            cursorInner.style.width = "10px"; 
            cursorInner.style.height = "10px";
            cursorOuter.style.width = "30px"; 
            cursorOuter.style.height = "30px";
        });
    });
});
