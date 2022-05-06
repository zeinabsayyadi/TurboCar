'use strict';

//_________initial  elements__________

let overlaySidebarBtn = document.querySelector('.overlaySidebarBtn');
let closeSidebarBtn = document.querySelector('.closeSidebarBtn');
let sidebar = document.querySelector('.sidebar');
let sideMenu = document.querySelector('.sideMenu');
let panelContent = document.querySelector('.panelContent');
let beforAnyAct = document.querySelector('.beforAnyAct');
let userInfoForm = document.querySelector('.userInfoForm');
let carExhabitionInfo = document.querySelector('.carExhabitionInfo');
let EditeUserInfoForm = document.querySelector('.EditeUserInfoForm');
let editUserInfo = document.querySelector('.editUserInfo');
let EditeExhabitInfoForm = document.querySelector('.EditeExhabitInfoForm');
let editExhabitionInfo = document.querySelector('.editExhabitionInfo');
let exhabitInfoEdit = document.querySelector('.exhabitInfoEdit');
let uploadDocumentsEdit = document.querySelector('.uploadDocumentsEdit');
let exhabitBioFromEdit = document.querySelector('.exhabitBioFromEdit');
let userAds    = document.querySelector('.userAds');
let manageAD   = document.querySelector('.manageAD');
let registerAD = document.querySelector('.registerAD');
let registerADTitle = document.querySelector('.registerADTitle');
let carAdForm1 = document.querySelector('.carAdForm1');
let carAdForm2 = document.querySelector('.carAdForm2');
let afterAdRegister = document.querySelector('.afterAdRegister');
let exhabitRegister = document.querySelector('.exhabitRegister');
let savedAds = document.querySelector('.savedAds');
let lastSeen = document.querySelector('.lastSeen');
let exhabitRegisterForms = document.querySelector('.exhabitRegisterForms');
let loginPHoneEnter      = document.querySelector('.loginPHoneEnter');
let ownerInfo   = document.querySelector('.ownerInfo');
let exhabitInfo = document.querySelector('.exhabitInfo');
let contract    = document.querySelector('.contract');


        //sidebar options
let EditInfoSideOption   = document.querySelector('.EditInfoSideOption');
let viewAdsSideOption    = document.querySelector('.viewAdsSideOption');
let ExhabitRegSideOption = document.querySelector('.ExhabitRegSideOption');
let SavedAdsSideOption   = document.querySelector('.SavedAdsSideOption');
let chatSideOption       = document.querySelector('.chatSideOption');
let lastSeenSideOption   = document.querySelector('.lastSeenSideOption');
let exiteSideOption      = document.querySelector('.exiteSideOption');



//______Forms fields_______
        //Edid User Info form
let editUserInfoInputs = document.querySelectorAll('.editUserInfo .form-group input');
let inputValidatorEUI = {
    'editUserInfoName'        : false,
    'editUserInfoPhoneNumber' : false,
    'editUserInfoNationalId'  : false,
    'editUserInfoEmail'       : false,
};

        //Edit exhabit Info form
    //form1
let editExhabitInfoInputs = document.querySelectorAll('.exhabitInfoEdit .form-group input');
let inputValidatorEEI = {
    'editExhabitName' : false,
    'editExhabitAddress' : false,
    'editExhabitPhone' : false,
    'editExhabitDocNum' : false,
};

    //form2
let uploadDocumentsEditInputs = document.querySelectorAll('.uploadDocumentsEdit .form-group div input');
let inputValidatorUEI = {
    'ownerNationalId' : false,
    'businessLicense' : false,
    'exhabitLogo' : false
};

        //form3
let exhabitBioFromEditInputs = document.querySelectorAll('.exhabitBioFromEdit .form-group textarea');
let inputValidatorEBI = {
    'bio' : false
};

        //add/edit car AD
    //form1
let carAdForm1INputs = document.querySelectorAll('.carAdForm1 .form-group input');
let inputValidatorCAM = {
    'kilometre' : false,
    'gearbox' : false,
    'carColor' : false,
    'carBody' : false,
    'insurance' : false,
};

    //form2
let carAdForm2INputs = document.querySelectorAll('.carAdForm2 .form-group input , .carAdForm2 .form-group textarea', '.carAdForm2 .form-group div input');
let inputValidatorCAE = {
    'AdTitle' : false,
    'address' : false,
    'phoneNum' : false,
    //'carPic' : false ,
    'carPrice' : false,
    
}

//_________buttons_________
        //infos
let userInfoEditeBtn = document.querySelector('.userInfoEditeBtn');
let carExhabitionEditInfoBtn = document.querySelector('.carExhabitionEditInfoBtn');
let editedUserInfoSaveBtn = document.querySelector('.editedUserInfoSaveBtn');
let emptyFiledErr = document.querySelector('.emptyFiledErr');
let editedUserInfoBackBtn = document.querySelector('.editedUserInfoBackBtn');
let editExhabitinfoSaveBtn = document.querySelector('.editExhabitinfoSaveBtn');
let editExhabitInfoBackBtn = document.querySelector('.editExhabitInfoBackBtn');
let uploadDocSaveBtn = document.querySelector('.uploadDocSaveBtn');
let uploadDocBackBtn = document.querySelector('.uploadDocBackBtn');
let exhabitBioSaveBtn = document.querySelector('.exhabitBioSaveBtn');
let exhabitBioBackBtn = document.querySelector('.exhabitBioBackBtn');

        //Ads
let registerADBtn = document.querySelector('.registerADBtn');
let userAdsBtn = document.querySelector('.userAdsBtn');
let carAdForm1RegBtn = document.querySelector('.carAdForm1RegBtn');
let carAdForm1BackBtn =document.querySelector('.carAdForm1BackBtn');
let carAdForm2RegBtn = document.querySelector('.carAdForm2RegBtn');
let carAdForm2BackBtn = document.querySelector('.carAdForm2BackBtn');
let manageAdBtn = document.querySelector('.manageAdBtn');

        //car exhabition register
let registerExhabit = document.querySelector('.registerExhabit');
let exRegPhone = document.querySelector('.exRegPhone');
let enterWonerInfoSaveBtn = document.querySelector('.enterWonerInfoSaveBtn');
let enterWonerInfoBackBtn = document.querySelector('.enterWonerInfoBackBtn');
let exhabitinfoSaveBtn = document.querySelector('.exhabitinfoSaveBtn');
let exhabitInfoBackBtn = document.querySelector('.exhabitInfoBackBtn');

//_____functions of collapsed sidebar or any overlay collapsed element_____

function opennav(navName){
    navName.style.display = "block";
}

function closeNav(navNam) { 
    navNam.style.display = "none";

 }

 //_____ *** sidebar actions *** ______

 //on click overlaySidebar button
 overlaySidebarBtn.addEventListener('click',(e)=>{
     e.preventDefault();
     opennav(sidebar);
     overlaySidebarBtn.style.display = "none";
     closeSidebarBtn.style.display = "block";

 });

closeSidebarBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    if(window.innerWidth <= 576){
       closeNav(sidebar);
       overlaySidebarBtn.style.display = "block";
       closeSidebarBtn.style.display = "none";
  
    }
}) ;

 panelContent.addEventListener('click',(e)=>{
     e.preventDefault();
     if(window.innerWidth <= 576){
        closeNav(sidebar);
        overlaySidebarBtn.style.display = "block";
        closeSidebarBtn.style.display = "none";
   
     }
 })

//______*** Panel Content actions  ***_________
 
//______changing pages over sidebar options click______

//infos
EditInfoSideOption.addEventListener('click', (e)=>{
    e.preventDefault();
    let sideMenuChild = sideMenu.children;
    for (let i = 0; i < sideMenuChild.length; i++) {
        sideMenuChild[i].classList.remove('active');
    }

    EditInfoSideOption.classList.add("active");
    let panelChildrens = panelContent.children;
    for (let i = 0; i < panelChildrens.length; i++) {
       panelChildrens[i].classList.replace('panelContentLoad','panelContentClr');
    };
    userInfoForm.classList.replace('panelContentClr','panelContentLoad');
    carExhabitionInfo.classList.replace('panelContentClr','panelContentLoad');
    //this items should be render by backend
    ;

});

//ads
viewAdsSideOption.addEventListener('click', (e)=>{
    e.preventDefault();
    let sideMenuChild = sideMenu.children;
    for (let i = 0; i < sideMenuChild.length; i++) {
        sideMenuChild[i].classList.remove('active');
    }

    viewAdsSideOption.classList.add("active");
    let panelChildrens = panelContent.children;
    for (let i = 0; i < panelChildrens.length; i++) {
       panelChildrens[i].classList.replace('panelContentLoad','panelContentClr');
    }
    userAds.classList.replace('panelContentClr','panelContentLoad');
    //this items should be render by backend
    ;

});

//exhabit Register
ExhabitRegSideOption.addEventListener('click',(e)=>{
    e.preventDefault();
    let sideMenuChild = sideMenu.children;
    for (let i = 0; i < sideMenuChild.length; i++) {
        sideMenuChild[i].classList.remove('active');
    }

    ExhabitRegSideOption.classList.add("active");
    let panelChildrens = panelContent.children;
    for (let i = 0; i < panelChildrens.length; i++) {
       panelChildrens[i].classList.replace('panelContentLoad','panelContentClr');
    }
    exhabitRegister.classList.replace('panelContentClr','panelContentLoad');
    ;
});

//view Saved Ads
SavedAdsSideOption.addEventListener('click',(e)=>{
    e.preventDefault();
    let sideMenuChild = sideMenu.children;
    for (let i = 0; i < sideMenuChild.length; i++) {
        sideMenuChild[i].classList.remove('active');
    }

    SavedAdsSideOption.classList.add("active");
    let panelChildrens = panelContent.children;
    for (let i = 0; i < panelChildrens.length; i++) {
       panelChildrens[i].classList.replace('panelContentLoad','panelContentClr');
    }
    savedAds.classList.replace('panelContentClr','panelContentLoad');
    ;
});

//chat
chatSideOption.addEventListener('click',(e)=>{
    e.preventDefault();
    let sideMenuChild = sideMenu.children;
    for (let i = 0; i < sideMenuChild.length; i++) {
        sideMenuChild[i].classList.remove('active');
    }

    chatSideOption.classList.add("active");
    let panelChildrens = panelContent.children;
    for (let i = 0; i < panelChildrens.length; i++) {
       panelChildrens[i].classList.replace('panelContentLoad','panelContentClr');
    }
    beforAnyAct.classList.replace('panelContentClr','panelContentLoad');
    ;
});

//last seens
lastSeenSideOption.addEventListener('click',(e)=>{
    e.preventDefault();
    let sideMenuChild = sideMenu.children;
    for (let i = 0; i < sideMenuChild.length; i++) {
        sideMenuChild[i].classList.remove('active');
    }

    lastSeenSideOption.classList.add("active");
    let panelChildrens = panelContent.children;
    for (let i = 0; i < panelChildrens.length; i++) {
       panelChildrens[i].classList.replace('panelContentLoad','panelContentClr');
    }
    lastSeen.classList.replace('panelContentClr','panelContentLoad');
    ;
});

//exit
//canr exite using window.close due to security rules
exiteSideOption.addEventListener('click',()=>{
    let sideMenuChild = sideMenu.children;
    for (let i = 0; i < sideMenuChild.length; i++) {
        sideMenuChild[i].classList.remove('active');
    }
    exiteSideOption.classList.add("active");
    let panelChildrens = panelContent.children;
    for (let i = 0; i < panelChildrens.length; i++) {
       panelChildrens[i].classList.replace('panelContentLoad','panelContentClr');
    }
    setTimeout(()=>{
        location.href = "./index.html"
    },1500);
});


//_________edit userinfo actions_______
userInfoEditeBtn.addEventListener('click',(e)=>{
    e.preventDefault()
    userInfoForm.classList.replace('panelContentLoad','panelContentClr');
    carExhabitionInfo.classList.replace('panelContentLoad','panelContentClr');
    EditeUserInfoForm.classList.replace('panelContentClr','panelContentLoad');
    panelContent.scrollTop = 0;
});

editUserInfoInputs.forEach((input) => {
    input.addEventListener('input',(e)=>{
        let name = e.target.getAttribute('name');
        console.log(name, e.target.value.length);
        if (e.target.value.length > 0){
            console.log(name , 'true');
            inputValidatorEUI[name] = true;
        }
        else{
            console.log(name , 'false');
            inputValidatorEUI[name] = false;
        };

        let allTrue = Object.keys(inputValidatorEUI).every((item)=>{
            console.log('item: ',item);
            return inputValidatorEUI[item] === true
        });

        if (allTrue){
            editedUserInfoSaveBtn.disabled = false;
        }
        else{
            editedUserInfoSaveBtn.disabled = true;
        }
    })
});

editedUserInfoSaveBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    EditeUserInfoForm.classList.replace('panelContentLoad','panelContentClr');
    userInfoForm.classList.replace('panelContentClr','panelContentLoad');
    carExhabitionInfo.classList.replace('panelContentClr','panelContentLoad');
    panelContent.scrollTop = 0; 
    editUserInfoInputs.forEach(input => {
        input.value = '';
    });
});

editedUserInfoBackBtn.addEventListener('click', (e)=>{
    e.preventDefault();
    EditeUserInfoForm.classList.replace('panelContentLoad','panelContentClr');
    userInfoForm.classList.replace('panelContentClr','panelContentLoad');
    carExhabitionInfo.classList.replace('panelContentClr','panelContentLoad');
    panelContent.scrollTop = 0;
});

//__________edit exhabition info_________

carExhabitionEditInfoBtn.addEventListener('click',(e)=>{
    e.preventDefault()
    userInfoForm.classList.replace('panelContentLoad','panelContentClr');
    carExhabitionInfo.classList.replace('panelContentLoad','panelContentClr');
    EditeExhabitInfoForm.classList.replace('panelContentClr','panelContentLoad');
    panelContent.scrollTop = 0;
});
 //form1
editExhabitInfoInputs.forEach((input) => {
    input.addEventListener('input',(e)=>{
        let name = e.target.getAttribute('name');
        console.log(name, e.target.value.length);
        if (e.target.value.length > 0){
            console.log(name , 'true');
            inputValidatorEEI[name] = true;
        }
        else{
            console.log(name , 'false');
            inputValidatorEEI[name] = false;
        };

        let allTrue = Object.keys(inputValidatorEEI).every((item)=>{
            console.log('item: ',item);
            return inputValidatorEEI[item] === true
        });

        if (allTrue){
            editExhabitinfoSaveBtn.disabled = false;
        }
        else{
            editExhabitinfoSaveBtn.disabled = true;
        }
    })
});

editExhabitinfoSaveBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    exhabitInfoEdit.classList.replace('formContentLoad','formContentClr');
    uploadDocumentsEdit.classList.replace('formContentClr', 'formContentLoad');
    panelContent.scrollTop = 0;
});

editExhabitInfoBackBtn.addEventListener('click', (e)=>{
    e.preventDefault();
    exhabitInfoEdit.classList.replace('formContentLoad','formContentClr');
    uploadDocumentsEdit.classList.replace('formContentClr', 'formContentLoad');
    userInfoForm.classList.replace('panelContentClr','panelContentLoad');
    carExhabitionInfo.classList.replace('panelContentClr','panelContentLoad');
    EditeExhabitInfoForm.classList.replace('panelContentLoad','panelContentClr');
    panelContent.scrollTop = 0;
});

    //form2
uploadDocumentsEditInputs.forEach((input) => {
    input.addEventListener('input',(e)=>{
        let name = e.target.getAttribute('name');
        console.log(e.target)
        console.log(name, e.target.value.length);
        if (e.target.value.length > 0){
            console.log(name , 'true');
            inputValidatorUEI[name] = true;
        }
        else{
            console.log(name , 'false');
            inputValidatorUEI[name] = false;
        };

        let allTrue = Object.keys(inputValidatorUEI).every((item)=>{
            console.log('item: ',item);
            return inputValidatorUEI[item] === true
        });

        if (allTrue){
            uploadDocSaveBtn.disabled = false;
        }
        else{
            uploadDocSaveBtn.disabled = true;
        }
    })
});

uploadDocSaveBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    uploadDocumentsEdit.classList.replace('formContentLoad','formContentClr');
    exhabitBioFromEdit.classList.replace('formContentClr', 'formContentLoad');
    panelContent.scrollTop = 0;

});

uploadDocBackBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    uploadDocumentsEdit.classList.replace('formContentLoad','formContentClr');
    exhabitInfoEdit.classList.replace('formContentClr', 'formContentLoad');
    panelContent.scrollTop = 0;
});

    //form3
exhabitBioFromEditInputs.forEach((input) => {
    input.addEventListener('change',(e)=>{
        let name = e.target.getAttribute('name');
        console.log(name, e.target.value.length);
        if (e.target.value.length > 0){
            console.log(name , 'true');
            inputValidatorEBI[name] = true;
        }
        else{
            console.log(name , 'false');
            inputValidatorEBI[name] = false;
        };
    
        let allTrue = Object.keys(inputValidatorEBI).every((item)=>{
            console.log('item: ',item);
            return inputValidatorEBI[item] === true
        });
    
        if (allTrue){
            exhabitBioSaveBtn.disabled = false;
        }
        else{
            exhabitBioSaveBtn.disabled = true;
        }
    })
});

exhabitBioSaveBtn.addEventListener('click', (e)=>{
    e.preventDefault();
    exhabitBioFromEdit.classList.replace('formContentLoad','formContentClr');
    exhabitInfoEdit.classList.replace('formContentClr', 'formContentLoad');
    EditeExhabitInfoForm.classList.replace('panelContentLoad','panelContentClr');
    userInfoForm.classList.replace('panelContentClr','panelContentLoad');
    carExhabitionInfo.classList.replace('panelContentClr','panelContentLoad');
    editExhabitInfoInputs.forEach(input => {
        input.value = '';
    });
    uploadDocumentsEditInputs.forEach(input => {
        input.value = '';
    });
    exhabitBioFromEditInputs.forEach(input => {
        input.value = '';
    });
    panelContent.scrollTop = 0;
});

exhabitBioBackBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    exhabitBioFromEdit.classList.replace('formContentLoad','formContentClr');
    uploadDocumentsEdit.classList.replace('formContentClr', 'formContentLoad');
    panelContent.scrollTop = 0;

});

//__________Ads actions____________
userAdsBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    userAds.classList.replace('panelContentLoad','panelContentClr');
    manageAD.classList.replace('panelContentClr','panelContentLoad');
    panelContent.scrollTop = 0;
});

registerADBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    userAds.classList.replace('panelContentLoad','panelContentClr');
    registerAD.classList.replace('panelContentClr','panelContentLoad');
    panelContent.scrollTop = 0;

});

    //form1
carAdForm1INputs.forEach((input) => {
    input.addEventListener('change',(e)=>{
        let name = e.target.getAttribute('name');
        console.log(name, e.target.value.length);
        if (e.target.value.length > 0){
            console.log(name , 'true');
            inputValidatorCAM[name] = true;
        }
        else{
            console.log(name , 'false');
            inputValidatorCAM[name] = false;
        };
    
        let allTrue = Object.keys(inputValidatorCAM).every((item)=>{
            console.log('item: ',item);
            return inputValidatorCAM[item] === true
        });
    
        if (allTrue){
            carAdForm1RegBtn.disabled = false;
        }
        else{
            carAdForm1RegBtn.disabled = true;
        }
    })
});

carAdForm1RegBtn.addEventListener('click', (e)=>{
    e.preventDefault();
    carAdForm1.classList.replace('formContentLoad','formContentClr');
    carAdForm2.classList.replace('formContentClr','formContentLoad');
    panelContent.scrollTop = 0;
});

carAdForm1BackBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    registerAD.classList.replace('panelContentLoad','panelContentClr');
    userAds.classList.replace('panelContentClr','panelContentLoad');
    panelContent.scrollTop = 0;

});


    //form2
carAdForm2INputs.forEach((input) => {
    input.addEventListener('change',(e)=>{
        let name = e.target.getAttribute('name');
        console.log(name, e.target.value.length);
        if (e.target.value.length > 0){
            console.log(name , 'true');
            inputValidatorCAE[name] = true;
        }
        else{
            console.log(name , 'false');
            inputValidatorCAE[name] = false;
        };
        
        let allTrue = Object.keys(inputValidatorCAE).every((item)=>{
            console.log('item: ',item);
            return inputValidatorCAE[item] === true
        });
        
        if (allTrue){
            carAdForm2RegBtn.disabled = false;
        }
        else{
            carAdForm2RegBtn.disabled = true;
        }
    })
});


carAdForm2RegBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    carAdForm2.classList.replace('formContentLoad','formContentClr');
    afterAdRegister.classList.replace('formContentClr','formContentLoad');
    panelContent.scrollTop = 0;
    setTimeout(()=>{
        afterAdRegister.classList.replace('formContentLoad','formContentClr');
        carAdForm1.classList.replace('formContentClr','formContentLoad');
        registerAD.classList.replace('panelContentLoad','panelContentClr');
        manageAD.classList.replace('panelContentClr','panelContentLoad');
    },3000);
    carAdForm1INputs.forEach(input => {
        input.value = '';
    });
    carAdForm2INputs.forEach(input => {
        input.value = '';
    });
});

carAdForm2BackBtn.addEventListener('click' ,(e)=>{
    e.preventDefault();
    carAdForm2.classList.replace('formContentLoad','formContentClr');
    carAdForm1.classList.replace('formContentClr','formContentLoad');
    panelContent.scrollTop = 0;
});

manageAdBtn.addEventListener('click', (e)=>{
    e.preventDefault();
    manageAD.classList.replace('panelContentLoad','panelContentClr');
    registerAD.classList.replace('panelContentClr','panelContentLoad');
    registerADTitle.innerHTML = 'ویرایش آگهی خودرو';
    panelContent.scrollTop = 0;
});

//___________exhabit Registeration____________
registerExhabit.addEventListener('click', (e)=>{
    e.preventDefault();
    exhabitRegister.classList.replace('panelContentLoad' , 'panelContentClr');
    exhabitRegisterForms.classList.replace('panelContentClr','panelContentLoad');
    panelContent.scrollTop = 0;
});

exRegPhone.addEventListener('click', (e)=>{
    e.preventDefault();
    loginPHoneEnter.classList.replace('formContentLoad','formContentClr');
    ownerInfo.classList.replace('formContentClr','formContentLoad'); 
    console.log(ownerInfo.classList);
    panelContent.scrollTop = 0;
});

enterWonerInfoSaveBtn.addEventListener('click', (e)=>{
    e.preventDefault();
    ownerInfo.classList.replace('formContentLoad','formContentClr');
    exhabitInfo.classList.replace('formContentClr','formContentLoad');
    panelContent.scrollTop = 0;
});

enterWonerInfoBackBtn.addEventListener('click', (e)=>{
    e.preventDefault();
    ownerInfo.classList.replace('formContentLoad','formContentClr');
    loginPHoneEnter.classList.replace('formContentClr','formContentLoad'); 
    panelContent.scrollTop = 0;
});

exhabitinfoSaveBtn.addEventListener('click', (e)=>{
    e.preventDefault();
    exhabitInfo.classList.replace('formContentLoad','formContentClr');
    contract.classList.replace('formContentClr','formContentLoad');
    console.log(contract.value);
    panelContent.scrollTop = 0;
});