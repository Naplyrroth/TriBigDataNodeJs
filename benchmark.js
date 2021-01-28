module.exports = { //Export the function to use it anywhere
    benchmark : (program) => //Create a benchmark function, taking a "Program" var
    {
        let start = new Date().getTime(); //Start a timer by getting the Date (to the second)
        program(); //Call the said function
        let stop = new Date().getTime(); //End the timer by getting a new Date (to the second as usual)
        console.log("\nThe program took " + (stop - start) + "ms to execute\n"); //By a simple substraction we know how many time it took to execute
    }
}