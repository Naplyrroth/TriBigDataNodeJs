const args = process.argv
const transform = require('./transform')
const sort = require('./sort')
const date = require('./date')
const search = require('./search')
const img = require('./img')

for (let i = 2; i < args.length; i++) {
    const arg = args[i];

    if(arg == '-action') {
        if (args[i+1] == 'transform') {
            transform(args[i+2], args[i+3])
        }
        else if (args[i+1] == 'sort_date') {
            sort.sortDate(args[i+2], args[i+3])
        }
        else if (args[i+1] == 'sort_title') {
            sort.sortTitle(args[i+2], args[i+3])
        }
        else if (args[i+1] == 'search_date') {
            date.searchDate(args[i+2], args[i+3], args[i+4])
        }
        else if (args[i+1] == 'search_key_word') {
            search.searchKeyWord(args[i+2], args[i+3], args[i+4])
        }
    }
    else if (arg == '-save') {
        img.saveImg(args[i+1])
    }
}

