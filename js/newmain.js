var studentContainer = document.querySelector(".student-list");

var studentItems = studentContainer.children;

var page = document.querySelector(".page");

var results;

var studentNumber = studentItems.length;

var pages = Math.ceil(studentItems.length / 10);

var currentPage;

var hideStudentList = function () {
    'use strict';
    for (var i = 0; i < studentItems.length; i++) {
        var classes = studentItems[i].classList;
        classes.add("hidden");
    }
}

var showResults = function (page) {
    hideStudentList();
    currentPage = page;
    var rangeHigh = page * 10;
    var rangeLow = rangeHigh - 10;
    for (i = rangeLow; i < rangeHigh; i++) {
        if (studentItems[i] !== undefined) {
            classes = studentItems[i].classList;
            classes.remove("hidden");
        }
    }
//    addActiveClass(page);
}

//var addActiveClass = function (page) {
//    var pages = document.querySelector(".pagination");
//    var pageItems = pages.firstChild.children;
//    for (i = 0; i < pageItems.length; i++) {
//        pageItems[i].className = "";
//    }
//    console.log(pageItems);
//    pageItems[page-1].className = "active";
//}

var makePageList = function() {
    var listDiv = document.createElement("div");
    var container = document.createElement("ul");
    for (i = 1; i <= pages; i++) {
        var pageItem = document.createElement("li");
        var pageLink = document.createElement("a");
        pageLink.setAttribute("href", "#");
        pageLink.textContent = i;
        pageItem.appendChild(pageLink);
        container.appendChild(pageItem);
    }
    listDiv.appendChild(container);
    listDiv.classList.add("pagination");
    if (document.querySelector(".pagination")) {
        console.log("The page already contains a pages div!");
        var oldDiv = document.querySelector(".pagination");
        oldDiv.parentElement.removeChild(oldDiv);
        console.log("The old pages div has been removed!");
    }
    page.appendChild(listDiv);
};

hideStudentList();
makePageList();
showResults(1);

        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
