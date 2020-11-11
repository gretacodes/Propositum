/**
 * Nothing to see here.
 */
/*quote generator start* */
let btn = document.getElementById("btn");
let output = document.getElementById("output");

let quotes = [
  "If you want to be happy, set a goal that commands your thoughts, liberates your energy and inspires your hopes. —Andrew Carnegie",
  "All who have accomplished great things have had a great aim, have fixed their gaze on a goal which was high, one which sometimes seemed impossible. —Orison Swett Marden",
  "Our goals can only be reached through a vehicle of a plan, in which we must fervently believe, and upon which we must vigorously act. There is no other route to success. —Pablo Picasso",
  "Success is the progressive realization of a worthy goal or ideal. —Earl Nightingale",
  "You have to set goals that are almost out of reach. If you set a goal that is attainable without much work or thought, you are stuck with something below your true talent and potential. —Steve Garvey",
  "By recording your dreams and goals on paper, you set in motion the process of becoming the person you most want to be. Put your future in good hands—your own. —Mark Victor Hansen",
  "The trouble with not having a goal is that you can spend your life running up and down the field and never score. —Bill Copeland",
  "One way to keep momentum going is to have constantly greater goals. —Michael Korda",
  "All successful people have a goal. No one can get anywhere unless he knows where he wants to go and what he wants to be or do. —Norman Vincent Peale",
  "A goal properly set is halfway reached. —Zig Ziglar"
];

btn.addEventListener("click", function () {
  var randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  output.innerHTML = randomQuote;
});

/*quote generator end*/

/*todo list start*/

let addToDoButton = document.getElementById("addToDo");
let toDoContainer = document.getElementById("toDoContainer");
let inputField = document.getElementById("inputField");

addToDoButton.addEventListener("click", function () {
  var paragraph = document.createElement("p");

  /*add class styling* */

  paragraph.classList.add("paragraph-styling");
  paragraph.innerText = inputField.value;
  toDoContainer.appendChild(paragraph);
  inputField.value = ""; /*in order to have it blank every time you press add */
  paragraph.addEventListener("click", function () {
    paragraph.style.textDecoration = "line-through";
  });
  paragraph.addEventListener("dblclick", function () {
    toDoContainer.removeChild(paragraph);
  });
});

/*todo list end*/

/*sticky notes start */
var container12 = document.getElementsByClassName("container12")[0];
var container13 = document.getElementsByClassName("container13")[0];
var checkIcon = document.getElementById("check-icon");
var xIcon = document.getElementById("x-icon");
var i = 0;

xIcon.addEventListener("click", function () {
  typeNote();
});

checkIcon.addEventListener("click", function () {
  createNote();
});

function typeNote() {
  if (container13.style.display == "none") {
    container13.style.display = "block";
  } else {
    container13.style.display = "none";
  }
}

function createNote() {
  var noteText = document.getElementById("note-text").value;
  var node0 = document.createElement("div");
  var node1 = document.createElement("h1");

  node1.innerHTML = noteText;
  node1.setAttribute(
    "style",
    "width:100px; height:100px;  font-size:15px; padding:25px; margin-top:10px; overflow:hidden; box-shadow: 0px 5px 14px 0px rgba(0,0,0,0.75)"
  );

  node1.style.margin = margin();
  node1.style.transform = rotate();
  node1.style.background = color();

  node0.appendChild(node1);
  container12.insertAdjacentElement("beforeend", node0);

  node0.addEventListener("mouseenter", function () {
    node0.style.transform = "scale(1.1)";
  });
  node0.addEventListener("mouseleave", function () {
    node0.style.transform = "scale(1)";
  });
  node0.addEventListener("dblclick", function () {
    node0.remove();
  });
  document.getElementById("note-text").value = "";
}

function margin() {
  var random_margin = ["-5px", "1px", "5px", "10px", "15px", "20px"];
  return random_margin[Math.floor(Math.random() * random_margin.length)];
}
function rotate() {
  var random_rotate = [
    "rotate(3deg)",
    "rotate(1deg)",
    "rotate(-1deg)",
    "rotate(-3deg)",
    "rotate(-5deg)",
    "rotate(-10deg)"
  ];
  return random_rotate[Math.floor(Math.random() * random_rotate.length)];
}

function color() {
  var random_color = [
    "#F2F3F4",
    "#F4F6F7",
    "#A6ACAF",
    "#CCD1D1",
    "#7B7D7D",
    "#D0D3D4"
  ];

  if (i > random_color.length - 1) {
    i = 0;
  }
  return random_color[i++];
}
