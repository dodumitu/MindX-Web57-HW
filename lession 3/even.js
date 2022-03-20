function even(fromNum, toNum){
    let evenArr = [];
    for(let i = fromNum; i<= toNum; i++){
        if(i%2 === 0) evenArr.push(i);
    }
    return evenArr;
}
module.exports = even;