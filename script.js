function valid() {
    var usrname = document.myForm.uname.value;
    var pass = document.myForm.password.value;
    var pass_con = document.myForm.passwordcon.value;
    var firstName = document.myForm.fname.value;
    var lastName = document.myForm.lname.value;
    var mail = document.myForm.email.value;
    
    
    //For username
    if (usrname === null || usrname=== "")
        {
            document.getElementById("nareq").innerHTML="Username is reuired";
            document.myForm.uname.focus();
            document.myForm.uname.style.borderColor="red";
            
        }
    
    else if(usrname!==null)
    {
       document.myForm.uname.style.borderColor="green"; 
    }
    
    //for password
    if (pass === null || pass=== "")
        {
            document.getElementById("pasreq").innerHTML="Password is reuired.";
            document.myForm.password.focus();
            document.myForm.password.style.borderColor="red";
            
        }
    
    else if ((pass !== null || pass!=="") && pass.length<6)
        {
            alert("The password must be at leats 6 character");
            document.myForm.password.focus();
            document.myForm.password.style.borderColor="red";
        }
    
    else
    {
       document.myForm.password.style.borderColor="green"; 
    }
    
    
    //For password confirmation
    if (pass_con === null || pass_con=== "")
        {
            document.getElementById("pasconreq").innerHTML="Please re-enter the password";
            document.myForm.passwordcon.focus();
            document.myForm.passwordcon.style.borderColor="red";
            
            
        }
    
     else if (pass!==pass_con)
        {
            alert("The password is incorrect! Please Re-enter");
            document.myForm.passwordcon.focus();
            document.myForm.passwordcon.style.borderColor="red";
        }
    else
    {
       document.myForm.passwordcon.style.borderColor="green"; 
    }
    

    //For first name
    if (firstName === null || firstName==="")
        {
            document.getElementById("freq").innerHTML="First name is required.";
            document.myForm.fname.focus();
            document.myForm.fname.style.borderColor="red";
        }
    
    else
    {
       document.myForm.fname.style.borderColor="green"; 
    }
    
    
    //For last name
    if(lastName === null || lastName==="")
        {
            document.getElementById("lreq").innerHTML="Last name is required";
            document.myForm.lname.focus();
            document.myForm.lname.style.borderColor="red";
        }
    
    else
    {
       document.myForm.lname.style.borderColor="green"; 
    }
    
    //For email
     if(mail === null || mail==="")
        {
            document.getElementById("mreq").innerHTML="Last name is required";
            document.myForm.email.focus();
            document.myForm.email.style.borderColor="red";
        }
    
    else
    {
       document.myForm.email.style.borderColor="green"; 
    }
}
