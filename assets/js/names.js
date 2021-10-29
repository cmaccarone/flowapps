var companyWebsite = "qevka.com";
var companyName = "Qevka Technologies";
var pageNames = {
   "page-1" : "Home",
   "page-2" : "Portfolio",
   "page-3" : "Development Process",
   "page-4" : "Contact",
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

document.getElementsByClassName("site-logo").text = "qevka.co";
 