document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll("a");
  const currentURL = window.location.href;

  links.forEach(link => {
    // Set active link by URL
    if (link.href === currentURL) {
      link.classList.add("active", "theme-clr");
    }

    // Hover in
    link.addEventListener("mouseenter", () => {
      link.classList.add("theme-clr");
    });

    // Hover out (keep color if active)
    link.addEventListener("mouseleave", () => {
      if (!link.classList.contains("active")) {
        link.classList.remove("theme-clr");
      }
    });

    //  (instant UI feedback)
    link.addEventListener("click", () => {
      links.forEach(l => {
        l.classList.remove("active", "theme-clr");
      });

      link.classList.add("active", "theme-clr");
    });
  });

  // var modal = document.getElementById('contactModal');

  // function getResponsiveWidth() {
  //   const width = window.innerWidth;

  //   if (width < 576) return '95%';   // phones
  //   if (width < 768) return '90%';   // small tablets
  //   if (width < 992) return '80%';   // tablets
  //   return '70%';                    // desktop
  // }

  // if (modal) {
  //   modal.addEventListener('shown.bs.modal', function () {
  //     var modalDialog = modal.querySelector('.modal-dialog');
  //     modalDialog.style.maxWidth = getResponsiveWidth();
  //   });

  //   modal.addEventListener('hidden.bs.modal', function () {
  //     var modalDialog = modal.querySelector('.modal-dialog');
  //     modalDialog.style.maxWidth = '5px';
  //   });

  //   //Update width if screen is resized while modal is open
  //   window.addEventListener('resize', function () {
  //     if (modal.classList.contains('show')) {
  //       modal.querySelector('.modal-dialog').style.maxWidth = getResponsiveWidth();
  //     }
  //   });
  // }

  

});


//terminal script
