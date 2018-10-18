(function() {

  function createButton() {

    var button = document.createElement("button");

    button.classList.add("backToTop");
    button.textContent = "Do góry";
    document.body.appendChild(button);

    return button;

  }

  var button = createButton();

  function animate(){
    if (document.body.scrollTop > 0) {
      window.scrollBy(0,-5);
      setTimeout(animate, 10);
    }
  }

  button.addEventListener("click", function(e){

    e.stopPropagation;
    document.body.scrollTop = 0;

  },false);


  window.addEventListener("scroll", function(e){
    if(document.body.scrollTop>=100) {
      // button.classList.remove("hidden");
    } else {
      // button.classList.add("hidden");
    }
    // console.log(document.body.scrollTop);
  }, false);


})();
