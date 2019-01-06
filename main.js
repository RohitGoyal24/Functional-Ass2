Num1 = [10, 8, 12, 36];
function ProgrammingFunctional (Num1){
    let doubles = Num1.map(function(x){
        return x*2; 
    })
    let BigNumbers = doubles.filter(function(doubles){
        return doubles > 20;
    })

    let z = BigNumbers.reduce(function(sum, BigNumbers){
        return sum + BigNumbers;
    })
    console.log(z);
}
console.log(ProgrammingFunctional(Num1));