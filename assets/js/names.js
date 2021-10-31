var companyWebsite = "qevka.com";
var companyName = "Qevka Technologies";
var aboutTitle = "About Qevka"
var aboutParagraph = "Qevka's goal is to help small businesses automate their processes so they can be more effective in the marketplace."
document.title = "Qevka Technologies";
var pageNames = {
   "page-1" : "Home",
   "page-2" : "Development Process",
   "page-4" : "Past Projects",
   "page-5" : "Contact",

}
//setupNames of screens.
for (var key in pageNames) {
   console.log(pageNames[key]);
   value = document.getElementsByClassName(pageNames[key]);
   console.log(Object.keys(pageNames).length);
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
document.querySelector("#sticky-wrapper > header > div > div > div.col-6.col-lg-2 > h1 > a").text = companyWebsite;
document.querySelector("body > footer > div > div:nth-child(1) > div.col-md-4.mb-4.mb-md-0 > h3").textContent = aboutTitle;
document.querySelector("body > footer > div > div:nth-child(1) > div.col-md-4.mb-4.mb-md-0 > p:nth-child(2)").textContent = aboutParagraph;