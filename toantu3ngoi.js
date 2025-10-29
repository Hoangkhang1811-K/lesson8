let a = prompt("a: ");
let b = prompt("b: ");
result =(a+b <4)? 'below' : 'over';
document.write(result);

let login = prompt("Enter:");
let message = (login == 'Employee') ?
    'Hello' :
    (login == 'Director') ?
        'Greetings' :
        (login == '') ?
            'No login' :
            '';
alert(message);