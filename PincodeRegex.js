// UC 1 Write regular expression to validate pin of six digit
// UC 2 Dont allow any character at the beginning 
// UC 3 Dont allow any character at the end
// UC 4 Allow space after 3 digits along with the previous one
let pincodeRegex = RegExp("^[0-9]{3}[ ]{0,1}[0-9]{3}$");
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

