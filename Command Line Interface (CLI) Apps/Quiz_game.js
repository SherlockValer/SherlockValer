//a CLI quiz game where the user is asked multiple questions, and they must answer correctly. Keep track of the score.

//An array containing questions and answers
let quiz_arr = ["",
    "What is 2 + 2 ?", "4",
    "What is 2 * 3 ?", "6",
    "What is the capital of India?", "Delhi",
    "Who is PM of India?", "Narendra Modi",
    "How many States are in India?", "28",
    "Which country shares longest border with India ?", "Bangladesh"
];

//Arrays for input answer
var bool_arr = [];
var user_ans_arr = [];

//Input from user => pushing in arrays
for (i = 0; i < (quiz_arr.length - 1) / 2; i++) {
    let input = prompt(quiz_arr[2 * i + 1]);
    if (input === quiz_arr[2 * i + 2]) {
        bool_arr.push(true);
        user_ans_arr.push(input);
    } else {
        bool_arr.push(false);
        user_ans_arr.push(input);
    }
}

//function to know which answers are correct and which are wrong
console.log("Results are :");
for (j = 0; j < user_ans_arr.length; j++) {
    console.log(
        "Question:", quiz_arr[2 * j + 1],
        "Your input:", user_ans_arr[j],
        "Answer:", quiz_arr[2 * j + 2],
        );
};

//Score card generator
var score = 0;
for(k = 0; k < bool_arr.length; k++){
    if (bool_arr[k] == true){
        score += 1;
    };
};
console.log("Your Score is :", score, "/", bool_arr.length);
