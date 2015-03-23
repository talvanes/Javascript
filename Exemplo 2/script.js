/*
 *  Gerador de strings
 */
function GetString(words,charNumber) {
    var ALPHA = new Array ('0','1','2','3','4','5','6','7','8','9',
                           'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',
                           'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z');
    
    // max number of words
    var numWords = Math.floor(words * Math.random() + 1);
    // max char number
    var charInAWord = Math.floor(charNumber * Math.random() + 1);
    // index in ALPHA set
    var index;
    
    //generate strings
    var string = "", word;
    for (var i = 0; i < numWords; i++)  // generating words
    {
        //generating one word
        word = "";
        for (var j = 0; j < charInAWord; j++) {
            //catching a letter in the array
            index = Math.floor(ALPHA.length * Math.random());
            //to append it in the word
            word += ALPHA[index];
        }
        string += word + '&nbsp;'
    }
    
    return string;
}

/*
 *  Eventos para index.html
 */

function changeTitle() {
    //muda o título
    document.getElementById("title").innerHTML = GetString(3,10);
}

function changeParagraph() {
    //muda o parágrafo
    var demo1 = document.getElementById("demo1");
    if (demo1.innerHTML=="") {
        demo1.style.display = "block";
    }
    demo1.innerHTML += '<p>' + GetString(8,16) + '<//p>';
}

function fixMe() {
    //fix me, please!
    document.getElementById("fix-me").innerHTML = GetString(1,140);
}