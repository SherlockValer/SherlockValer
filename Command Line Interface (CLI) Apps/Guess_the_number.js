alert("Random number guess \n\nHello people \n\nWelcome to my game ! In this game, you just need to guess a random rumber between 1 and 100 and the game will tell you if your guess was correct or not ! \n\n Thank you for playing this game.")

let input_num = prompt("Guess a number between 1 and 100 :");
let num = parseInt(input_num);
let random_num = Math.floor(Math.random() * 100);

if (num > random_num) {
    alert("Too High! The random number was " + random_num);
} else if (num < random_num) {
    alert("Too Low ! The random number was " + random_num);
} else if (num == random_num) {
    alert("Congratulations ! You guessed it right.");
}



