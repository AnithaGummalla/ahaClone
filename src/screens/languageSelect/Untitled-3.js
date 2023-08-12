// let an = [1,2,3,4]
// let [a,b,...rest] = an
// console.log(rest)
let p = 0;

function countdown(n){
    setInterval(() => {
        if(n >= 0){
            p = n--
            console.log(p)
        }
 
    }, 1000);
}
countdown(10)