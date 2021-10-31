var companyWebsite = "qevka.com";
var companyName = "Qevka Technologies";
var aboutTitle = "About Qevka"
var aboutParagraph = "Qevka's goal is to help small businesses automate their processes so they can be more effective in the marketplace."

var pageNames = {
   "page-1" : "Home",
   "page-2" : "Development Process",
   "page-4" : "Past Projects",
   "page-5" : "Contact",

}
//Set up the titles of the screens in the navbar.
for (var key in pageNames) {
   value = document.getElementsByClassName(pageNames[key]);
   if (document.getElementsByClassName(key).length > 1)
   {
      Array.from(document.getElementsByClassName(key)).forEach(v=> v.text = pageNames[key]);
    //  document.getElementsByClassName(key).forEach(valu => valu.textContent = pageNames[key]);
   }
   else
   {
      document.getElementsByClassName(key).text = pageNames[key];
   }
 }

// screen title
document.title = "Qevka Technologies";
document.getElementsByClassName("compName")[0].innerText = companyWebsite;

//footer info
document.body.getElementsByClassName("aboutTitle")[0].innerText = aboutTitle
document.body.getElementsByClassName("aboutBody")[0].innerText = aboutParagraph;
// navbar title
