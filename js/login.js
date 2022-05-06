
'use strict';

//initial elements

let loginPart = document.querySelector('.loginPart');

let form1 = document.querySelector('.form1');
let phoneInput = document.querySelector('.phoneInput');
let phoneNumInptbtn = document.querySelector('.phoneNumInptbtn');
let phNResponseMsg = document.querySelector('.phNResponseMsg');
let form2 = document.querySelector('.form2');
let codeInterForm = document.querySelector('.codeInterForm');
let codeInterEditeNumField = document.querySelector('.codeInterEditeNumField');
let codeInterFormCounter = document.querySelector('.codeInterFormCounter');
let codeInterFormBtn = document.querySelector('.codeInterFormBtn') ;
let codeInterFormInput = document.querySelector('.codeInterFormInput');

let resendCodeFormBtn = document.createElement('button');
resendCodeFormBtn.className = "border-0 my-4 align-items-center formsStyle";
resendCodeFormBtn.style = "background-color: var(--bs-secondary-100); color : var(-bs-natural-300)";
resendCodeFormBtn.type = "submit";
resendCodeFormBtn.innerHTML = "ارسال دوباره کد";
//________functions________

//sleep function is for make a delay between executing code lines. it must be in a scope 
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

//this counter is for counting seconds for code entering form
var GlobalToggelFlag = false;
var reqAnimFramId = null;
var timeTillStop = 0;
// main counter function
function counter(){
    timeTillStop = 31;
    let stop = false
    function repetedCount(){
        sleep(1000).then(()=>{
            timeTillStop = timeTillStop - 1;
            if(  timeTillStop>= 0  && stop == false){
                codeInterFormCounter.innerHTML = timeTillStop;
                requestAnimationFrame(repetedCount);
            }
            else{
                stop = true;
                codeInterForm.removeChild(codeInterFormBtn);
                codeInterForm.appendChild(resendCodeFormBtn);
                GlobalToggelFlag = false;
            }
        });
        
    }
    requestAnimationFrame(repetedCount);
   
}

//_________first form actions__________

// on click: validate

phoneNumInptbtn.addEventListener('click', (e)=>{
    e.preventDefault();
    if (phoneInput.value.trim()) {
        if (phoneInput.value.length == 11){
            phoneInput.style = "border-color: var(--bs-secondary-200);"
            phNResponseMsg.innerHTML = "✓";
            //waite for 1 sec
            sleep(2000).then(() => { 
                //clear this form
                form1.style.display = "none";
                //load form 2 : validation code form
                form2.style.display = "flex";
                //requestAnimationFrame(update);  // start the animation;
                counter();
            });

        } 
     else {
        phoneInput.style = "border-color: var(--bs-warning-100)";
        phNResponseMsg.innerHTML = "×";
        }
    }  

});


//________second form actions_________

codeInterFormBtn.addEventListener('click', (e)=>{
    e.preventDefault();
    if (codeInterFormInput.value.length == 6){
        codeInterFormInput.style = "border-color: var(--bs-secondary-200); direction : ltr";
        sleep(2000).then(() => {
            location.href = "../userPanel.html";
         });
    }
    else{
        codeInterFormInput.style ="border-color: var(--bs-warning-100); direction : ltr"
    }
});

resendCodeFormBtn.addEventListener('click', (e)=>{
    codeInterForm.removeChild(resendCodeFormBtn);
    codeInterForm.appendChild(codeInterFormBtn);
    counter();
});

codeInterEditeNumField.addEventListener('click', (e)=>{
    location.reload();
});
