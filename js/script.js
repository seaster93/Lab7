function init(){
//add your javascrip between these two lines of code
 document.getElementById("entrybutton").addEventListener("click", output);
 
 document.getElementById("entrybutton").addEventListener("click", Alert);
  } 
    function Alert(){
        alert("Sydney Easter: " + document.getElementById("entryinput").value);
    }
    function output(){
        document.getElementById("textoutput").innerHTML = document.getElementById("entryinput").value;
    }


window.addEventListener('load', init);
