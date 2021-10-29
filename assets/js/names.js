var companyWebsite = "qevka.com";
var companyName = "Qevka Technologies";
var pageNames = {
   "page-1" : "Home",
   "page-2" : "Portfolio",
   "page-3" : "Development Process",
   "page-4" : "Blog",
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
 