// IntersectionObserver
let observer = new IntersectionObserver(
    function (entries) {
      console.log(entries);
    }, {
      threshold: 0.5
    }
  );

observer.observe(document.getElementsByTagName("video")[0]);
observer.observe(document.getElementsByTagName("img")[1]);
observer.observe(document.getElementsByTagName("audio")[2]);