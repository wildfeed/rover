var site_url = Drupal.settings.site_url;
console.log(site_url);
var mobile_url = Drupal.settings.mobile_url;
console.log(mobile_url);

if (window.outerWidth < 720) {
  var ref = document.referrer.replace(/\/$/, '');
  console.log(ref);

  var urls = new Array(site_url, mobile_url);

  var n = ref.match(urls[0]);
  var m = ref.match(urls[1]);
  console.log(n);
  console.log(m);

  if ((m!==null) || (n!==null)) {
    // If referrer contains either the default or mobile path, do not redirect
    stop;
  }
  else if (ref=='') {
    // If there is no referrer, redirect
    window.location = mobile_url;
  }
  else {
    // If the referrer did not originate from within the site, redirect
    window.location = mobile_url;
  }
}
else {
//  console.log(window.outerWidth);
//  window.location = site_url;
}









