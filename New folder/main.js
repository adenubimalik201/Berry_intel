var count = 2;

function validate ()
{
   var email = document.BRY.email.value;
   var pass = document.BRY.pass.value;
   var valid = false;
   var emailArray = ["yuki"]
   var passdArray = ["123"]
   for (var i = 0; i < emailArray.length; i++)

if (user == emailArray[i])
if (pass == passArray [i])
{
   valid = true;
   break;
}

if(valid)
{
   alert("Login was successful");
   window.location = "http://127.0.0.1:5500/home.html"
   return false ;
}
var again = "tries";
if (count ==1)
{
   again = "try"
}
if(count >= 1)
{
   alert("Wrong password or username")
   count--;
}
}