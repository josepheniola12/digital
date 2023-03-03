function test() {
        var number=document.getElementById("number").value;
        var nm=localStorage.setItem("number",number);
        var nm=localStorage.getItem("number",number);

        var a;
        a=3;
        if (a==nm) { 
            alert("successful!");
           
        } else {
            alert("Wrong!");
        }
    }

function Popup(){
    document.getElementById("popup-1").classList.toggle("active");
}

function togglePopup(){
    document.getElementById("popup-2").classList.toggle("active");
}

function toggle(){
    document.getElementById("popup-3").classList.toggle("active");
}

function outdoor(){
    document.getElementById("popup-9").classList.toggle("active");
}

var count =(function () {
        var counter = 0;
        
        return function () {return counter +=1;}
        
    })();
    
    function displaycount(){
        
        document.getElementById("carrier").innerHTML = count();
        
  }
  
  function bat() {
        var password=document.getElementById("password").value;
        var pw=localStorage.setItem("password",password);
        var pw=localStorage.getItem("password",password);
        
        var a;
        a="1015ahref2HA";
        if (a==pw) {
            alert("Added successful!");
            } else {
                alert("Invalid details!");
        }
    }
    
  
