

// click genarator button get and set 
document.getElementById('generate-pin').addEventListener('click',  () =>{
    
    const pin = generatePinNumber();
    document.getElementById('display-pin').value = pin;

}) 

// mobile button set function 
document.getElementById('calculator').addEventListener('click',(event) => {
    
    const typedNumber = event.target.innerText;

    const typedNumberdisplayFild = document.getElementById('typed-numbers');
    const privauseTypedNumber = typedNumberdisplayFild.value;
    
    if(isNaN(typedNumber)){

        if(typedNumber == 'C'){
            typedNumberdisplayFild.value = "";
        }
        else if(typedNumber == "<"){
            console.log('< area deleted')
        }
        
        
    }
    else{
        const newTypedNumber = typedNumberdisplayFild.value = privauseTypedNumber + typedNumber;;
        console.log(newTypedNumber)
    }

    


})
