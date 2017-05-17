// reference to page element for buttons
var pageDiv = document.getElementsByClassName("page");

// Create array of all students
var students = document.getElementsByClassName("student-item");

// Page number Create
var pageNumber = 1;

// calculate number of buttons required for pagination
var leftOver = students.length % 10;
var length = students.length - leftOver;
length = length / 10;
if (leftOver > 0) {
  length++;
}

// Append buttons to page
$(document).ready(function() {
  for (var j = 1; j < length + 1; j++) {
    $(".page").append("<a id='" + j + "' class='pagelink'>" + j + "</a>");
  }

  $(".pagelink").on("click", function() {
    changePage(this.id);
  });

  // Append Search Div to page
  $(".page-header").append("<div class='student-search'><input class='searchBox' placeholder='Search for students...'><button class='searchButton'>Search</button></div>");


  $(".searchButton").on("click", function() {
    searchList();
  });


});


// function to set display values for groups of students depending on page
function changePage(pageNum) {
  // resets all elements to display none
  $('.student-item').css('display', 'none');

  //this finds if this is the last page
  if (pageNum == length) {
    // loop through and change display value
    for (var y = (pageNum - 1) * 10; y < students.length; y++) {
      students[y].style.display = "";
    }
  } else {
    for (var x = (pageNum * 10) - 1; x > (pageNum - 1) * 10; x--) {
      students[x].style.display = "";
    }
  }
}


// Search Function
function searchList() {
  // Obtain the value of the search input
  var searchstring = $('.searchBox').val();
  console.log(searchstring);
  // remove the previous page link section
  // Loop over the student list, and for each student…
  // ...obtain the student’s name…
  // ...and the student’s email…
  // ...if the search value is found inside either email or name…
  // ...add this student to list of “matched” student
  // If there’s no “matched” students…
  // ...display a “no student’s found” message
  // If over ten students were found…
  // ...call appendPageLinks with the matched students
  // Call showPage to show first ten students of matched list
}





// Set up DOM for pagination
//Hide all elements
$('.student-item').css('display', 'none');

//display first 10 on first page
for (var i = 0; i < 10; i++) {
  students[i].style.display = "";
}
