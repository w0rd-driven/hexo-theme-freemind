/**
 * Created by jbrayton on 3/20/16.
 */
var domLinks = document.getElementsByTagName('link'); // Get all the <link>'s
// Will most likely find stylesheets but will find any with rels eg rel="canonical/author/external..."
// Unfortunately we can't just traverse the <head> as the Gist stylesheet is embedding with the Gist in your pages <body>

var gistLinks = [];

for (var i = 0, l = domLinks.length; i < l; i++)  {//loop 'em
    var el = domLinks[i]; //current link
    // If 'gist' is in the href -
    if (el.href.indexOf('gist') > -1) {
        gistLinks.push(el);
    }
}

// Going through the array, removing the linked stylesheets
gistLinks.forEach(function (gistLink) {
    gistLink.parentNode.removeChild(gistLink); // Remove the embedded stylesheet and style away!
});