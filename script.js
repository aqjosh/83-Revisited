// set the correct username and password combination below
let correctUsername = "ilovequeenstech";
let correctPassword = "class";


$("button").click(function() {
    let username = $(".username").val();
    let password = $(".password").val();
    

    // WRITE YOUR COMPOUND CONDITIONAL BELOW THIS LINE
 
    
if (username === "ilovequeenstech" && password === "class"){
    $(".message").text("Success");
        
    
    
    } else 
if(username === ""){
    $(".message").text("You must enter something");
} else 
if(password === ""){
    $(".message").text("You must enter something");
    
    
    
        
		} else 
if(username === "ilovequeenstech" && password !== "class"){
    $(".message").text("Wrong password");
         
              
        }else
if(username !== "ilovequeenstech" && password === "class"){
    $(".message").text("Wrong username");


    
    


    
    
}
});