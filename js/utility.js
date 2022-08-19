



// generate Pin Number function 
function generatePinNumber(){
    const cratePinNumber = Math.round(Math.random()*10000);

    if(cratePinNumber > 1000){
        console.log(cratePinNumber);

        return cratePinNumber;
    }
    else{
        return generatePinNumber();
    };
};

