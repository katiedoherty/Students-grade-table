/*$.get('names.txt', function(txt) {
    var lines = txt.responseText.split("\n");
    var randLineNum = Math.floor(Math.random() * lines.length);
    return lines[randLineNum]; // random line from the text file
    });*/

  function studentid(){
        length=9;
        var randomChars = '123456789';
        var result = '';
        for ( var i = 0; i < length; i++ ) {
            result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
        }
        return result;
    }
       
    
    inputfield.onclick = function input() {
        document.getElementById('inputfield').innerHTML = '<input type="text" id="assignment1" name="assignment1">';
      }
    document.getElementById("studentid1").innerHTML=studentid();