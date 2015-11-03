/**
 * Created by lei on 2015/10/23.
 */
var p,q;
function showContent()
{
    p = document.getElementById("txt").value;
    document.getElementById("result").innerHTML= p;
}

function showChange()
{
    q=document.getElementById("result");
    q.innerHTML=document.getElementById("txt2").value;
}