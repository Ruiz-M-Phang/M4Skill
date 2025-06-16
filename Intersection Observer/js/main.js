// Set things up


function createObserver() {
  let observer;

  let options = {
    root: document.querySelector("#scrollArea"),
    rootMargin: "0px",
    threshold: buildThresholdList(),
  };

  observer = new IntersectionObserver(function (entries, self) {
  entries.forEach(entry => {
      if (entry.isIntersecting) 
        { 
          preloadImage(entry.target)
          self.unobserve(entry.target)//observer passed as self
          console.log("Hello world")
        } else {
            console.log("fix code")
        }
  });
}, options);
images.forEach(image => { observer.observe(image); });
}

const images = document.querySelectorAll('img');
images.forEach(image => {
    observer.observe(image);
});