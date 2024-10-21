
// Setting up for loop to start at 1 and eend at 10
for (let i = 1; i <= 10; i++) {
    // If i/2 has a remainder of 0, then it is even. Otherwise, it is odd
    if (i % 2 == 0) {
        document.write(`Count ${i} is even. `)
    } else {
        document.write(`Count ${i} is odd. `)
    }
}


// Set the variable to what the user will input
let myNum = prompt("Pick a number between 5 and 20")
// Set the counter to start at 1
let counter = 1

// The loop will write 1, and while the counter is less than or equal to the user's number, it will keep writing
// The loop will stop once the user's number is reached
do {
    document.write(`${counter}, `)
    counter ++
} while (counter <= myNum)

// Setting array of string values
let text = ""
let array = ["Accounting", "Algebra", "Programming", "Art", "Data Analytics"]

// For each value in the array, perform the function
array.forEach(myFunction)

// Function that will run for each array value
function myFunction (value, index) {
    text += index + ": " + value + "<br>"
}

document.getElementById("forEach").innerHTML = text