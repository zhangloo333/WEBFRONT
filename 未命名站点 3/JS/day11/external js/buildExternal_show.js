// JavaScript Document



function getId(id)
{
	return document.getElementById(id);
}
getId("show").addEventListener("click",showPwanduse)

function showPwanduse()
{
	document.write("usr name = "+ getId("usr").value+ "<br/>password "+ getId("password").value);
		
}