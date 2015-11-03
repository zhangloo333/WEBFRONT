// JavaScript Document

function getId(id)
{
	return document.getElementById(id);
}

var a,b;
var a=parseInt(getId("num1").value);
var b =parseInt(getId("num2").value);

getId("result").addEventListener("click",answer1);



function add(a,b)
{
	var c = a+b;
	getId("answer").innerHTML +="<br/>" +"Addtion is "+c;

}

function substruction(a,b)
{
	var c = a-b;
	getId("answer").innerHTML +="<br/>" +"Substraction is "+c;

}

function Mutiplication(a,b)
{
	var c = a*b;
	getId("answer").innerHTML +="<br/>" +"Mutiplication is "+c;

}

var a =5;
var b = 6;
var c = a+b;
alert(c);
function Division(a,b)
{
	var c = a/b;
	getId("answer").innerHTML +="<br/>" +"Division is "+c;

}
var z = 20;
alert(z);
function answer1()
{
	a=parseInt(getId("num1").value);
	b =parseInt(getId("num2").value);

	add(a,b);
	substruction(a,b);
	Mutiplication(a,b);
	Division(a,b);
}
