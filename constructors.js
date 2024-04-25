//You are building a simple quiz app that contains multiple-choice questions. Your task is to create two JavaScript classes: Question and Quiz. The Question class will represent individual questions, and the Quiz class will manage a collection of questions and the user's progress. 
//1. Create a Question class with the following properties: 
//● text(string): The text of the question. 
//● options(array): An array containing the multiple-choice options. ● correctAnswer(string): The correct answer to the question. 
//The Question class should also have a method called checkAnswer that takes a user's answer as a parameter and returns true if the answer is correct and false otherwise. 


const allQuestions = [
   {
      question: "Which country was never colonize",
      answers: {
        a: "Egypt",
        b: "Djibouti",
        c: "Liberia"
      },
      correctAnswer: "c"
   },
   {
      question: "Which city is the capital city of Kenya ?",
      answers: {
        a: "Nairobi",
        b: "Mombasa",
        c: "Kisumu"
      },
      correctAnswer: "a"
   },
   {
      question: "Which  country is a lanlock?",
      answers: {
        a: "Kenya",
        b: "Rwanda",
        c: "Ethiopia",
        d: "Tanzania"
    },
    correctAnswer: "b"
 }
];

let score = 0;
let currentQuestionIndex = 0;

function displayQuestion() {
 const question = allQuestions[currentQuestionIndex];
 console.log(question.question);
 for (let key in question.answers) {
    console.log(key + ": " + question.answers[key]);
 }
}

function checkAnswer(userAnswer) {
 const question =allQuestions[currentQuestionIndex];
 if (userAnswer === question.correctAnswer) {
    score++;
    console.log("Correct!");
 } else {
    console.log("Incorrect,try again.");
 }
 currentQuestionIndex++;
 if (currentQuestionIndex < totalQuestions.length) {
    displayQuestion();
 } else {
    console.log("Done! Your total scores is: " + score);
 }
}

displayQuestion();


//2. Create a Quiz class with the following properties: 
//● questions(array):An array of Question objects. 
///● currentQuestionIndex(number): The index of the current question in the questions array. 
//● score(number): The user’s current score. 
//The Quiz class should have the following methods: 
//● addQuestion: Takes a Question object as a parameter and adds it to the questions array. 
//● nextQuestion: Advances to the next question in the quiz by incrementing the currentQuestionIndex. 
//● submitAnswer: Takes a user's answer as a parameter, checks if the answer is correct using the checkAnswer method of the Question class, and updates the score if the answer is correct.


class Question {
    constructor(question1, correctAnswer) {
       this.question1 = question1;
       this.correctAnswer = correctAnswer;
    }
   
    checkAnswer(userAnswer) {
       return userAnswer === this.correctAnswer;
    }
   }
   class Quiz {
      constructor() {
         this.questions = [];
         this.currentQuestionIndex = 0;
         this.score = 0;
      }
     
      addQuestion(question) {
         this.questions.push(question);
      }
     
      nextQuestion() {
         if (this.currentQuestionIndex < this.questions.length - 1) {
           this.currentQuestionIndex++;
         } else {
           console.log("End of quiz");
         }
      }
     
      submitAnswer(userAnswer) {
         const currentQuestion = this.questions[this.currentQuestionIndex];
         if (currentQuestion.checkAnswer(userAnswer)) {
           this.score++;
           console.log("Correct! Total is: " + this.score);
         } else {
           console.log("Incorrect. Try again!");
         }
         this.nextQuestion();
      }
     }
     

 

const quiz = new quiz();


quiz.addQuestion(new Question("What is 4 + 7?", "11"));
quiz.addQuestion(new Question("What is 12 + 9?", "21"));


quiz.submitAnswer("21"); 
quiz.submitAnswer("23"); 
quiz.nextQuestion();


quiz.submitAnswer("11"); 