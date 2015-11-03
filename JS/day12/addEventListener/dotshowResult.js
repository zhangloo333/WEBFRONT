/**
 * Created by lei on 2015/10/27.
 */
document.getElementById("btn").onclick = function(){
    var uName = document.getElementById("usrname").value;
    var pWord =document.getElementById("password").value;
    document.getElementById("output").innerHTML="usrname: "+uName+"<br/>"+
        "password: "+ pWord+"<br/>";

}