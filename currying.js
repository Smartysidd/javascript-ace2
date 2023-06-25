// function fn(a){
//     return function(b){
//         console.log(a+b)
//     }
//     }
//     let returnedfunction=fn(3)
//     console.log(returnedfunction)

// output--function (anonymous)

function fn(a){
    return function(b){
        return function(c){
        console.log(a+b+c)
    }
    }}
    let returnedfunction=fn(3)
    let nextreturnedfunction=returnedfunction(4)
    nextreturnedfunction(7)