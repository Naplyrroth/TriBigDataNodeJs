const fs = require('fs')

module.exports = 
{
    sortDate: (inputFile, outputFile) => 
    {
      // Get the data of the input file
      let readFile = fs.readFileSync(inputFile)
      let data = JSON.parse(readFile)
      let done = false
      
      while(!done)
      { 
        done = false
        
        for (let i = 1; i < data.length; i++) 
        {
          if (data[i - 1].release_date > data[i].release_date) 
          {
            let changed = data[i - 1];
            data[i - 1] = data[i];
            data[i] = changed;
          }
          
        } 
        if (checkAllMoviesDatesAreSorted(data))
          done = true;
      }
      fs.writeFileSync(outputFile, JSON.stringify(data, null, '\t'))
    },

    sortTitle: (inputFile, outputFile) => 
    {
      //Get the data of the input file
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
      fs.writeFileSync(outputFile, JSON.stringify(data))
    },

}
function checkAllMoviesDatesAreSorted(data) 
    {
      for (let i = 1; i < data.length; i++) {
      if (data[i - 1].release_date > data[i].release_date)
        return false;
    }
    return true;
    }

function checkAllMoviesTitlesAreSorted(data) 
{
  for (let i = 1; i < data.length; i++) {
  if (data[i - 1].title > data[i].title)
    return false;
  }
  return true;
}
