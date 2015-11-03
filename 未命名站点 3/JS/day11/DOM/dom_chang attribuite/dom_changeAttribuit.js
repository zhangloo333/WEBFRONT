/**
 * Created by lei on 2015/10/23.
 */

document.getElementById("btnShow").addEventListener("click",getAtrribute);
document.getElementById("btnColor").addEventListener("click",changColor);

function getAtrribute()
{

    var tvalue=document.getElementById("txt1").value;
    var tid=document.getElementById("txt1").id;
    var tname=document.getElementById("txt1").name;
    document.write("value is "+ tvalue+"<br/>"+"id is "+ tid+"<br/>" +"name is "+tname);

}

function changColor()
{
    document.getElementById("txt1").style.background = "red";
}