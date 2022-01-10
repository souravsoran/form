function validation(){
    //  var text ='';
    var firstName = document.getElementById("firstname").value;
    var lastName = document.getElementById("lastname").value;
    var email = document.getElementById("email").value;
    var course = document.getElementById("course").value;
    var stream = document.getElementById("stream").value;
    
    var gender = (genderValue()) ? genderValue() : "Please Select Gender";

    text = `Hello ${firstName} ${lastName}your email id is ${email} your Gender
    is ${gender} you are enrolled the course name ${course} and Stream is ${stream}`;
    
    document.getElementById('msg').innerHTML = text;

 }

function genderValue(){
    var gender ='';
    if(document.getElementById('male').checked){
        gender = document.getElementById('male').value;
    }else if(document.getElementById('female').checked){
        gender = document.getElementById('female').value;
    }else if(document.getElementById('others').checked){
        gender = document.getElementById('others').value;
    }else{
        return false;
    }
    return gender;
}