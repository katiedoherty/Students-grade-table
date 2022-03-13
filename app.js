
  function studentid(){
        length=9;
        var randomChars = '123456789';
        var result = '';
        for ( var i = 0; i < length; i++ ) {
            result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
        }
        return result;
    }
    document.getElementById("studentid1").innerHTML=studentid();
    var grades = 0;
   
    
    function entergrades(clickedid){
      var grade1 = prompt("Enter your grade for assignment");
      document.getElementById(clickedid).innerText = grade1+"%";
      grades=grades+grade1;
     
    }
       
  
      
      document.getElementById('finalgrade').innerText = grades+"%";
   
  