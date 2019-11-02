
// 作业一
var a=1;
var b=3;
console.log(a>b?b=a:b=a-2);



// 作业2
for(let i=0;i<=100;i++){
    if (i%3==0){
        console.log(i);
    }
     } 



// 作业三
var a=3,b=4,c;
c=a,a=b;
console.log(a);
b=c;
console.log(b);


// 作业四
function sumOfSquares(a,b){
return a*a+b*b;
}
let res= sumOfSquares(11,22);
console.log(res);


// 作业五
const num=[['a',0],['b',3],['c',6],['d',9]],
list=[];
list.push(['b',3],['c',6],['d',9]);
console.log(list); 


// 作业六
// 能力有限 不太会做/(ㄒoㄒ)/~~
// function $(p){
//      return document.getElementsByName(p);
// }
// console.log(p);
// // function $(#myid){
//     return document.getElementById(myid)
// }
// function $(.myClass){
//     return document.getElementsByClass(myClass)
// }



// 作业七
var arr=[1,1,1,2,2,3,4,4,5,5,5];
function a(arr){
    var hash=[];
    for (var i = 0; i < arr.length; i++) {
       if(arr.indexOf(arr[i])==i){
        hash.push(arr[i]);
       }
      } console.log(hash)
  }
  a(arr)
  
//  作业八
  let arr=[5,3,8,1];
  function filterRange(i){ 
      return i>=1,i<=4;
  }
  let filtered=arr.filter(filterRange);
  alert(filtered);
  console.log(arr);
  


// 作业九
let john = { name: "John", surname: "Smith", id: 1 };
let pete = { name: "Pete", surname: "Hunt", id: 2 };
let mary = { name: "Mary", surname: "Key", id: 3 };
let users = [ john, pete, mary ];
function newarr(users) {
  let arr = [];
  for(var i=0;i<users.length;i++){
      let obj = {}     
      obj.fullname = users[i].name + " " + users[i].surname  
      obj.id = users[i].id         
      arr.push(obj)   
  return arr 
}
let usersMapped=JSON.stringify(newarr(users));  
alert(usersMapped)





