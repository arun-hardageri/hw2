let imageSwitch = function ()
{
  let theImage = jQuery(event.target)
  // Capture the source path of the thumbnail image that was clicked
  let srcValue = theImage.attr("src")
  // Switch the source path of the main image with the source path captured from the clicked thumbnail
  jQuery("#main-image").attr("src",srcValue)
}
jQuery ("#thumbnails").on("click",imageSwitch)
