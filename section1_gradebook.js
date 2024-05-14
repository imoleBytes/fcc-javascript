function getAverage(scores) {
    let sum = 0;
  
    for (const score of scores) {
      sum += score;
    }
  
    return sum / scores.length;
  }


function getGrade(score) {
    let grade;

    if (score === 100){
        grade = "A++";
    } else if (score >= 90){
        grade = "A";
    } else if (score >= 80){
        grade = "B";
    } else if (score >= 70){
        grade = "C";
    } else if (score >= 60){
        grade = "D";
    } else {
        grade = "F";
    }
    return grade;
}

console.log(getGrade(96));
console.log(getGrade(82));
console.log(getGrade(56));

function hasPassingGrade(score) {
    let grade = getGrade(score);
    return !(grade === "F");  
}


console.log(hasPassingGrade(100));
console.log(hasPassingGrade(53));
console.log(hasPassingGrade(87));



function studentMsg(totalScores, studentScore) {
    let avg = getAverage(totalScores);
    let grade = getGrade(studentScore);
    
    if (hasPassingGrade(studentScore)){
        return `Class average: ${avg}. Your grade: ${grade}. You passed the course.`
    } else {
        return `Class average: ${avg}. Your grade: ${grade}. You failed the course.`
    }
}
console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));
