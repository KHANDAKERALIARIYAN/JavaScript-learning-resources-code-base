// 1.
// console.log("Ariyan is a Hacker");
// console.log("Ariyan is a Developer");

// setTimeout(() => {
//     console.log("Ariyan is a Web Developer");
// }, 2000);

// setTimeout(() => {
//     console.log("Ariyan is a Web Developer");
// }, 0);  it will run at last

// console.log("The End");

// 2.
// console.log("Ariyan is a Hacker");
// console.log("Ariyan is a Developer");

// setTimeout(() => {
//     console.log("Ariyan is a Web Developer");
// }, 2000);

// setTimeout(() => {
//     console.log("Ariyan is a Web Developer 2");
// }, 2000);  

// console.log("The End");

// setTimeout - is a function that takes a function as an argument and waits for a specified period of time before executing it.

// 3.
// const fn=() => {
//     console.log("Nothing");
// }

// const callback=(arg) => {
//     console.log(arg);
//     fn();
// }

// const loadScript=(src,callback) => {
//     let sc=document.createElement("script");
//     sc.src=src;
//     sc.onload=callback("Harry" ,fn);
//     document.head.append(sc);
// }

// loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js",callback);


// promises 

// alert('Hello World');
// console.log('Hello World');

// let prom1=new Promise((resolve,reject)=>{
//     let value=Math.random();

//     if(value>0.5){
//         reject("No random number was greater than 0.5");
//     }

//     else{
//         setTimeout(()=>{
//             console.log('yes i am done');
//             resolve('Ariyan');
//         },2000);
//     }
// })

// prom1.then((value)=>{
//     console.log(value);
// }).catch((err)=>{
//     console.log(err);
// });

// 2. other example

let prom1=new Promise((resolve,reject)=>{
    let value=Math.random();

    if(value>0.5){
        reject("No random number was greater than 0.5");
    }

    else{
        setTimeout(()=>{
            console.log('yes i am done');
            resolve('Ariyan');
        },1000);
    }
})

let prom2=new Promise((resolve,reject)=>{
    let value=Math.random();

    if(value>0.5){
        reject("No random number was greater than 0.5 2");
    }

    else{
        setTimeout(()=>{
            console.log('yes i am done 2');
            resolve('Ariyan 2');
        },1000);
    }
})

// let p3=Promise.all([prom1,prom2]);

// p3.then((value)=>{
//     console.log(value);
// }).catch((err)=>{
//     console.log(err);
// });

// let p3=Promise.allSettled([prom1,prom2]);

// p3.then((value)=>{
//     console.log(value);
// }).catch((err)=>{
//     console.log(err);
// });

let p3=Promise.race([prom1,prom2]);

p3.then((value)=>{
    console.log(value);
}).catch((err)=>{
    console.log(err);
});
