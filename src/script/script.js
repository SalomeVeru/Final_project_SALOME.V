var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

// განვსაზღვროთ შემდეგი ფუნქცია 
function opentab(tabname) {
    for (tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

// გვერდითი მენიუს დახურვა და გაღება 

var sidemenu = document.getElementById('sidemenu');

function openmenu() {
    sidemenu.style.right = "0";
}
function closemenu() {
    sidemenu.style.right = "-200px";
}

// გუგლ შითში ფორმის გაკეთება და საიტიდან მესიჯების მიღება 

const scriptURL = 'https://script.google.com/macros/s/AKfycbyyPIoJrjHmRnjE_oss3JmN1z-Ug8An50u0m5qJDfo/dev'
const form = document.forms['submit-to-google-sheet']
const msg=document.getElementById('msg')

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            msg.innerHTML= "Message sent successfully"
            setTimeout(function(){
                msg.innerHTML=''
            }, 5000)
            form.reset()
        })
        .catch(error => console.error('Error!', error.message))
})



