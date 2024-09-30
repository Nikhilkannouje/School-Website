
window.onload = function() {
   const popup = document.getElementById("newsletter-popup");
   const closeBtn = document.querySelector(".close");

   
   setTimeout(() => {
       popup.style.display = "block";
   }, 3000);

   
   closeBtn.onclick = function() {
       popup.style.display = "none";
   };
};

