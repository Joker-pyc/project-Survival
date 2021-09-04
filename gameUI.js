	

   function getFullscreenElement() {

      return document.fullscreenElement   //standard property
      || document.webkitFullscreenElement //safari/opera support
      || document.mozFullscreenElement    //firefox support
      || document.msFullscreenElement;    //ie/edge support
   }
 
   function toggleFullscreen() {
      if(getFullscreenElement()) {
         document.exitFullscreen();
      }else {
    document.documentElement.requestFullscreen().catch(console.log);
      }
   }
   document.addEventListener('dblclick', () => {
      toggleFullscreen()
      screen.orientation.lock("landscape")
   });
   
   
  
  
     
     