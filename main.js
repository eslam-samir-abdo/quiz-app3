// ----------------- CONFIG -----------------
const QUESTION_TIME = 15;

// ----------------- DOM -----------------
const startBtn = document.getElementById("startBtn");
const categorySelectStart = document.getElementById("categorySelectStart");
const quizCard = document.querySelector(".quiz-card");
const startScreen = document.getElementById("startScreen");

const totalCountEl = document.getElementById("totalCount");
const timerEl = document.getElementById("timer");
const questionTitle = document.getElementById("question-title");
const answersBox = document.getElementById("answers");
const bulletsBox = document.getElementById("bullets");
const nextBtn = document.getElementById("nextBtn");

const finishScreen = document.getElementById("finishScreen");
const finalTitle = document.getElementById("finalTitle");
const scoreText = document.getElementById("scoreText");
const restartBtn = document.getElementById("restartBtn");
const changeCategoryBtn = document.getElementById("changeCategoryBtn");

// ----------------- STATE -----------------
let questions = [];   // سيتم ملؤه بالأسئلة
let currentIndex = 0;
let score = 0;
let timerInterval = null;
let timeLeft = QUESTION_TIME;

// ----------------- UTIL -----------------
function shuffleArray(a){
  for(let i=a.length-1;i>0;i--){
    const j=Math.floor(Math.random()*(i+1));
    [a[i],a[j]]=[a[j],a[i]];
  }
  return a;
}
function formatTime(sec){
  const s = sec%60;
  const mm = String(Math.floor(sec/60)).padStart(2,"0");
  const ss = String(s).padStart(2,"0");
  return `${mm}:${ss}`;
}

// ----------------- QUESTIONS DATA -----------------
const allQuestions = [
  // ===== CSS =====
  {
    title: "What Dispaly Property Is Used To Make The Element A Block Element",
    answers: ["inline", "block", "inline-block", "None Of The Above"],
    right_answer: "block",
    category: "CSS"
  },
  {
    title: "How Can We Change The Text Color Of An Element In CSS",
    answers: [
      "Using The color Property",
      "Using The font-color Property",
      "Using The text-color Property",
      "None Of The Above"
    ],
    right_answer: "Using The color Property",
    category: "CSS"
  },
  {
    title: "What Is The Default Position Value Of An Element In CSS",
    answers: ["absolute", "fixed", "relative", "static"],
    right_answer: "static",
    category: "CSS"
  },
  {
    title: "How Can We Select An Element With A Specific Class In CSS",
    answers: [
      "Using #class-name",
      "Using .class-name",
      "Using class=class-name",
      "None Of The Above"
    ],
    right_answer: "Using .class-name",
    category: "CSS"
  },
  {
    title: "Which Property Is Used To Change The Background Color Of An Element In CSS",
    answers: ["bgcolor", "background-color", "color-background", "None Of The Above"],
    right_answer: "background-color",
    category: "CSS"
  },
  {
    title: "What Is The Correct Syntax To Link An External CSS File In An HTML Document",
    answers: [
      "<link rel='stylesheet' href='styles.css'>",
      "<style src='styles.css'>",
      "<css link='styles.css'>",
      "None Of The Above"
    ],
    right_answer: "<link rel='stylesheet' href='styles.css'>",
    category: "CSS"
  },
  {
    title: "Which Property Is Used To Set The Font Size Of An Element In CSS",
    answers: ["font-style", "text-size", "font-size", "None Of The Above"],
    right_answer: "font-size",
    category: "CSS"
  },
  {
    title: "How Can We Center An Element Horizontally Using CSS",
    answers: ["Using margin: auto;", "Using text-align: center;", "Using align: center;", "None Of The Above"],
    right_answer: "Using margin: auto;",
    category: "CSS"
  },
  {
    title: "What Is The Purpose Of The Z-Index Property In CSS",
    answers: [
      "To Set The Opacity Of An Element",
      "To Control The Stacking Order Of Elements",
      "To Define The Size Of An Element",
      "None Of The Above"
    ],
    right_answer: "To Control The Stacking Order Of Elements",
    category: "CSS"
  },
  {
    title: "Which CSS Property Is Used To Add Space Inside An Element's Border",
    answers: ["margin", "padding", "border-spacing", "None Of The Above"],
    right_answer: "padding",
    category: "CSS"
  },

  // ===== HTML =====
  {
    title: "Why We Use <br> Element",
    answers: [
      "To Make Text Bold",
      "To Make Text Italic",
      "To Add Breakline",
      "To Create Horizontal Line"
    ],
    right_answer: "To Add Breakline",
    category: "HTML"
  },
  {
    title: "Is <img> Element Has Attribute href",
    answers: [
      "Yes",
      "No Its For Anchor Tag <a>",
      "All Elements Has This Attribute",
      "Answer 1 And 3 Is Right"
    ],
    right_answer: "No Its For Anchor Tag <a>",
    category: "HTML"
  },
  {
    title: "How Can We Make Element Text Bold",
    answers: [
      "Putting It Inside <b> Tag",
      "Putting It Inside <strong> Tag",
      "Customizing It With Font-Weight Property In CSS",
      "All Answers Is Right"
    ],
    right_answer: "All Answers Is Right",
    category: "HTML"
  },
  {
    title: "What Is The Right Hierarchy For Creating Part Of Page",
    answers: [
      "<h2> Then <p> Then <h1> Then <p> Then <h3> Then <p> Then <img>",
      "<h1> Then <p> Then <h3> Then <p> Then <h2> Then <p> Then <img>",
      "<h2> Then <p> Then <h3> Then <p> Then <h1> Then <p> Then <img>",
      "All Solutions Is Wrong"
    ],
    right_answer: "All Solutions Is Wrong",
    category: "HTML"
  },
  {
    title: "How Can We Include External Page Inside Our HTML Page",
    answers: [
      "By Using Include in HTML",
      "By Using Load In HTML",
      "By Using iFrame Tag",
      "All Solutions Is Wrong"
    ],
    right_answer: "By Using iFrame Tag",
    category: "HTML"
  },
  {
    title: "What Is The Tag That Not Exists in HTML",
    answers: ["<object>", "<basefont>", "<abbr>", "All Tags Is Exists in HTML"],
    right_answer: "All Tags Is Exists in HTML",
    category: "HTML"
  },
  {
    title: "How We Specify Document Type Of HTML5 Page",
    answers: ["<DOCTYPE html>", "<DOCTYPE html5>", "<!DOCTYPE html5>", "<!DOCTYPE html>"],
    right_answer: "<!DOCTYPE html>",
    category: "HTML"
  },
  {
    title: "What Is The Element Thats Not Exists in HTML5 Semantics",
    answers: ["<article>", "<section>", "<blockquote>", "<aside>"],
    right_answer: "<blockquote>",
    category: "HTML"
  },
  {
    title: "In HTML Can We Use This Way To Add Attributes",
    answers: ["<div class='class-name'>", "<div class=class-name>", "<div class=\"class-name\">", "All Is Right"],
    right_answer: "All Is Right",
    category: "HTML"
  },
  {
    title: "What Is The Attribute That Used To Link External CSS File",
    answers: ["src", "href", "link", "css"],
    right_answer: "href",
    category: "HTML"
  },

  // ===== JavaScript =====
  {
    title: "what is Dom?",
    answers: [
      "Document Object Model",
      "Data Object Model",
      "Document Oriented Model",
      "Data Oriented Model"
    ],
    right_answer: "Document Object Model",
    category: "JS"
  },
  {
    title: "Which Method Is Used To Select Element By Id In Javascript?",
    answers: [
      "getElementById()",
      "getElementsByClassName()",
      "querySelectorAll()",
      "querySelector()"
    ],
    right_answer: "getElementById()",
    category: "JS"
  },
  {
    title: "How Can We Create A New Element In Javascript?",
    answers: [
      "createNewElement()",
      "new Element()",
      "createElement()",
      "new createElement()"
    ],
    right_answer: "createElement()",
    category: "JS"
  },
  {
    title: "Which Event Occurs When The User Clicks On An Element In Javascript?",
    answers: ["onmouseover", "onchange", "onclick", "onload"],
    right_answer: "onclick",
    category: "JS"
  },
  {
    title: "How Can We Add A Class To An Element In Javascript?",
    answers: [
      "element.addClass()",
      "element.classList.add()",
      "element.setClass()",
      "element.classAdd()"
    ],
    right_answer: "element.classList.add()",
    category: "JS"
  },
  {
    title: "Which Method Is Used To Remove An Element From The DOM In Javascript?",
    answers: [
      "removeElement()",
      "deleteElement()",
      "element.remove()",
      "element.delete()"
    ],
    right_answer: "element.remove()",
    category: "JS"
  },
  {
    title: "How Can We Change The Text Content Of An Element In Javascript?",
    answers: [
      "element.textContent = 'new text';",
      "element.setText('new text');",
      "element.changeText('new text');",
      "element.text = 'new text';"
    ],
    right_answer: "element.textContent = 'new text';",
    category: "JS"
  },
  {
    title: "Which Method Is Used To Attach An Event Handler To An Element In Javascript?",
    answers: [
      "element.attachEvent()",
      "element.addEventListener()",
      "element.onEvent()",
      "element.setEventHandler()"
    ],
    right_answer: "element.addEventListener()",
    category: "JS"
  },
  {
    title: "How Can We Get The Value Of An Input Field In Javascript?",
    answers: ["input.value;", "input.getValue();", "input.fetchValue();", "input.readValue();"],
    right_answer: "input.value;",
    category: "JS"
  },
  {
    title: "Which Method Is Used To Change The Style Of An Element In Javascript?",
    answers: [
      "element.setStyle()",
      "element.style.property = 'value';",
      "element.changeStyle()",
      "element.updateStyle()"
    ],
    right_answer: "element.style.property = 'value';",
    category: "JS"
  }
];

// ----------------- PREPARE QUIZ -----------------
function prepareQuiz(selectedCategory){
  let catKey = selectedCategory==="JavaScript"?"JS":selectedCategory;
  questions = selectedCategory==="All"?allQuestions.slice():allQuestions.filter(q=>q.category===catKey);
  
  shuffleArray(questions);
  questions = questions.map(q=>{
    return {...q, answers:shuffleArray(q.answers.map(a=>({text:a,isRight:a===q.right_answer})))};
  });

  currentIndex=0; score=0;
  totalCountEl.textContent=questions.length;
  buildBullets(questions.length);
  showQuestionAt(currentIndex);
}

// ----------------- BULLETS -----------------
function buildBullets(n){
  bulletsBox.innerHTML="";
  for(let i=0;i<n;i++){
    const b=document.createElement("div");
    b.className="bullet"+(i===0?" active":"");
    bulletsBox.appendChild(b);
  }
}
function updateBullets(){
  bulletsBox.querySelectorAll(".bullet").forEach((b,i)=>b.classList.toggle("active",i===currentIndex));
}

// ----------------- TIMER -----------------
function startTimer(){
  clearInterval(timerInterval);
  timeLeft=QUESTION_TIME;
  timerEl.textContent=formatTime(timeLeft);
  timerInterval=setInterval(()=>{
    timeLeft--;
    timerEl.textContent=formatTime(timeLeft);
    if(timeLeft<=0){
      clearInterval(timerInterval);
      revealCorrect();
      setTimeout(()=>goNext(),900);
    }
  },1000);
}
function stopTimer(){ clearInterval(timerInterval); }

// ----------------- SHOW QUESTION -----------------
function showQuestionAt(index){
  if(!questions.length){ questionTitle.textContent="No questions"; answersBox.innerHTML=""; return; }
  const q=questions[index];
  questionTitle.textContent=q.title;
  answersBox.innerHTML="";
  q.answers.forEach(ansObj=>{
    const btn=document.createElement("button");
    btn.className="answer-btn"; btn.textContent=ansObj.text; btn.disabled=false;
    btn.addEventListener("click",()=>selectAnswer(btn,ansObj.isRight));
    answersBox.appendChild(btn);
  });
  updateBullets(); startTimer();
}

// ----------------- SELECTION -----------------
function selectAnswer(btn,isRight){
  document.querySelectorAll(".answer-btn").forEach(b=>b.disabled=true);
  if(isRight){ btn.classList.add("correct"); score++; } else { btn.classList.add("wrong"); }
  revealCorrect(); stopTimer();
  setTimeout(()=>goNext(),900);
}
function revealCorrect(){
  const q=questions[currentIndex];
  document.querySelectorAll(".answer-btn").forEach(b=>{if(b.textContent===q.right_answer)b.classList.add("correct");});
}

// ----------------- NEXT / FINISH -----------------
function goNext(){
  currentIndex++;
  if(currentIndex<questions.length){ showQuestionAt(currentIndex); } else { finishQuiz(); }
}
function finishQuiz(){
  stopTimer();
  questionTitle.textContent="Quiz Finished!";
  answersBox.innerHTML="";
  finalTitle.textContent="Your Results";
  scoreText.textContent=`You scored ${score} out of ${questions.length}`;
  finishScreen.classList.remove("hidden");
}

// ----------------- EVENTS -----------------
nextBtn.addEventListener("click",()=>{ revealCorrect(); stopTimer(); setTimeout(()=>goNext(),600); });
restartBtn.addEventListener("click",()=>{ finishScreen.classList.add("hidden"); prepareQuiz(categorySelectStart.value); });
changeCategoryBtn.addEventListener("click",()=>{ finishScreen.classList.add("hidden"); startScreen.classList.remove("hidden"); });
startBtn.addEventListener("click",()=>{ startScreen.classList.add("hidden"); quizCard.classList.remove("hidden"); prepareQuiz(categorySelectStart.value); });
categorySelectStart.addEventListener("change",()=>{ if(!quizCard.classList.contains("hidden")) prepareQuiz(categorySelectStart.value); });

// ----------------- BOOT -----------------
(function boot(){ prepareQuiz("All"); })();
