function calculateGPA(arr){
    let average = 0;
    for (let i = 0; i < arr.length; i += 1){
        if (arr[i] === "A"){
            average += 100;
        } else if (arr[i] === "B"){
            average += 80;
        } else if (arr[i] === "C"){
            average += 70;
        }
    }
    average = average / arr.length;
    console.log("Your GPA is " + average);
}

calculateGPA(["A", "B", "C"]);