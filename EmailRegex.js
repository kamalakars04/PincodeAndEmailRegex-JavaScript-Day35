// UC 1 Validate the first mandatory part
// UC 2 Ensure @ and validate second mandatory part
// UC 3 Validate third mandatory part i.e .co
let emailRegex = RegExp("^[a-zA-Z]{3,}[@][0-9a-zA-Z]{1,}[.][a-zA-Z0-9]{2,3}");
let emial;

function validateEmail(input)
{
    if(emailRegex.test(input))
    {
        email = input;
        console.log(input+ "---Email is in correct format");
        return true;
    }
    else
    throw "Invalid email";
}
try
{
    const prompt = require('readline-sync');
    let input = prompt.question("Enter the email");
    validateEmail(input);
}
catch(e)
{
    console.error(e);
}