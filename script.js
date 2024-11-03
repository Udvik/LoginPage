document.getElementById("submit").addEventListener('click' , function(){
const username = document.getElementById('username').value;
const password = document.getElementById('password').value;

if(username == 'ADMIN' && password == '12345'){
    alert('Login Successful');
}else{
    alert('Invalid Credentials');
}
});