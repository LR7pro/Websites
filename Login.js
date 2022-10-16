function auth() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('pass').value;
    var name = document.getElementById('name').value;

    if(email== "user101@gmail.com" && password=="hello123") {
        window.location.assign("Home Page.html");
        alert("Login Successful");
    }
    else{
        alert("Invalid Information");
        return;
    }
}