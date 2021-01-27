const fs = require('fs')

module.exports = {
    sortDate: (inputFile, outputFile) => 
    {
      // Get the data of the input file
      let readFile = fs.readFileSync(inputFile)
      let data = JSON.parse(readFile)
    
      var done = false;
      while (!done) 
      {
        done = true;
        for (var i = 1; i < data.length; i += 1) 
        {
          if (data[i - 1] > data[i]) 
          {
            done = false;
            var tmp = data[i - 1];
            data[i - 1] = data[i];
            data[i] = tmp;
          }
        }
      }
      return data;
    },
    sortTitle: (inputFile, outputFile) => 
    {
        console.log('Sort title function');
        console.log(`Inputfile: ${inputFile}`);
        console.log(`Ourputfile: ${outputFile}`);
    }
}

