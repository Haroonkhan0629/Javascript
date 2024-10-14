// Set name variable to what the user will input for the question.
let Fname = prompt("What is your first name: ")

// Display their name on the webpage.
document.write(`Welcome ${Fname}. ` )

// Set variable for pi value.
const piValue = 3.1415926

// Set favnum variable to what the user will input for the question.
let myFavNum = prompt("What is your favorite number?")

// Display their favorite number on the webpage.
document.write(`You entered ${myFavNum} as your favorite number. `)

// Set area variable to "pi * radius^2" by plugging in the pi value for pi, and their favorite number as the radius.
let myArea = piValue * myFavNum ** 2

// Display the area on the webpage.
document.write(`If that was the radius of a circle, the area would be ${myArea}. ` )
