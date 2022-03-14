
//code for generating student number
  function studentid(){
        length=9;
        var randomChars = '123456789';
        var result = '';
        for ( var i = 0; i < length; i++ ) {
            result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
        }
        return result;
    }

    for (let i = 11; i < 20; i++) {
      document.getElementById(i).innerHTML=studentid();
    }
    

    //code for generating student name
    const firstNames = ["Hope", "Launa", "Katherine", "Walker", "Moses", "Tayna", "Rosia", "Yahaira", "Tommy", "Elwanda", "Clorinda", "Sheron", "Kayla", "Clementina", "Rene", "Rex", "Kathy", "Latoya", "Shirleen", "Shoshana"];

    const secondNames = ["Chauncey", "Houchins", "Lama", "Frasca", "Houston", "Ake", "Shankles", "Cantor", "Mizell", "Cleland", "Maltby", "Tirrell", "Cary", "Mace", "Horta", "Carlile", "Deegan", "Torrez", "Humfeld", "Helgeson"];

    const getRandomNumber = (max) => Math.floor(Math.random() * max);

    const getRandomName = () => 
  ` ${firstNames[getRandomNumber(firstNames.length)]} ${secondNames[getRandomNumber(secondNames.length)]}`;

  for (let i = 1; i < 10; i++) {
    document.getElementById(i).innerText = getRandomName();
  }
    
    



    //code for entering in the assignment grades and generating final avergae grade overall.

    //student1 variables
    var grades = parseInt(0);
    var gradeslength=parseInt(0);
    var addedgrades=0;
    var changedassignment=0;
    var changedlength=0;

    //student2 variables
    var grades2 = parseInt(0);
    var gradeslength2=parseInt(0);
    var addedgrades2=0;

    //student 3 variables
    var grades3 = parseInt(0);
    var gradeslength3=parseInt(0);
    var addedgrades3=0;

    //student 4 variables
    var grades4 = parseInt(0);
    var gradeslength4=parseInt(0);
    var addedgrades4=0;

    //student 5 variables
    var grades5 = parseInt(0);
    var gradeslength5=parseInt(0);
    var addedgrades5=0;
    
    //student 6 variables
    var grades6 = parseInt(0);
    var gradeslength6=parseInt(0);
    var addedgrades6=0;

    //student 7 variables 
    var grades7 = parseInt(0);
    var gradeslength7=parseInt(0);
    var addedgrades7=0;

    //student 8 variables
    var grades8 = parseInt(0);
    var gradeslength8=parseInt(0);
    var addedgrades8=0;

    //student 9 variables
    var grades9 = parseInt(0);
    var gradeslength9=parseInt(0);
    var addedgrades9=0;
    function entergrades(clickedid){
      var grade1 = prompt("Enter your grade for assignment");
      if(grade1<60){
        document.getElementById(clickedid).className = "below60";
        console.log(document.getElementById(clickedid).className);
      }
      if(document.getElementById(clickedid).innerText!="-"){
        changedassignment = parseInt(document.getElementById(clickedid).innerText);
        changedlength =parseInt(1);
      }
      else{
        changedassignment=parseInt(0);
        changedlength=parseInt(0);
      }

      document.getElementById(clickedid).innerText = grade1+"%";

      

      if(clickedid=="inputfield1"||clickedid=="inputfield2"||clickedid=="inputfield3"||clickedid=="inputfield4"||clickedid=="inputfield5"){
        gradeslength=gradeslength+parseInt(1)-changedlength;
        addedgrades=parseInt(addedgrades)+parseInt(grade1)-parseInt(changedassignment);
        grades = addedgrades/gradeslength;
        document.getElementById('finalgrade').innerText = Math.round(grades)+"%";
      }
      else if(clickedid=="inputfield6"||clickedid=="inputfield7"||clickedid=="inputfield8"||clickedid=="inputfield9"||clickedid=="inputfield10"){
        gradeslength2=gradeslength2+parseInt(1)-changedlength;
        addedgrades2=parseInt(addedgrades2)+parseInt(grade1)-parseInt(changedassignment);
        grades2 = addedgrades2/gradeslength2;
        document.getElementById('finalgrade2').innerText = Math.round(grades2)+"%";
      }
      else if(clickedid=="inputfield11"||clickedid=="inputfield12"||clickedid=="inputfield13"||clickedid=="inputfield14"||clickedid=="inputfield15"){
        gradeslength3=gradeslength3+parseInt(1)-changedlength;
        addedgrades3=parseInt(addedgrades3)+parseInt(grade1)-parseInt(changedassignment);
        grades3 = addedgrades3/gradeslength3;
        document.getElementById('finalgrade3').innerText = Math.round(grades3)+"%";
      }
      else if(clickedid=="inputfield16"||clickedid=="inputfield17"||clickedid=="inputfield18"||clickedid=="inputfield19"||clickedid=="inputfield20"){
        gradeslength4=gradeslength4+parseInt(1)-changedlength;
        addedgrades4=parseInt(addedgrades4)+parseInt(grade1)-parseInt(changedassignment);
        grades4 = addedgrades4/gradeslength4;
        document.getElementById('finalgrade4').innerText =Math.round(grades4)+"%";
      }
      else if(clickedid=="inputfield21"||clickedid=="inputfield22"||clickedid=="inputfield23"||clickedid=="inputfield24"||clickedid=="inputfield25"){
        gradeslength5=gradeslength5+parseInt(1)-changedlength;
        addedgrades5=parseInt(addedgrades5)+parseInt(grade1)-parseInt(changedassignment);
        grades5 = addedgrades5/gradeslength5;
        document.getElementById('finalgrade5').innerText = Math.round(grades5)+"%";
      }
      else if(clickedid=="inputfield26"||clickedid=="inputfield27"||clickedid=="inputfield28"||clickedid=="inputfield29"||clickedid=="inputfield30"){
        gradeslength6=gradeslength2+parseInt(1)-changedlength;
        addedgrades6=parseInt(addedgrades6)+parseInt(grade1)-parseInt(changedassignment);
        grades6 = addedgrades6/gradeslength6;
        document.getElementById('finalgrade6').innerText = Math.round(grades6)+"%";
      }else if(clickedid=="inputfield31"||clickedid=="inputfield32"||clickedid=="inputfield33"||clickedid=="inputfield34"||clickedid=="inputfield35"){
        gradeslength7=gradeslength7+parseInt(1)-changedlength;
        addedgrades7=parseInt(addedgrades7)+parseInt(grade1)-parseInt(changedassignment);
        grades7 = addedgrades7/gradeslength7;
        document.getElementById('finalgrade7').innerText = Math.round(grades7)+"%";
      }
      else if(clickedid=="inputfield36"||clickedid=="inputfield37"||clickedid=="inputfield38"||clickedid=="inputfield39"||clickedid=="inputfield40"){
        gradeslength8=gradeslength8+parseInt(1)-changedlength;
        addedgrades8=parseInt(addedgrades8)+parseInt(grade1)-parseInt(changedassignment);
        grades8 = addedgrades8/gradeslength8;
        document.getElementById('finalgrade8').innerText = Math.round(grades8)+"%";
      }
      else if(clickedid=="inputfield41"||clickedid=="inputfield42"||clickedid=="inputfield43"||clickedid=="inputfield44"||clickedid=="inputfield45"){
        gradeslength9=gradeslength9+parseInt(1)-changedlength;
        addedgrades9=parseInt(addedgrades9)+parseInt(grade1)-parseInt(changedassignment);
        grades9 = addedgrades9/gradeslength9;
        document.getElementById('finalgrade9').innerText = Math.round(grades9)+"%";
        
      }
  
     
      
    }

    
    
   
       
  
      
      
   
  