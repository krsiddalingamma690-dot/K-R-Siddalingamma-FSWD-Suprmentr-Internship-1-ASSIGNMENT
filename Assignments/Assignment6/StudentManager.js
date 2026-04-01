// Create array of students (objects)
var students = [
    { name: "Ram", marks: 80, },
    { name: "Sita", marks: 70 },
    { name: "John", marks: 90 }
];

// Display all students
console.log("Student Details:");
for (var i = 0; i < students.length; i++) {
    console.log(students[i].name + " - " + students[i].marks);
}

// Calculate total marks
var total = 0;
for (var i = 0; i < students.length; i++) {
    total = total + students[i].marks;
}

// Calculate average
var average = total / students.length;

// Display average
console.log("Average Marks: " + average);