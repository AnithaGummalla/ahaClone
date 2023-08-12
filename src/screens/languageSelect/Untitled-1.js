// let a =[]
// function fizzbuzz(num){
//     for(let i=1;i<=num;i++){
//         if(i.toString().endsWith(3)){
//             a.push('fizz')
//         }
//         else if(i.toString().endsWith(5)){
//             a.push('buzz')
//         }else {
//             a.push(i)
//         }
        
//     }
//     console.log(a)
// }
// fizzbuzz(20)

// function currying(a){
//     return function (b){
//         return function (c){
//             console.log(a * b * c)
//         }
//     }
// }
// currying(10)(10)(10)

// let enq = [1,2,3,4]
// function enqueue(){
//     enq.push(5)
//     console.log(enq)
//     enq.splice(0,2)
//     console.log(enq)
// }
// enqueue()

// // function to generate binary numbers
// function generatePrintBinary(n)
// {
// 	// Create an empty queue of strings
// 	var q = new Queue();
		
// 	// Enqueue the first binary number
// 	q.enqueue("1");
		
// 	// This loops is like BFS of a tree with 1 as root
// 	// 0 as left child and 1 as right child and so on
// 	while(n-- > 0)
// 	{
// 		// print the front of queue
// 		var s1 = q.front();
// 		q.dequeue();
// 		console.log(s1);
			
// 		// Store s1 before changing it
// 		var s2 = s1;
			
// 		// Append "0" to s1 and enqueue it
// 		q.enqueue(s1 + "0");
			
// 		// Append "1" to s2 and enqueue it. Note that s2 contains
// 		// the previous front
// 		q.enqueue(s2 + "1");
// 	}
// }

// // calling the above function
// // prints [1 10 11 100 101]
// generatePrintBinary(5);

let str = 'anitha frontend developer'
let string = 'first letter is A'

console.log(str.charAt(0).toUpperCase() + str.slice(1))
console.log(str.split('').reverse().join(''))
console.log(str.split(' ').map((s) => s.split('').reverse().join('')).join(' '))
console.log(str)

var arr = ['a','b','c','d']
console.log(arr)
let n = arr
console.log(n)
// arr = []
// console.log(arr)
// console.log(n)

let ne = arr.splice(0,arr)
console.log(ne)

while(arr.length > 0){
    arr.pop()
}
console.log(arr)

let a = [1,2,3,4]

function callback1(name){
    // callback('kite')
    console.log('Hi' + ' ' + name)
    console.log(a)
    return 'name'
}

function callback2(name){
    a.push(100)
    console.log(name)
    callback1(name)
}

callback2(callback1())

let name = 'Aaunit'
console.log(name.charCodeAt(0))

let c = 69687809
console.log(String.fromCharCode(c))

let password = '67238945354884698786579654'
// console.log(password.substring(2))
let an = ''
for(let i=0;i<password.length;i++){
    let pass = password.split('').reverse().join('').substring(i,i+2)
    if(pass > 65){
        console.log(pass)
        let p = String.fromCharCode(pass)
        an+=p
    }
}
console.log(an)
