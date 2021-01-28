const fs = require('fs')

module.exports = {
    sortDate: (inputFile, outputFile) => 
    {
      // Get the data of the input file
      let readFile = fs.readFileSync(inputFile)
      let data = JSON.parse(readFile)
      let done = false
      
      while(!done)
      {
        for (let i = 1; i < data.length; i++) 
        {
          if (data[i - 1].release_date > data[i].release_date) 
          {
            let changed = data[i - 1];
            data[i - 1] = data[i];
            data[i] = changed;
          }
          
        } 
        if (checkAllMoviesAreSorted(data))
          done = true;
      }
      fs.writeFileSync(outputFile, JSON.stringify(data))
    },

    /*sortTitle: (inputFile, outputFile) => 
    {
        console.log('Sort title function');
        console.log(`Inputfile: ${inputFile}`);
        console.log(`Outputfile: ${outputFile}`);
    }, */

}
function checkAllMoviesAreSorted(data) 
    {
      for (let i = 1; i < data.length; i++) {
      if (data[i - 1].release_date > data[i].release_date)
        return false;
    }
    return true;
    }
