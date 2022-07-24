let username = document.getElementById('username').value;
console.log(username);

let password = document.getElementById('password').value;
console.log(password);

if (username == "admin" && password == "admin") {
  console.log("login succesfull")
}


function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
    document.body.style.backgroundColor = "white";
  }
  