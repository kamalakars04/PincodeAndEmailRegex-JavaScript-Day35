// Write regular expression to validate pin of six digit
let pincodeRegex = RegExp("^[0-9]{6}$");
let pincode;

function validatePincode(input)
{
    if(pincodeRegex.test(input))
    {
        pincode = input;
        console.log("Pincode is in correct format");
        return true;
    }
    else
    throw "Invalid pincode";
}
try
{
    const prompt = require('readline-sync');
    let input = prompt.question("Enter the pincode");
    validatePincode(input);
}
catch(e)
{
    console.error(e);
}

