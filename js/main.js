// grab text link
var listClick = document.getElementById("list-link");
// grab list element
var list = document.getElementById("see-list");
// grab input element
var input = document.getElementById("search-box");
// hide list element at first so if there's no javascript then site is still useable
list.className += "hide-all";
// when the text link is clicked on
listClick.onclick = function() { showHideTheList(list) };
// add class which shows the list
function showHideTheList(el) {

  // get current classnames
  var className = ' ' + list.className + ' ';

  // if showing, then hide
  if ( ~className.indexOf(' show-all ') ) {
    list.className = className.replace(' show-all ', ' hide-all ');
  } else {
    // else show
    list.className += ' show-all';
  }
};

input.onfocus = function() {
  input.addEventListener('input', function() {
    searchFor(input.value);
  });
}

var corporateChoices = [];
var craftChoices = [];
var choices = document.getElementsByTagName('li');
for (var i=0; i<choices.length; i++) {
  if (choices[i].className == "corporate") {
    corporateChoices.push(choices[i]);
  } else if (choices[i].className == "craft") {
    craftChoices.push(choices[i]);
  }
}
var fullArray = corporateChoices.concat(craftChoices);

function searchFor(word) {
  for (var i=0; i<fullArray.length; i++) {
    if (corporateChoices[i].match(word) || craftChoices[i].match(word)) {
      console.log("found");
    }
  }
  // if (corporateChoices.indexOf(word)) {
  //   console.log("found");
  // } else {
  //   console.log("not corporate");
  // }
}
