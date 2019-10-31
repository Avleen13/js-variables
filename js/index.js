let job_title = `Full Stack Developer`
let glctn = `Chicago, Illinois`
let ann_sal = 130000
let cmpny_name = `IBM`

console.log(`You will be a ${job_title} in ${glctn}, making $${ann_sal} for ${cmpny_name}`)

//EXERCISE 2: The Age Calculator
//Forgot how old someone is? Calculate it! Store the current year in a variable.
//Store their birth year in a variable. Calculate their age based on the stored values.
//Output them to the screen like so: "They are NN years old.", substituting the values.

let crnt_yr = 2019
let brth_yr = 1996

let current_age = crnt_yr - brth_yr;

console.log(`They are ${current_age} years old.`)

//EXERCISE 3: The Lifetime Supply Calculator
//Ever wonder how much a "lifetime supply" of your favorite snack is? 
//Wonder no more! Store your current age into a variable. 
//Store a maximum age into a variable. Store an estimated amount per day (as a number). 
//Calculate how many you would eat total for the rest of your life. 
//Output the result to the screen like so: "You will need NN to last you until the ripe old age of X".

let crnt_age = 22
let max_age = 150
let estmd_amnt = 2

let rof = 2*365*150

console.log(`You will need ${rof} to last you until the ripe old age of ${max_age}`)


//EXERCISE 4: The Geometrizer
//Calculate properties of a circle, using the definitions here.
// Store a radius into a variable. 
//Calculate the circumference based on the radius, and output "The circumference is NN". 
//Calculate the area based on the radius, and output "The area is NN".

let rdus = 4
let crcmfrnce = 2 * 3.14 * 4
let crcle_area = 3.14 * 4 * 4 

console.log(`The Circumference is ${crcmfrnce}.`)
console.log(`The Area is ${crcle_area}.`)


//EXERCISE 5: The Temperature Converter
//It's hot out! Let's make a converter based on the steps here.
// Store a celsius temperature into a variable. Convert it to fahrenheit and output "NN°C is NN°F". 
// Now store a fahrenheit temperature into a variable. Convert it to celsius and output "NN°F is NN°C."

let clcs_temp = 30
let frnht_temp = 30 * 1.8 + 32

console.log(`${clcs_temp}°C is ${frnht_temp}°F`)

let frnht_temp1 = 0
let clcs_temp1 = 0 - 32 * 0.56

console.log(`${frnht_temp1}°F is ${clcs_temp1}°C`)
