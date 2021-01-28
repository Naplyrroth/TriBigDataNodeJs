const fs = require('fs')

module.exports = 
{
    sortDate: (inputFile, outputFile) => 
    {
      // Get the data of the input file
      let readFile = fs.readFileSync(inputFile)
      let data = JSON.parse(readFile)
      let done = false
      
      while(!done) //Set a while loop to make sure every movies are classed
      { 
        done = false //Reset the value
        
        for (let i = 1; i < data.length; i++) 
        {
          if (data[i - 1].release_date > data[i].release_date) 
          {
            let changed = data[i - 1];
            data[i - 1] = data[i];
            data[i] = changed;
          }
          
        } 
        if (checkAllMoviesDatesAreSorted(data)) //Every time a loop is over, check if every files are sorted, if not, begin another loop
          done = true; //In the end, set done to true, to exit the loop
      }
      fs.writeFileSync(outputFile, JSON.stringify(data, null, '\t'))
    },

    sortTitle: (inputFile, outputFile) => //The logic is the exact same as sortDate
    {
      let readFile = fs.readFileSync(inputFile)
      let data = JSON.parse(readFile)
      let done = false
      
      while(!done)
      {
        done = false

        for (let i = 1; i < data.length; i++) 
        {
          if (data[i - 1].title > data[i].title) 
          {
            let changed = data[i - 1];
            data[i - 1] = data[i];
            data[i] = changed;
          }
          
        } 
        if (checkAllMoviesTitlesAreSorted(data))
          done = true;
      }
      fs.writeFileSync(outputFile, JSON.stringify(data, null, '\t'))
    },

}
function checkAllMoviesDatesAreSorted(data)
    {
      for (let i = 1; i < data.length; i++) { //Check every movies
      if (data[i - 1].release_date > data[i].release_date) //And if a movie is not at it's place, return false
        return false;
    }
    return true; //Else return true
    }

function checkAllMoviesTitlesAreSorted(data) //Same logic as date.
{
  for (let i = 1; i < data.length; i++) {
  if (data[i - 1].title > data[i].title)
    return false;
  }
  return true;
}
