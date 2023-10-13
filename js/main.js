let menu=document.querySelector('.menu-icon');
let navbar=document.querySelector(".navbar");

menu.onclick =() => {
    navbar.classList.toggle("open-menu");
    menu.classList.toggle("move");
};
window.onscroll=()=>{
    navbar.classList.toggle("open-menu");
    menu.classList.toggle("move");
};
window.onscroll=()=>{
    navbar.classList.toggle("open-menu");
    menu.classList.toggle("move");

}
// emailj

function validate(){
    let name=document.querySelector(".name");
    let email=document.querySelector(".email");
    let msg=document.querySelector(".message");
    let sendBtn=document.querySelector(".send-btn");

    sendBtn.addEventListener('click',(e) => {
        e.preventDefault();
        if(name.value==""||email.value==""||msg==""){
            emptyerror();
        }else{
            sendmail(name.value,email.value,msg.value);
            success();
        }

    })
}
validate();


function sendmail(name,email,msg){
    emailjs.send("service_xeymp2y","template_srkbhry",{
        to_name: name,
        from_name: email,
        message: msg,
        });
}

function emptyerror() {
    swal({
        title:"Oh no...field cannot be empty!!",
        icon:"error",
    });
    
}

function success() {
    swal({
        title:"email sent successfully",
        text:"we try to reply in 24hours",
        icon:"success",
    });
    
}
// header background change

let header= document.querySelector('header')

window.addEventListener("scroll" ,()=>{
    header.classList.toggle('header-active', window.scrollY>0);
});
let scrollTop= document.querySelector(".scrollTop");

window.addEventListener("scroll" ,()=>{
    scrollTop.classList.toggle("scroll-active", window.scrollY>0);
});