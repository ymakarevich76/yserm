if (document.getElementById("scroll")) {
  const block = document.getElementById("scroll");

  const simpleBar = new SimpleBar(document.getElementById('scroll'), {
    autoHide: false,
    scrollbarMaxSize: 100,
  });

  const scrollLine = simpleBar.getContentElement().closest('.simplebar-wrapper').nextSibling.nextSibling.querySelector(".simplebar-scrollbar");


  function myFunction() {

    // block.querySelector(".working__line").style.height = simpleBar.scrollTop + "px";


    let transform = scrollLine.style.transform;
    let [tx, ty, tz] = transform.match(/-*\d+(?=px)/g);
    // console.log(tx, ty, tz);

    block.querySelector(".working__line").style.height = ty + "px";
  }


  simpleBar.getScrollElement().addEventListener('scroll', myFunction);
}
