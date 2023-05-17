//async await method

let data=async()=>{
    try{
        return (await fetch("SampleData.json")).json();
    }catch(err){
        console.log("Error in getting data:"+err)
    }
}
data().then((d)=>{
    console.log("data:",d)
});


//Promise

let prom=new Promise((resolve,reject)=>{
    let a=20;
    let b=10;
    if((a>b)){
        resolve ("True statement")
    }else{
        reject("False statement")
    }
}).then((data)=>{
    console.log(data)
}).catch((e)=>{
    console.log("Error:"+e)
})

//Promise all

let p1=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("P1 is called")
    },1000)
})
let p2=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("P2 is called")
    },2000)
})
let p3=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("P3 is called")
    },3000)
})

Promise.all([p1,p2,p3]).then((data)=>{
    for(var i in data){
        console.log(data[i])
    }
}).catch((e)=>{
    console.log("error:"+e)
}).finally((f)=>{
    console.log("finally")
})

//Promise.all: to print all of the resolve promises if there is an reject then it will return only the rejected promise

//Promise.race: to print the first resolved promise left the other resolved promise as it is.

//Promise.allSettled: to print the resolved promoise only even if there is a reject then it will not print anything



//call, apply and bind

let student1={
    name:"mark",
    age:25,
    fullDetail:function(){
        return this.name+" of "+this.age
    }
}
let teacher1={
    name:"henry",
    age:45,
}


console.log(student1.fullDetail());
console.log(student1.fullDetail.call(teacher1));

//new way to use call, apply and bind

let student={
    name:"peter",
    age:20,
}
let teacher={
    name:"bruce",
    age:40,
}
let show=function(city){
    return this.name+" of "+this.age+" from "+city
}

console.log(show.call(student,"michigan"));
console.log(show.call(teacher,"ontario"));

console.log(show.apply(student,["utah"]));
console.log(show.apply(teacher,["texas"]));

let bindStudent=show.bind(student,'california')
console.log(bindStudent())


//Deep & Shallow copy

let data1={
        name:"kevin"
}
let user=data1;
user.name="jackson"
console.log(data1)
console.log(user)

//destructuring 
let data2={
    name:"kevin"
}
let user1={...data2}
user1.name="jackson"
console.log(data2)
console.log(user1)

//object.assign
let data3={
    name:"kevin"
}
let user2=Object.assign({},data3)
user2.name="jackson"
console.log(data3)
console.log(user2)

//deep copy

let data4={
    name:"kevin",
    address:{
        city:"wellington",
        state:"NZ"
    }
}
let user3=JSON.parse(JSON.stringify(data4))
user3.address.city="auckland"
console.log(data4)
console.log(user3)

//lodash library

let data5={
    name:"kevin",
    address:{
        city:"wellington",
        state:"NZ"
    },
    show:function(){
        return "function is called"
    }
}
let user4=_.cloneDeep(data5)
user4.address.city="auckland"
console.log(data4)
console.log(user4)
