const str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";

let random_str="";
for(j = 0; j < str.length; j++){
    random_str += str[Math.floor(Math.random()*70)];
}


let input = prompt("length of the password:");
let num_input = parseInt(input);
let random_pass = "";
for (i = 0; i <num_input; i++ ){
    let random_num = Math.floor(Math.random()*70);
    random_pass += random_str[random_num];
}
alert(random_pass);
