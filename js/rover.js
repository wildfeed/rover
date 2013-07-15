var site_url = Drupal.settings.site_url;
var mobile_url = Drupal.settings.mobile_url;
var destination_mobile = Drupal.settings.destination_is_mobile;
var ref = document.referrer.replace(/\/$/, '');
var urls = new Array(site_url, mobile_url);
var n = ref.match(urls[0]);
var m = ref.match(urls[1]);

if (screen.width <= 720) {

  if (ref=='') {
    if ((m!==null) || (n!==null)) {
      // If referrer contains either the default or mobile path, do not redirect
      stop;
    }

    // If there is no referrer, redirect
    window.location = mobile_url;
  }
  else {
    // If the referrer did not originate from within the site, redirect
    //window.location = mobile_url;
  }
}
else {
  if (destination_mobile == 1) {
    document.referrer = '';
    window.location = site_url;
  }

}









