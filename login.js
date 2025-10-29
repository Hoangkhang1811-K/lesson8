let userName = prompt("'Who's there", '');
if (userName == 'Admin') {
    let pass = prompt("'Passworld", '');
    if (pass == 'TheMaster') {
        alert("Welcome");

    } else if (userName == null) {
        alert("Canceled");
    } else {
        alert("I don't know");
    }
}