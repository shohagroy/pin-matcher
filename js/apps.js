

// click genarator button get and set 
document.getElementById('generate-pin').addEventListener('click',  () =>{
    
    const pin = generatePinNumber();
    document.getElementById('display-pin').value = pin;

}) 

// mobile button set function 
document.getElementById('calculator').addEventListener('click',() => {
    console.log('hello')

})
