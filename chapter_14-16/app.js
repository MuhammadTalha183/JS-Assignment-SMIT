// Chapter 14 To 16
// ================= Array =============================

// Answer 1

let std_name = [];

// Answer 2
var std_name_1 = new Array();

let my_friends = ["Ali", "Ahmed", "Hassan", "Hussain"];

// Answer 4
let numbers = [1, 2, 3, 4, 5];

// Answer 5
let boolean_array = [true, false, true, false];
// Answer 6
let mixed_array = [1, "Ali", true, 3.14];
// Answer 7
let qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];  
document.writeln("<h1>Qualifications:</h1>");
for (let i = 0; i < qualifications.length; i++) {
    document.writeln("<p>" + (i + 1) + ". " + qualifications[i] + "</p>");
}


// Answer 8
let student_names = ["Ali", "Ahmed", "Hassan"];
let student_scores = [85, 92, 78];

let percentage = [student_scores[0] / 100 * 100, student_scores[1] / 100 * 100, student_scores[2] / 100 * 100];

document.writeln(`<h1>Student Scores:</h1>);