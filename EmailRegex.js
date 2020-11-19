// UC 1 Validate the first mandatory part
// UC 2 Ensure @ and validate second mandatory part
// UC 3 Validate third mandatory part i.e .co
// UC 4 Validate first optional part 
let emailRegex = RegExp("^[a-zA-Z0-9]{3,}([.+_-][0-9A-Za-z]+)*[@][0-9a-zA-Z]{1,}[.][a-zA-Z0-9]{2,3}([.][0-9a-zA-Z]{2}){0,1}$");
let correctEmail = [];
let invalidEmail = [];

function validateEmail(input)
{
    if(emailRegex.test(input))
    {
        correctEmail.push(input);
        console.log(input+ "---Email is in correct format");
        return true;
    }
    else
    {
        console.log(input+ "---Email has invalid format");
        invalidEmail.push(input);
    }
}

let sampleEmail = ["abc@yahoo.com","abc-100@yahoo.com","abc.100@yahoo.com","abc111@abc.com","abc-100@abc.net","abc.100@abc.com.au",
                                    "abc@1.com","abc@gmail.com.com","abc+100@gmail.com","Abc","abc@.com.my" ,
                                    "abc123@gmail.1a","abc123@.com","abc123@.com.com",".abc@abc.com",
                                    "abc()*@gmail.com","abc@%*.com","abc..2002@gmail.com",
                                    "abc.@gmail.com","abc@abc@gmail.com","abc@gmail.com.1a","abc@gmail.com.aa.au"];
for (const email of sampleEmail) 
{
    validateEmail(email);
}
console.log("showing correct email formats");
correctEmail.forEach(p => console.log(p));

console.log("\n\nshowing invalid email formats");
invalidEmail.forEach(p => console.log(p));
try
{
    const prompt = require('readline-sync');
    let input = prompt.question("Enter the email");
    if(!validateEmail(input))
    throw "Invalid email format"
}
catch(e)
{
    console.error(e);
}

