function myFunction() {
    alert("Alertt");
    }

    function myalert() {
        alert("This is the Alert Message!");
        }

    function multiply()
{
        num1 = document.getElementById("n1").value;
        num2 = document.getElementById("n2").value;
        document.getElementById("result2").innerHTML = num1 * num2;
}

function divide() 
{ 
        num1 = document.getElementById("n1").value;
        num2 = document.getElementById("n2").value;
document.getElementById("result3").innerHTML = num1 / num2;
}

function add() 
{ 
        num1 = document.getElementById("n1").value;
        num2 = document.getElementById("n2").value;
document.getElementById("result").innerHTML = num1 + num2;
}


function subtract() 
{ 
        num1 = document.getElementById("n1").value;
        num2 = document.getElementById("n2").value;
document.getElementById("result1").innerHTML = num1 - num2;
}

function maxi()
{
        num1 = document.getElementById("a").value;
        num2 = document.getElementById("b").value;
        num3 = document.getElementById("c").value;
        num4 = document.getElementById("d").value;
        num5 = document.getElementById("e").value;

        document.getElementById("maxi").innerHTML = Math.max(num1,num2,num3,num4,num5);
}

function mini()
{
        num1 = document.getElementById("a").value;
        num2 = document.getElementById("b").value;
        num3 = document.getElementById("c").value;
        num4 = document.getElementById("d").value;
        num5 = document.getElementById("e").value;

        document.getElementById("mini").innerHTML = Math.min(num1,num2,num3,num4,num5);
}


function randi()
{
        num1 = document.getElementById("a").value;
        num2 = document.getElementById("b").value;
        num3 = document.getElementById("c").value;
        num4 = document.getElementById("d").value;
        num5 = document.getElementById("e").value;

        document.getElementById("randi").innerHTML = Math.random(num1,num2,num3,num4,num5);
}


let result = text.bold();
document.getElementById("1").innerHTML = result;