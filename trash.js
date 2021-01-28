let overview = "Charlie is an immigrant who endures a challenging voyage and gets into trouble as soon as he arrives in America"
let word = "charlie"


function x() {
    let desc = overview.split(' ')
    for (let i = 0; i < desc.length; i++) {
        if (desc[i].toLowerCase() == word.toLowerCase()) {
            return true
        }
        return false
    }
}
console.log(x())