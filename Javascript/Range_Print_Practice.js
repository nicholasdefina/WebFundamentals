function printRange(startPoint,endPoint,skipAmount=1){
    count = [];
    for (var i = startPoint; i < endPoint; i+=skipAmount){
        count.push(i)
    }
    return count;
}

printRange(10,100,10);