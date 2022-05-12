const progres = document.getElementById('progres');
const prevBtns = document.querySelectorAll('.preBtn');
const nextBtns = document.querySelectorAll('.nextBtn');
const circles = document.querySelectorAll('.circle');
const allTietls = document.querySelectorAll('.titel');

let currentActive= 1;
nextBtns.forEach((next) => {
    next.addEventListener('click',function(e){
        e.preventDefault()
        currentActive++;
        if(currentActive > circles.length){
            currentActive =circles.length;
        }
        update();
        console.log(currentActive)
    })
});

prevBtns.forEach((prev)=>{
    prev.addEventListener('click',function(e){
        e.preventDefault();
        currentActive--;
        if(currentActive <1){
            currentActive =1;
        }
        
        update();
    })
});


function update(){
    circles.forEach((circle, idx)=>{
        if(idx < currentActive){
            circle.classList.add('activeS');
        }else {
            circle.classList.remove('activeS')
        }
    });
    allTietls.forEach((titel, idx)=>{
        if(idx < currentActive){
            titel.classList.add('activTitel');
        }else {
            titel.classList.remove('activTitel')
        }
    })

    const activTitels = document.querySelectorAll('.activTitel');
    progres.style.width=((activTitels.length -1) / (allTietls.length-1))*100 + '%';

}