function menu() {

    let open = document.querySelector(".menu_open");
    let menu = document.getElementById("container_menu");
    open.addEventListener("click", () => {
        menu.style.display = "flex";
        menu.style.right = "0px";
        menu.style.animation = "move ease-in 400ms";
    });



    let close = document.querySelector(".close");

    close.addEventListener("click", () => {
        menu.style.display = "flex";
        menu.style.right = "-100%";
        menu.style.animation = "move ease-out 400ms";
    });



    let area_menu = document.querySelectorAll(".area_menu nav ul li a");

    area_menu.forEach( (element) => {
        element.addEventListener("click", () => {
            menu.style.right = "-100%";
            menu.style.animation = "move ease-out 400ms";
        });
    });

  

}
menu();