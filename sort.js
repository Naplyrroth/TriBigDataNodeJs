module.exports = {
    sortDate: (inputFile, outputFile) => {
        console.log('Sort date function');
        console.log(`Inputfile: ${inputFile}`);
        console.log(`Ourputfile: ${outputFile}`);
    },
    sortTitle: (inputFile, outputFile) => {
        console.log('Sort title function');
        console.log(`Inputfile: ${inputFile}`);
        console.log(`Ourputfile: ${outputFile}`);
    }
}

function sortDate (array) {
    var done = false;
    while (!done) {
      done = true;
      for (var i = 1; i < array.length; i += 1) {
        if (array[i - 1] > array[i]) {
          done = false;
          var tmp = array[i - 1];
          array[i - 1] = array[i];
          array[i] = tmp;
        }
      }
    }
  
    return array;
}