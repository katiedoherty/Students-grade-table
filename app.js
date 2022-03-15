
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


    var unsubmittedcount=45;
    function entergrades(clickedid){
      var grade1 = parseInt(prompt("Enter your grade for assignment"));
      if(isNaN(grade1)){
        grade1="N/A";
      }

      
      if(grade1=="N/A"){
        document.getElementById(clickedid).innerText = "-";
      }
      else{

      if(grade1<60){
        document.getElementById(clickedid).className += " below60";
        
        
      }
      else{
        document.getElementById(clickedid).className += " above60";
        
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

      var classname1=document.getElementById(clickedid).className;
      

      if(classname1=="assignmentunsubmitted student1 below60"||classname1=="assignmentunsubmitted student1 above60"){
        gradeslength=gradeslength+parseInt(1)-changedlength;
        addedgrades=parseInt(addedgrades)+parseInt(grade1)-parseInt(changedassignment);
        grades = addedgrades/gradeslength;
        
        
        document.getElementById('finalgrade').innerText = Math.round(grades)+"%";
        unsubmittedcount=unsubmittedcount-1;
        document.getElementById("unsubmittedcount").innerText = "Number of unsubmitted Assignments: "+unsubmittedcount
      }
      else if(classname1=="assignmentunsubmitted student2 below60"||classname1=="assignmentunsubmitted student2 above60"){
        gradeslength2=gradeslength2+parseInt(1)-changedlength;
        addedgrades2=parseInt(addedgrades2)+parseInt(grade1)-parseInt(changedassignment);
        grades2 = addedgrades2/gradeslength2;
        document.getElementById('finalgrade2').innerText = Math.round(grades2)+"%";
        unsubmittedcount=unsubmittedcount-1;
        document.getElementById("unsubmittedcount").innerText = "Number of unsubmitted Assignments: "+unsubmittedcount
      }
      else if(classname1=="assignmentunsubmitted student3 below60"||classname1=="assignmentunsubmitted student3 above60"){
        gradeslength3=gradeslength3+parseInt(1)-changedlength;
        addedgrades3=parseInt(addedgrades3)+parseInt(grade1)-parseInt(changedassignment);
        grades3 = addedgrades3/gradeslength3;
        document.getElementById('finalgrade3').innerText = Math.round(grades3)+"%";
        unsubmittedcount=unsubmittedcount-1;
        document.getElementById("unsubmittedcount").innerText = "Number of unsubmitted Assignments: "+unsubmittedcount
      }
      else if(classname1=="assignmentunsubmitted student4 below60"||classname1=="assignmentunsubmitted student4 above60"){
        gradeslength4=gradeslength4+parseInt(1)-changedlength;
        addedgrades4=parseInt(addedgrades4)+parseInt(grade1)-parseInt(changedassignment);
        grades4 = addedgrades4/gradeslength4;
        document.getElementById('finalgrade4').innerText =Math.round(grades4)+"%";
        unsubmittedcount=unsubmittedcount-1;
        document.getElementById("unsubmittedcount").innerText = "Number of unsubmitted Assignments: "+unsubmittedcount
      }
      else if(classname1=="assignmentunsubmitted student5 below60"||classname1=="assignmentunsubmitted student5 above60"){
        gradeslength5=gradeslength5+parseInt(1)-changedlength;
        addedgrades5=parseInt(addedgrades5)+parseInt(grade1)-parseInt(changedassignment);
        grades5 = addedgrades5/gradeslength5;
        document.getElementById('finalgrade5').innerText = Math.round(grades5)+"%";
        unsubmittedcount=unsubmittedcount-1;
        document.getElementById("unsubmittedcount").innerText = "Number of unsubmitted Assignments: "+unsubmittedcount
      }
      else if(classname1=="assignmentunsubmitted student6 below60"||classname1=="assignmentunsubmitted student6 above60"){
        gradeslength6=gradeslength2+parseInt(1)-changedlength;
        addedgrades6=parseInt(addedgrades6)+parseInt(grade1)-parseInt(changedassignment);
        grades6 = addedgrades6/gradeslength6;
        document.getElementById('finalgrade6').innerText = Math.round(grades6)+"%";
        unsubmittedcount=unsubmittedcount-1;
        document.getElementById("unsubmittedcount").innerText = "Number of unsubmitted Assignments"+unsubmittedcount
      }else if(classname1=="assignmentunsubmitted student7 below60"||classname1=="assignmentunsubmitted student7 above60"){
        gradeslength7=gradeslength7+parseInt(1)-changedlength;
        addedgrades7=parseInt(addedgrades7)+parseInt(grade1)-parseInt(changedassignment);
        grades7 = addedgrades7/gradeslength7;
        document.getElementById('finalgrade7').innerText = Math.round(grades7)+"%";
        unsubmittedcount=unsubmittedcount-1;
        document.getElementById("unsubmittedcount").innerText = "Number of unsubmitted Assignments: "+unsubmittedcount
      }
      else if(classname1=="assignmentunsubmitted student8 below60"||classname1=="assignmentunsubmitted student8 above60"){
        gradeslength8=gradeslength8+parseInt(1)-changedlength;
        addedgrades8=parseInt(addedgrades8)+parseInt(grade1)-parseInt(changedassignment);
        grades8 = addedgrades8/gradeslength8;
        document.getElementById('finalgrade8').innerText = Math.round(grades8)+"%";
        unsubmittedcount=unsubmittedcount-1;
        document.getElementById("unsubmittedcount").innerText = "Number of unsubmitted Assignments"+unsubmittedcount
      }
      else if(classname1=="assignmentunsubmitted student9 below60"||classname1=="assignmentunsubmitted student9 above60"){
        gradeslength9=gradeslength9+parseInt(1)-changedlength;
        addedgrades9=parseInt(addedgrades9)+parseInt(grade1)-parseInt(changedassignment);
        grades9 = addedgrades9/gradeslength9;
        document.getElementById('finalgrade9').innerText = Math.round(grades9)+"%";
        unsubmittedcount=unsubmittedcount-1;
        document.getElementById("unsubmittedcount").innerText = "Number of unsubmitted Assignments: "+unsubmittedcount
        
      }

     
      
      count=count-1;
      var insertedgradeslength=0;
      console.log(classname1);
      //for(let i =2; i<rowslength()-1; i++){
        if(classname1=="assignmentunsubmitted student"+count+" below60"||classname1=="assignmentunsubmitted student"+count+" above60"){
          
        }
      //}

  
    }
      
    }

    //the unsubmitted count
    if(unsubmittedcount==45){
    document.getElementById("unsubmittedcount").innerText = "Number of unsubmitted Assignments: "+unsubmittedcount;}

    //function to count columns
    function columnslength(){
      var nodes = document.getElementsByTagName("tr");
      return nodes.length;
    }

    function rowslength(){
      var nodes = document.getElementById("row4");
      var rowlength=nodes.getElementsByTagName("td")
      return rowlength.length;
    }
    
    var j=1;

    //countclicks
    function countclicks(){
      count++
    }
    var count=0;
    //function to add a row
    function addrow(){
      var table = document.getElementById("table");
      var row = table.insertRow(columnslength());
      var name = row.insertCell(0);
      name.setAttribute("id", "studentname"+count);
      name.setAttribute("onClick", "addstudentsname(this.id)")
     var studentid= row.insertCell(1);
     studentid.setAttribute("id", "studentid"+count);
     studentid.setAttribute("onClick", "addstudentsid(this.id)")
      var rowlength=rowslength();
      var columnidrow="";
      var classidrow="";
      var targetcell="";
      

      for(let i =2; i<rowlength-1; i++){
        targetcell=row.insertCell(i);
        columnidrow="newgrades"+i+count;
        classidrow="assignmentunsubmitted student"+count;
        targetcell.setAttribute("id", columnidrow);
        targetcell.setAttribute("class", classidrow);
        targetcell.setAttribute("onClick", "entergrades(this.id)");
        targetcell.innerHTML = "-";
        
      }

      

     var newfinalgrade= row.insertCell(rowlength-1);
      newfinalgrade.innerHTML="-";
      newfinalgrade.setAttribute("id", "newstudentgrade"+count);
      
      
    }


    //function to add names and student id to new rows

    function addstudentsname(clickedid){
     var name = prompt("Enter Student Name");
     document.getElementById(clickedid).innerText = name;
    }

    function addstudentsid(clickedid){
      var studentid = prompt("Enter Student Name");
      document.getElementById(clickedid).innerText = studentid;
     }
    var num =6;
    var index=7
    var columnid="columndid";
    var classid="";
    var targetedcell="";
    //function to add column
    function addcolumn(){
      row= document.getElementsByTagName("tr");
      
      row[0].insertCell(index).innerHTML="Assignment "+num;
      for(let i =1; i<row.length; i++){
        targetedcell = row[i].insertCell(index);
        columnid="columnid"+i;
        classid="assignmentunsubmitted student"+i;
        targetedcell.setAttribute("id", columnid);
        targetedcell.setAttribute("class", classid);
        targetedcell.setAttribute("onClick", "entergrades(this.id)");
        targetedcell.innerHTML = "-";
        //console.log(document.getElementById(columnid));
      }
      
     num=num+1;
     index=index+1;
    }

    
  

    
    
   
       
  
      
      
   
  