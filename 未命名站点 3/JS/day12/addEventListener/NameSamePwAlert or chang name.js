/**
 * Created by lei on 2015/10/27.
 */
/*if the password is same with user name alert succeful,
otherwise the change background color*/

document.getElementById("btn").onclick = function(){
    allowAcess();
}
function allowAcess()
{
    var uName = document.getElementById("usrname").value;
    var pWord =document.getElementById("password").value;
    if(uName == pWord)
    {
        alert("enter the website");
    }
    else
    {
        document.getElementById("usrname").style.backgroundColor="red";
        document.getElementById("password").style.backgroundColor="blue";
    }
}