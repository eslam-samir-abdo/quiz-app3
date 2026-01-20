const questions = [
  // ===== Quiz App CSS Questions =====
  {
    title: "What Dispaly Property Is Used To Make The Element A Block Element",
    answers: ["inline", "block", "inline-block", "None Of The Above"],
    right_answer: "block"
  },
  {
    title: "How Can We Change The Text Color Of An Element In CSS",
    answers: [
      "Using The color Property",
      "Using The font-color Property",
      "Using The text-color Property",
      "None Of The Above"
    ],
    right_answer: "Using The color Property"
  },
  {
    title: "What Is The Default Position Value Of An Element In CSS",
    answers: ["absolute", "fixed", "relative", "static"],
    right_answer: "static"
  },
  {
    title: "How Can We Select An Element With A Specific Class In CSS",
    answers: [
      "Using #class-name",
      "Using .class-name",
      "Using class=class-name",
      "None Of The Above"
    ],
    right_answer: "Using .class-name"
  },
  {
    title: "Which Property Is Used To Change The Background Color Of An Element In CSS",
    answers: ["bgcolor", "background-color", "color-background", "None Of The Above"],
    right_answer: "background-color"
  },
  {
    title: "What Is The Correct Syntax To Link An External CSS File In An HTML Document",
    answers: [
      "<link rel='stylesheet' href='styles.css'>",
      "<style src='styles.css'>",
      "<css link='styles.css'>",
      "None Of The Above"
    ],
    right_answer: "<link rel='stylesheet' href='styles.css'>"
  },
  {
    title: "Which Property Is Used To Set The Font Size Of An Element In CSS",
    answers: ["font-style", "text-size", "font-size", "None Of The Above"],
    right_answer: "font-size"
  },
  {
    title: "How Can We Center An Element Horizontally Using CSS",
    answers: ["Using margin: auto;", "Using text-align: center;", "Using align: center;", "None Of The Above"],
    right_answer: "Using margin: auto;"
  },
  {
    title: "What Is The Purpose Of The Z-Index Property In CSS",
    answers: [
      "To Set The Opacity Of An Element",
      "To Control The Stacking Order Of Elements",
      "To Define The Size Of An Element",
      "None Of The Above"
    ],
    right_answer: "To Control The Stacking Order Of Elements"
  },
  {
    title: "Which CSS Property Is Used To Add Space Inside An Element's Border",
    answers: ["margin", "padding", "border-spacing", "None Of The Above"],
    right_answer: "padding"
  },

  // ===== HTML Questions =====
  {
    title: "Why We Use <br> Element",
    answers: [
      "To Make Text Bold",
      "To Make Text Italic",
      "To Add Breakline",
      "To Create Horizontal Line"
    ],
    right_answer: "To Add Breakline"
  },
  {
    title: "Is <img> Element Has Attribute href",
    answers: [
      "Yes",
      "No Its For Anchor Tag <a>",
      "All Elements Has This Attribute",
      "Answer 1 And 3 Is Right"
    ],
    right_answer: "No Its For Anchor Tag <a>"
  },
  {
    title: "How Can We Make Element Text Bold",
    answers: [
      "Putting It Inside <b> Tag",
      "Putting It Inside <strong> Tag",
      "Customizing It With Font-Weight Property In CSS",
      "All Answers Is Right"
    ],
    right_answer: "All Answers Is Right"
  },
  {
    title: "What Is The Right Hierarchy For Creating Part Of Page",
    answers: [
      "<h2> Then <p> Then <h1> Then <p> Then <h3> Then <p> Then <img>",
      "<h1> Then <p> Then <h3> Then <p> Then <h2> Then <p> Then <img>",
      "<h2> Then <p> Then <h3> Then <p> Then <h1> Then <p> Then <img>",
      "All Solutions Is Wrong"
    ],
    right_answer: "All Solutions Is Wrong"
  },
  {
    title: "How Can We Include External Page Inside Our HTML Page",
    answers: [
      "By Using Include in HTML",
      "By Using Load In HTML",
      "By Using iFrame Tag",
      "All Solutions Is Wrong"
    ],
    right_answer: "By Using iFrame Tag"
  },
  {
    title: "What Is The Tag That Not Exists in HTML",
    answers: ["<object>", "<basefont>", "<abbr>", "All Tags Is Exists in HTML"],
    right_answer: "All Tags Is Exists in HTML"
  },
  {
    title: "How We Specify Document Type Of HTML5 Page",
    answers: ["<DOCTYPE html>", "<DOCTYPE html5>", "<!DOCTYPE html5>", "<!DOCTYPE html>"],
    right_answer: "<!DOCTYPE html>"
  },
  {
    title: "What Is The Element Thats Not Exists in HTML5 Semantics",
    answers: ["<article>", "<section>", "<blockquote>", "<aside>"],
    right_answer: "<blockquote>"
  },
  {
    title: "In HTML Can We Use This Way To Add Attributes",
    answers: ["<div class='class-name'>", "<div class=class-name>", "<div class=\"class-name\">", "All Is Right"],
    right_answer: "All Is Right"
  },
  {
    title: "What Is The Attribute That Used To Link External CSS File",
    answers: ["src", "href", "link", "css"],
    right_answer: "href"
  },

  // ===== JavaScript Questions =====
  {
    title: "what is Dom?",
    answers: [
      "Document Object Model",
      "Data Object Model",
      "Document Oriented Model",
      "Data Oriented Model"
    ],
    right_answer: "Document Object Model"
  },
  {
    title: "Which Method Is Used To Select Element By Id In Javascript?",
    answers: [
      "getElementById()",
      "getElementsByClassName()",
      "querySelectorAll()",
      "querySelector()"
    ],
    right_answer: "getElementById()"
  },
  {
    title: "How Can We Create A New Element In Javascript?",
    answers: [
      "createNewElement()",
      "new Element()",
      "createElement()",
      "new createElement()"
    ],
    right_answer: "createElement()"
  },
  {
    title: "Which Event Occurs When The User Clicks On An Element In Javascript?",
    answers: ["onmouseover", "onchange", "onclick", "onload"],
    right_answer: "onclick"
  },
  {
    title: "How Can We Add A Class To An Element In Javascript?",
    answers: [
      "element.addClass()",
      "element.classList.add()",
      "element.setClass()",
      "element.classAdd()"
    ],
    right_answer: "element.classList.add()"
  },
  {
    title: "Which Method Is Used To Remove An Element From The DOM In Javascript?",
    answers: [
      "removeElement()",
      "deleteElement()",
      "element.remove()",
      "element.delete()"
    ],
    right_answer: "element.remove()"
  },
  {
    title: "How Can We Change The Text Content Of An Element In Javascript?",
    answers: [
      "element.textContent = 'new text';",
      "element.setText('new text');",
      "element.changeText('new text');",
      "element.text = 'new text';"
    ],
    right_answer: "element.textContent = 'new text';"
  },
  {
    title: "Which Method Is Used To Attach An Event Handler To An Element In Javascript?",
    answers: [
      "element.attachEvent()",
      "element.addEventListener()",
      "element.onEvent()",
      "element.setEventHandler()"
    ],
    right_answer: "element.addEventListener()"
  },
  {
    title: "How Can We Get The Value Of An Input Field In Javascript?",
    answers: ["input.value;", "input.getValue();", "input.fetchValue();", "input.readValue();"],
    right_answer: "input.value;"
  },
  {
    title: "Which Method Is Used To Change The Style Of An Element In Javascript?",
    answers: [
      "element.setStyle()",
      "element.style.property = 'value';",
      "element.changeStyle()",
      "element.updateStyle()"
    ],
    right_answer: "element.style.property = 'value';"
  }
];
