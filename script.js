/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  //Write your code here , just console.log
  arr.map((employee)=>{
   if( employee.profession=="developer"){
    console.log(employee);
   }
   
  })
}

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
  arr.forEach((employee)=>{
    if( employee.profession=="developer"){
     console.log(employee);
    }
    
   })
 }
 
function addData() {
  //Write your code here, just console.log
  let employee=[];
  employee.unshift({id:4,name:"aman",age:"20",profession: "developer"});
  console.log(employee);
  }
function removeAdmin() {
  //Write your code here, just console.log
//  let i=0;
let employee=admin;
 if(employee=="admin"){
console.log("Aman")
 }
 
}


function concatenateArray() {
  //Write your code here, just console.log 
   let aman = [
    { id: 5, name: "rohan", age: "18",profession: "admin" },
    { id: 6, name: "mohan", age: "24",profession: "developer"},
    { id: 7, name: "kishan", age: "22",profession: "admin"},
  ];
  let ayushsir=arr.concat(aman);
  console.log(ayushsir);
  
}

