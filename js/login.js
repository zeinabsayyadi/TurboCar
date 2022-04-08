
'use strict';

//initial elements

let loginPart = document.querySelector('.loginPart');

//________create form-1________

let loginTitrP = document.createElement('div');
loginTitrP.className = "pb-5 loginTitrPart";

let loginTitr = document.createElement('p');
loginTitr.className = "loginTitr";
loginTitr.style = "color: var(--bs-primary-200)";
loginTitr.innerHTML = "لطفا برای ورود شماره تلفن خود را وارد کنید";

let titrHr = document.createElement('hr');
titrHr.className = "background-color: var(--bs-primary-200)";

let phoneNumForm = document.createElement('div');
phoneNumForm.className = "col-8 phoneNumForm";
phoneNumForm.style = "width: min-content;"

let phoneNumTag = document.createElement('p');
phoneNumTag.className = "my-2 fw-medium fw-medium phonenNumTag";
phoneNumTag.style = "font-size: 1.125rem; color : var(-bs-natural-300)";
phoneNumTag.innerHTML = "شماره تماس";

let phoneNumFormForm = document.createElement('form');
phoneNumFormForm.className = "d-flex flex-column align-items-center";
phoneNumFormForm.style = "direction: ltr";

let phoneInput = document.createElement('input');
phoneInput.className = "border-1 bg-transparent col-12 formsStyle";
phoneInput.style = "border-color: var(--bs-primary-200)";
phoneInput.type="tel";
phoneInput.placeholder="09123456789";


let phNResponseMsg = document.createElement('div');

let errorMsg = document.createElement('span');
errorMsg.style = "color : var(--bs-warning-100)";

let validMsg = document.createElement('span');
validMsg.style = "color : var(--bs-secondary-200)";

let phoneNumInptbtn = document.createElement('button');
phoneNumInptbtn.className = "phoneNumInptbtn border-0 my-4 align-items-center formsStyle";
phoneNumInptbtn.style="background-color: var(--bs-secondary-100); color : var(-bs-natural-300)";
phoneNumInptbtn.type="submit";
phoneNumInptbtn.innerHTML = "وارد شوید";

loginTitrP.appendChild(loginTitr);
loginTitrP.appendChild(titrHr);

phoneNumForm.appendChild(phoneNumTag);

phoneNumFormForm.appendChild(phoneInput);
phoneNumFormForm.appendChild(phNResponseMsg);
phoneNumFormForm.appendChild(phoneNumInptbtn);
phoneNumForm.appendChild(phoneNumFormForm);

loginPart.appendChild(loginTitrP);
loginPart.appendChild(phoneNumForm);

//_______create form-2_________

let codeInter = document.createElement('div');
codeInter.className = "col-8";

let codeInterTitle = document.createElement('p');
codeInterTitle.className = "text-end my-2 me-lg-5 pe-lg-5";
codeInterTitle.style = "font-size: 1.125rem; color : var(-bs-natural-300)";
codeInterTitle.innerHTML = `لطفا کد ارسالی به شماره تلفن 09123456789 را وارد کنید`

let codeInterEditeNumField = document.createElement('p');
codeInterEditeNumField.className = "text-end my-2 me-lg-5 pe-lg-5 fw-bold fs-5";
codeInterEditeNumField.style = "color: var(--bs-primary-200)";
codeInterEditeNumField.innerHTML = "ویرایش شماره تلفن";

let codeInterForm = document.createElement('form');
codeInterForm.className = "d-flex flex-column align-items-center";

let codeInterFormInput = document.createElement('input');
codeInterFormInput.className = "border-1 bg-transparent col-12  formsStyle";
codeInterFormInput.style = "border-color: var(--bs-primary-200); direction : ltr";
codeInterFormInput.type = "number";
codeInterFormInput.placeholder = "- - - - - -";

let codeInterFormCounter = document.createElement('p');
codeInterFormCounter.className = "";


let codeInterFormBtn = document.createElement('button');
codeInterFormBtn.className = "border-0 my-4 align-items-center formsStyle";
codeInterFormBtn.style = "background-color: var(--bs-secondary-100); color : var(-bs-natural-300)";
codeInterFormBtn.type = "submit";
codeInterFormBtn.innerHTML = "ثبت کد";

let resendCodeFormBtn = document.createElement('button');
resendCodeFormBtn.className = "border-0 my-4 align-items-center formsStyle";
resendCodeFormBtn.style = "background-color: var(--bs-secondary-100); color : var(-bs-natural-300)";
resendCodeFormBtn.type = "submit";
resendCodeFormBtn.innerHTML = "ارسال دوباره کد";

codeInter.appendChild(codeInterTitle);
codeInter.appendChild(codeInterEditeNumField);

codeInterForm.appendChild(codeInterFormInput);
codeInterForm.appendChild(codeInterFormCounter);
codeInterForm.appendChild(codeInterFormBtn);
codeInter.appendChild(codeInterForm);

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
            phNResponseMsg.innerHTML = "";
            validMsg.innerHTML = "✓";
            phNResponseMsg.appendChild(validMsg);
            //waite for 1 sec
            sleep(2000).then(() => { 
                //clear this form
                loginPart.removeChild(loginTitrP);
                loginPart.removeChild(phoneNumForm);
                //load form 2 : validation code form
                loginPart.appendChild(codeInter);
                //requestAnimationFrame(update);  // start the animation;
                console.log('befor');
                counter();
                console.log('after');
            });

        } 
     else {
        phoneInput.style = "border-color: var(--bs-warning-100)";
        errorMsg.innerHTML = "×";
        phNResponseMsg.appendChild(errorMsg);
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
