//ClozeCard.js
//ClozeCard constructor
var ClozeCard = function(text, cloze) {
    this.text = text;
    this.cloze = cloze;
    this.partial = function(text, cloze) {
        var n =  text.indexOf(cloze);
        if (n >= 0) {
            return text.substr(0, n) + 
              " ... " + 
              text.substr(n + cloze.length, (text.length - (n + cloze.length)));
        } else {
            return "Cloze term '" + cloze + "' is not in Text '" + text + "'";
        }
    }
}

//export
module.exports = ClozeCard;