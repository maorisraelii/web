// פונקציה לפתיחת הטאב "ללא סנטימנט"
function openTab(evt, tabName) {
    var i;
    var tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    document.getElementById(tabName).style.display = "block";

    // נגביר את השקיפות של כפתור הטאב הנוכחי
    var tablinks = document.getElemen8tsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active");
    }
    evt.currentTarget.classList.add("active");

    // הסתרת גרפים עם סנטימנט עד שנלחץ על תת טאב
    if (tabName === 'withSentiment') {
        var subtabcontent = document.getElementsByClassName("subtabcontent");
        for (i = 0; i < subtabcontent.length; i++) {
            subtabcontent[i].style.display = "none";
        }
    }

    if (tabName === 'results') {
        var subtabcontent = document.getElementsByClassName("subtabcontent");
        for (i = 0; i < subtabcontent.length; i++) {
            subtabcontent[i].style.display = "none";
        }
    }
}

// פונקציה לפתיחת הטאב "עם סנטימנט"
function openSubTab(evt, subTabName) {
    var i;
    var subtabcontent = document.getElementsByClassName("subtabcontent");
    for (i = 0; i < subtabcontent.length; i++) {
        subtabcontent[i].style.display = "none";
    }
    document.getElementById(subTabName).style.display = "block";

    // נגביר את השקיפות של כפתור הטאב הנוכחי
    var subtablinks = document.getElementsByClassName("subtablink");
    for (i = 0; i < subtablinks.length; i++) {
        subtablinks[i].classList.remove("active");
    }
    evt.currentTarget.classList.add("active");
}

// סידור תצוגת הדף לאחר טעינת הדף
document.addEventListener("DOMContentLoaded", function() {
    // הסתרת תוכן הטאבים בתחילת הערך
    var tabContents = document.getElementsByClassName("tabcontent");
    for (var i = 0; i < tabContents.length; i++) {
        tabContents[i].style.display = "none";
    }
});