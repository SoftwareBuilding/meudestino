
window.onscroll = function() {
   const difference = document.documentElement.scrollHeight - window.innerHeight;
   const scrollposition = document.documentElement.scrollTop; 
   if (difference - scrollposition <= 2) {
       alert("Bottom of Page!"); 
   }   
}
     