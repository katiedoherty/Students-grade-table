
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
    var grades = parseInt(0);
    var gradeslength=parseInt(0);
    var addedgrades=0;
    var changedassignment=0;
    var changedlength=0;
    function entergrades(clickedid){
      var grade1 = prompt("Enter your grade for assignment");
      if(document.getElementById(clickedid).innerText!="-"){
        changedassignment = parseInt(document.getElementById(clickedid).innerText);
        changedlength =parseInt(1);
      }
      else{
        changedassignment=parseInt(0);
        changedlength=parseInt(0);
      }
      document.getElementById(clickedid).innerText = grade1+"%";
      gradeslength=gradeslength+parseInt(1)-changedlength;
      addedgrades=parseInt(addedgrades)+parseInt(grade1)-parseInt(changedassignment);
      grades = addedgrades/gradeslength;
      document.getElementById('finalgrade').innerText = grades+"%";
    }
    
   
       
  
      
      
   
  