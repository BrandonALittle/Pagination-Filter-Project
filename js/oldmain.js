var studentItemsList = document.querySelector(".student-list");

var studentItems = studentItemsList.children;

var numberOfStudents = studentItemsList.childElementCount;

var numberOfPages = Math.ceil(numberOfStudents / 10);

