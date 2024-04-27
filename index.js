// function add(a,b,c,result) {
//     console.log("The values are"+a+" "+b);
//     result(a+b*c);
// }
// function result(value) {
// console.log(value);
// }

// add(10,2,5,result)

// let arr=[12,2,3,4,5];

// function forechNew(arr,display){
// for(let i=0;i<arr.length;i++){
//    display(arr[i]);
// }
// }

// forechNew(arr,(e)=>{
//     console.log("values are",+e);
// })

// setTimeout(()=>{
//     element.innerHTML = "";
//     element.innerHTML = "9";
//     setTimeout(()=>{
//         element.innerHTML = "";
//         element.innerHTML = "8";
//     setTimeout(()=>{
//         element.innerHTML = "";
//         element.innerHTML = "7";
        
//         },1000)
//     },1000)
// },1000)

let element = document.createElement("h1");
element.setAttribute("id","alignment");

element.innerText = "10";
document.body.appendChild(element);


setTimeout(()=>{
   
    element.innerHTML = "9";
    setTimeout(()=>{
        
        element.innerHTML = "8";
        setTimeout(()=>{
            
            element.innerHTML = "7";
            setTimeout(()=>{
                
                element.innerHTML = "6";
                setTimeout(()=>{
                    
                    element.innerHTML = "5";
                    setTimeout(()=>{
                        
                        element.innerHTML = "4";
                        setTimeout(()=>{
                            
                            element.innerHTML = "3";
                            setTimeout(()=>{
                                
                                element.innerHTML = "2";
                                setTimeout(()=>{
                                    
                                    element.innerHTML = "1";
                                    setTimeout(()=>{
                            
                                        element.innerHTML = "Happy Independence Day";


                    
                                    },1000);
                                 },1000);
       
                             },1000);
            
                        },1000);
                
                    },1000);
                    
                 },1000);
                        
             },1000);
                            
        },1000);
                               
                                   
    },1000);
},1000);
