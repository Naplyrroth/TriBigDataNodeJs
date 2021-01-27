const args = process.argv
const transform = require('./transform')
const sort = require('./sort')
const date = require('./date')
const search = require('./search')
const img = require('./img')
const benchmark = require('./benchmark')

for (let i = 2; i < args.length; i++) {
    const arg = args[i];

    if(arg == '-action') {
        if (args[i+1] == 'transform' && args.length > i+3) {
            let transformFunction = ()=>{ //This logic apply on every function later. We first create an variable of the function
                transform(args[i+2], args[i+3]) //then define it
            }
            benchmark.benchmark(transformFunction) //And finally call it using the benchmark function. 
            break
<<<<<<< HEAD
        } else if (args[i+1] == 'sort_date' && args.length > i+3) {
            sort.sortDate(args[i+2], args[i+3])
            break
        } else if (args[i+1] == 'sort_title' && args.length > i+3) {
            sort.sortTitle(args[i+2], args[i+3])
            break
        } else if (args[i+1] == 'search_date' && args.length > i+4) {
            date.searchDate(args[i+2], args[i+3], args[i+4])
            break
        } else if (args[i+1] == 'search_key_word' && args.length > i+4) {
            search.searchKeyWord(args[i+2], args[i+3], args[i+4])
=======
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
                date.searchDate(args[i+2], args[i+3], args[i+4])
            }
            benchmark.benchmark(searchDateFunction)
            break
        }
        else if (args[i+1] == 'search_key_word' && args.length > i+4) {
            let searchKeyWordFunction = ()=> {
                search.searchKeyWord(args[i+2], args[i+3], args[i+4])
            }
            benchmark.benchmark(searchKeyWordFunction)
>>>>>>> main
            break
        } else {
            console.log("\nCommande invalide\n");
            break
        }
<<<<<<< HEAD
    } else if (arg == '-save' && args.length > i+1) {
        img.saveImg(args[i+1])
=======
    }
    else if (arg == '-save' && args.length > i+1) {
        let saveImgFunction = ()=> {
            img.saveImg(args[i+1])
        }
        benchmark.benchmark(saveImgFunction)
>>>>>>> main
        break
    } else {
        console.log("\nCommande invalide\n");
        break
    }
}