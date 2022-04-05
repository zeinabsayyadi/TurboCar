import * as intlTelInput from "../node_modules/intl-tel-input/build/js/intlTelInput.js"

//first form
let loginPart = document.querySelector('.loginPart');
let loginTitrP = document.querySelector('.loginTitrPart');
let phonenumForm = document.querySelector('.phonenumForm');
let phoneInput = document.querySelector('.phone');

let phNResponseMsg = document.querySelector('.phNResponseMsg');
phNResponseMsg.style = "transition = all 5s";
let errorMsg = document.createElement('span');

let validMsg = document.createElement('span');

let phoneNumInptbtn = document.querySelector('.phoneNumInptbtn');

//create form-2

let codeInter = document.createElement('div');
codeInter.className = "col-8";

let codeInterTitle = document.createElement('p');
codeInterTitle.className = "text-end my-2 me-lg-5 pe-lg-5";
codeInterTitle.style = "ont-size: 1.125rem;";
codeInterTitle.innerHTML = `لطفا کد ارسالی به شماره تلفن 09123456789 را وارد کنید`

let codeInterEditeNumField = document.createElement('p');
codeInterEditeNumField.className = "text-end my-2 me-lg-5 pe-lg-5 fw-bold fs-5";
codeInterEditeNumField.style = "color: var(--bs-primary-200)";
codeInterEditeNumField.innerHTML = "ویرایش شماره تلفن";

let codeInterForm = document.createElement('form');
codeInterForm.className = "d-flex flex-column align-items-center";

let codeInterFormInput = document.createElement('input');
codeInterFormInput.className = "border-1 bg-transparent col-12  formsStyle";
codeInterFormInput.style = "border-color: var(--bs-primary-200)";
codeInterFormInput.type = "number";
codeInterFormInput.placeholder = "- - - - - -";

let codeInterFormCounter = document.createElement('p');
codeInterFormCounter.className = "";
//set time counter

let codeInterFormBtn = document.createElement('button');
codeInterFormBtn.className = "border-0 my-4 align-items-center formsStyle";
codeInterFormBtn.style = "background-color: var(--bs-secondary-100)";
codeInterFormBtn.type = "submit";
codeInterFormBtn.innerHTML = "ثبت کد";

let resendCodeFormBtn = document.createElement('button');
resendCodeFormBtn.className = "border-0 my-4 align-items-center formsStyle";
resendCodeFormBtn.style = "background-color: var(--bs-secondary-100)";
resendCodeFormBtn.type = "submit";
resendCodeFormBtn.innerHTML = "ارسال دوباره کد";

codeInter.appendChild(codeInterTitle);
codeInter.appendChild(codeInterEditeNumField);

codeInterForm.appendChild(codeInterFormInput);
codeInterForm.appendChild(codeInterFormCounter);
codeInterForm.appendChild(codeInterFormBtn);
codeInter.appendChild(codeInterForm);

var sec = 30;
function counter(){
    if (sec> 0){
        sec = sec-1 ;
        console.log(sec);
        codeInterFormCounter.innerHTML = sec;
    }
    else if(sec == 0 ){
       codeInterForm.removeChild(codeInterFormBtn);
       codeInterForm.appendChild(resendCodeFormBtn);
       sec = -1;
    }
}
codeInterFormCounter.innerHTML = sec;

//first form actions: 

// initialise plugin
//var iti = intlTelInput(phoneInput, {
//utilsScript: "node_modules/intl-tel-input/build/js/utils.js?1638200991544"
//});

// on click: validate

phoneNumInptbtn.addEventListener('click', (e)=>{
    e.preventDefault();
    if (phoneInput.value.trim()) {
        //if (iti.isValidNumber()) {
        if (phoneInput.value){
            validMsg.innerHTML = "✓";
            phNResponseMsg.appendChild(validMsg);
            //waite for 1 sec

            //send a 6-digit number as code to the input number
            //clear this form
            loginPart.removeChild(loginTitrP);
            loginPart.removeChild(phonenumForm);
            //load form 2 : validation code form
            loginPart.appendChild(codeInter);
            setInterval(counter, 1000, 30);

        } 
     else {
         /*
            input.classList.add("error");
            let errorCode = iti.getValidationError();
            errorMsg.innerHTML = errorMap[errorCode];
            phNResponseMsg.appendChild(errorMsg);
            */
        }
    }  

});

codeInterFormBtn.addEventListener('click', (e)=>{
    e.preventDefault();
    location.href = "../userPanel.html";
    //open user panel
});

resendCodeFormBtn.addEventListener('click', (e)=>{
    //resend a new code

});

/*
function counter(){
    sec = sec-1 ;
    console.log(sec);
    codeInterFormCounter.value = sec;
}
setInterval(counter, 1000); */