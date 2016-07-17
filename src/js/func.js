function consoleRec(sources,count) {

    var len = sources.length;
    console.log(sources[count]);
    count++;

    if(len > count) {
        consoleRec(sources,count);
    }
}

module.exports = { consoleRec } ;
