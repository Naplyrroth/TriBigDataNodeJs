module.exports = {
    benchmark : (programme) =>
    {
        let start = new Date().getTime();
        programme();
        let stop = new Date().getTime();
        console.log("time programme : " + (stop - start));
    }
}