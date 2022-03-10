$.get('names.txt', function(txt) {
    var lines = txt.responseText.split("\n");
    var randLineNum = Math.floor(Math.random() * lines.length);
    return lines[randLineNum]; // random line from the text file
    });

    function getRandomString(length) {
        var randomChars = '123456789';
        var result = '';
        for ( var i = 0; i < length; i++ ) {
            result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
        }
        return result;
    }