const args = process.argv
const transform = require('./transform')
const sort = require('./sort')
const date = require('./date')
const searchKeyWord = require('./searchKeyWord')
const benchmark = require('./benchmark')
const color = require('./majorColor')
const pairOfWords = require('./pairOfWords')

for (let i = 2; i < args.length; i++) {
    const arg = args[i];

    // Case where user wants to save images
    if (arg == '-save') {
        if (args[i+3] == 'search_date' && args.length > i+6) {
            let searchDateFunction = ()=> {
                date.searchDate(args[i+4], args[i+5], args[i+6], args[i+1])
            }
            benchmark.benchmark(searchDateFunction)
            break
        }
        else if (args[i+3] == 'search_key_word' && args.length > i+6) {
            let searchKeyWordFunction = ()=> {
                searchKeyWord(args[i+4], args[i+5].toLowerCase(), args[i+6].toLowerCase(), args[i+1])
            }
            benchmark.benchmark(searchKeyWordFunction)
            break
        }
    }
    else if(arg == '-action') {
        if (args[i+1] == 'transform' && args.length > i+3) {
            let transformFunction = ()=>{ //This logic apply on every function later. We first create an variable of the function
                transform(args[i+2], args[i+3]) //then define it
            }
            benchmark.benchmark(transformFunction) //And finally call it using the benchmark function. 
            break
        }
        else if (args[i+1] == 'sort_date' && args.length > i+3) {
            let sortDateFunction = ()=> {
                sort.sortDate(args[i+2], args[i+3])
            }
            benchmark.benchmark(sortDateFunction)
            break
        }
        else if (args[i+1] == 'sort_title' && args.length > i+3) {
            let sortTitreFunction = ()=> {
                sort.sortTitle(args[i+2], args[i+3])
            }
            benchmark.benchmark(sortTitreFunction)
            break
        }
        else if (args[i+1] == 'search_date' && args.length > i+4) {
            let searchDateFunction = ()=> {
                date.searchDate(args[i+2], args[i+3], args[i+4], false)
            }
            benchmark.benchmark(searchDateFunction)
            break
        }
        else if (args[i+1] == 'search_key_word' && args.length > i+4) {
            let searchKeyWordFunction = ()=> {
                searchKeyWord(args[i+2], args[i+3].toLowerCase(), args[i+4].toLowerCase(), false)
            }
            benchmark.benchmark(searchKeyWordFunction)
            break
        }
        else if (args[i+1] == 'get_pair' && args.length > i+1) {
            let pairOfWordsFunction = ()=> {
                pairOfWords(args[i+2])
            }
            benchmark.benchmark(pairOfWordsFunction)
            break
        }
        else if (args[i+1] == 'get_color' && args.length > i+1) {
            let colorFunction = ()=> {
                color(args[i+2])
            }
            benchmark.benchmark(colorFunction)
            break
        }
        else {
            console.log("\nCommande invalide\n");
            break
        }
    } else {
        console.log("\nCommande invalide\n");
        break
    }
}