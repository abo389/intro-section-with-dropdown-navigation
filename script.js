var slide = document.querySelectorAll( ".slide" );
slide.forEach(e => {
  e.addEventListener( "click", () =>
  {
    e.children[ 2 ].classList.toggle( "active" )
    checkActive(e)
  })
} );
function checkActive (e)
{
  var classes = e.children[ 2 ].classList;
  for ( c of classes)
  {
    if ( c === "active" )
    {
      e.children[ 1 ].src = "images/icon-arrow-up.svg";
    }
    else
    {
      e.children[ 1 ].src = "images/icon-arrow-down.svg";
    }
  }
}

var papa = document.querySelector( ".nav__papa" );
var open = document.querySelector( ".nav__open" );
var close = document.querySelector( ".nav__close" );
var overlay = document.querySelector( ".nav__overlay" );
overlay.addEventListener( "click", () =>
{
  papa.classList.remove( "active" )
  overlay.style.display = "none";

})
open.addEventListener( "click", () =>
{
  papa.classList.add( "active" )
  overlay.style.display = "block";
} );
close.addEventListener( "click", () =>
{
  papa.classList.remove( "active" )
  overlay.style.display = "none";
})
