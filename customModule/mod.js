function average(ary){
    sum = 0;
    for(i of ary){
        sum += i;
    }
    return sum/ary.length
}

module.exports= {
    avg : average,
    name: 'devendra',
    job: 'developer'
}
