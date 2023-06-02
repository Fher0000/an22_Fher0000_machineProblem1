// ITCS227 Source Code Template for 2T AY 2022-2023
/*
   Program:        Computation of Grades using Function
   Programmer:     Fher Elaissa D. Castro
   Section:        AN22
   Start Date:     June 2, 2023
   End Date:       June 2, 2023
*/

function CA(grades) {
  const sum = grades.reduce((total, grade) => total + grade, 0);
  return sum / grades.length;
}

function CLG(grade) {
  if (grade >= 90 && grade <= 100) {
    return 'A';
  } else if (grade >= 80 && grade < 90) {
    return 'B';
  } else if (grade >= 70 && grade < 80) {
    return 'C';
  } else if (grade >= 60 && grade < 70) {
    return 'D';
  } else {
    return 'F';
  }
}

const students = [];

for (let i = 1; i <= 5; i++) {
  const student = {};

  student.name = prompt(`Enter the name of the student: `);

  const classParticipationGrades = [];
  for (let j = 1; j <= 5; j++) {
    const grade = parseFloat(prompt(`Enter enabling assessment ${j}:`));
    classParticipationGrades.push(grade);
  }
  student.classParticipation = CA(classParticipationGrades);

  const summativeGrades = [];
  for (let j = 1; j <= 3; j++) {
    const grade = parseFloat(prompt(`Enter summative assessment ${j}:`));
    summativeGrades.push(grade);
  }
  student.summativeGrade = CA(summativeGrades);

  student.finalExam = parseFloat(prompt(`Enter major exam grade:`));

  student.grade = (student.classParticipation * 0.3) + (student.summativeGrade * 0.3) + (student.finalExam * 0.4);
  student.letterGrade = CLG(student.grade);

  students.push(student);
}

console.log('_______________________________________________________________________');
console.log('|   Name    | Class Participation | Summative | Grade | Letter Grade |');
console.log('_______________________________________________________________________');
students.forEach((student) => {
  console.log(`| ${student.name.padEnd(10)} | ${student.classParticipation.toFixed(2).padStart(18)} | ${student.summativeGrade.toFixed(2).padStart(9)} | ${student.grade.toFixed(2).padStart(5)} | ${student.letterGrade.padStart(12)} |`);
});
console.log('_______________________________________________________________________');