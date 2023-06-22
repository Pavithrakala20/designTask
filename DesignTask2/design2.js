window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 50 ||
      document.documentElement.scrollTop > 50
    ) {
      document.getElementsByClassName("truns").style.fontSize = "30px";
    } else {
      document.getElementsByClassName("truns").style.fontSize = "90px";
    }
  }