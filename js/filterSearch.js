// .......................................................................................

const searchBox = document.querySelectorAll('.select');
let optionTags = document.querySelectorAll(".option");
let title = document.querySelectorAll(".title");
let scrolls = document.querySelectorAll('.optionsScroll');
let placeholder = document.querySelector('.placeholder');




searchBox.forEach(box => {

  box.addEventListener('click', (e) => {
    let childLen = box.children[1].children.length;

    for (let i = 0; i < childLen; i++) {
      box.children[1].children[i].classList.toggle("show");
    }
    box.children[1].classList.toggle("scroll-options");
    box.children[0].children[1].classList.toggle("border-none");
    box.children[0].children[1].innerHTML = e.target.innerHTML;
        

  });

})