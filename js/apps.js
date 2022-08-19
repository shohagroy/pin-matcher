

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

            const typedNumberArray = privauseTypedNumber.split('');
            typedNumberArray.pop();

            const reaminNumber = typedNumberArray.join('');
            typedNumberdisplayFild.value = reaminNumber
        }
    }
    else{
        const newTypedNumber = typedNumberdisplayFild.value = privauseTypedNumber + typedNumber;;
        console.log(newTypedNumber)
    }
})

// submit button clicket function 
document.getElementById('verify-pin').addEventListener('click', ()=>{
    const genaratPinNumberFild = document.getElementById('display-pin');
    const genaratPinNumber = genaratPinNumberFild.value;
    
    const typedPinNumberFild = document.getElementById('typed-numbers')
    const typedPinNumber = typedPinNumberFild.value;

    if(genaratPinNumber === "" || typedPinNumber === ""){
        alert("Please use OTP and Varify this.!")
    }
    else{
        console.log("other area")
        if(genaratPinNumber === typedPinNumber ){
            document.getElementById('pin-success').style.display = "block";
            document.getElementById('pin-failure').style.display = "none";
        }
        else{
            document.getElementById('pin-success').style.display = "none";
            document.getElementById('pin-failure').style.display = "block";
        }
    }
    

    genaratPinNumberFild.value = "";
    typedPinNumberFild.value = "";

    

})