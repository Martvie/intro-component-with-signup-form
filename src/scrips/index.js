const firstName = document.getElementById('first-name').children
const lastName = document.getElementById('last-name').children
const email = document.getElementById('email').children
const password = document.getElementById('password').children


function validateInput(item){


    if(item[0].value.length === 0){
        item[0].classList.add('incorrect');
        item[0].placeholder="";
        item[0].value="";
        item[1].classList.remove('none');
    } else {
        item[0].classList.remove('incorrect');
        item[0].placeholder="";
        item[1].classList.add('none');
    }
}

function validateEmail(item){

    if(item[0].value.length === 0 || !item[0].value.includes('@')){
        item[0].classList.add('incorrect');
        item[0].placeholder="email@example/com";
        item[0].value="";
        item[1].classList.remove('none');
    } else {
        item[0].classList.remove('incorrect');
        item[1].classList.add('none');
    }
}

function validate(){
    validateInput(firstName);
    validateInput(lastName);
    validateEmail(email);
    validateInput(password);
}
