var testimonials = ``;

function p(value)
{
   console.log(value);
}

function returnStars(numberOfStars, totalstars)
{
   var stars = ``;
   var currentIteration = 1;
   while (currentIteration <= numberOfStars)
   {
      p(currentIteration);
      currentIteration += 1;
      stars += `<span class="icofont-star"></span>`;
   }
   while (currentIteration <= totalstars)
   {
      p(currentIteration);
      currentIteration += 1;
      stars += `<span class="icofont-star muted"></span>`
   }
   return stars;
}

function createTestimonial(numberOfStars, title, text, userImage, name, userTitle)
{
   var div = 
   `<div class="review text-center">
   <p class="stars">
   ${returnStars(numberOfStars, 5)}
   </p>
   <h3>${title}</h3>
   <blockquote>
   <p>${text}</p>
   </blockquote>
   <p class="review-user">
   <img src="${userImage}" alt="Image" class="img-fluid rounded-circle mb-3">
   <span class="d-block">
      <span class="text-black">${name}</span>, &mdash; ${userTitle != null ? userTitle : 'App User'}
   </span>
   </p>
</div>`
   return div;
   
}

var testimonial1 =
createTestimonial
(
   5, 
   "This app changed my business!",
   "We had been using a system that wasnt scalable for our manufacturing opperations. This app made it so I could focus on growing my business instead of constant paperwork.",
   "assets/img/img_3.jpg",
   "Daniel Maccarone",
   "Owner sportaircraftseats.com"
);

var testimonial2 =
createTestimonial(
   4,
   "Excellent App!",
   "We had been looking for someone with the expertise to finish our project for a while and we are so glad we worked with this team. I highly recommend them. They solved our problems in elegant ways and fixed problems we didnt even know we had!",
   "assets/img/img_3.jpg",
   "jabber",
   "App User"
);

function createElementFromHTML(htmlString) {
   var div = document.createElement('div');
   div.innerHTML = htmlString.trim();
 
   // Change this to div.childNodes to support multiple top-level nodes
   return div.firstChild; 
 }


// add user testimonials to teh view.
var doc = document.body.getElementsByClassName("userReviews")[0];
doc.replaceChildren(createElementFromHTML(testimonial1));
doc.appendChild(createElementFromHTML(testimonial2));
