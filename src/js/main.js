// exemplo de implementcao do padrao callback

function calculate(n1, callback){
    let n2 = n1 + 1

    let err = ``;
    if(n1 == 0)
        err ="numero errado parca"; 
    
   let result = callback(n1,n2, err);

   if(!err) {
    console.log(`o resultado e ${result}`)
    }
}

calculate(0, function(number1, number2, err){
    if(err) console.log(err);
    return number1 + number2;
});

calculate(1, function(number1, number2, err){
    if(err) console.log(err);
    return number1 - number2;
});

calculate(1, function(number1, number2, err){
    if(err) console.log(err);
    return number1 * number2;
});

calculate(1, function(number1, number2, err){
    if(err) console.log(err);
    return number1 / number2;
});