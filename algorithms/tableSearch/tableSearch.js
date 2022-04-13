
function tableSearch(vec, trg){
    let freq = [];
    let numbercomparisons = 1;
    let valor;
    for (let i = 0; i < vec.length; i++) {
        freq.push(vec[i]);
    }

    if (freq[trg]> 0) {
       numbercomparisons++;
        valor = true;

        return [valor, numbercomparisons];
    } else {
       numbercomparisons++;
        valor = false;

        return [valor, numbercomparisons];
    }

}

module.exports = {tableSearch}