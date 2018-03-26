import 'jquery';
import 'bootstrap/dist/js/bootstrap';
function sayhello(){
    $("#hat1").hide();
    console.log("Hello");
    alert("hello");
}
window.sayhello = sayhello;