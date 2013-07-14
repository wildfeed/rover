var site_url = Drupal.settings.site_url;
console.log('Site URL: ' + site_url);
var mobile_url = Drupal.settings.mobile_url;
console.log('Mobile URL: ' + mobile_url);
var destination_mobile = Drupal.settings.destination_is_mobile;
console.log(Drupal.settings.destination_is_mobile);


document.write(' Screen Width: ' + screen.width);
document.write(' Viewport Width: ' + window.outerWidth);

var ref = document.referrer.replace(/\/$/, '');
  console.log(' Referrer: ' + ref);
  document.write(' Referrer: ' + ref);

var urls = new Array(site_url, mobile_url);

var n = ref.match(urls[0]);
  var m = ref.match(urls[1]);
  console.log('n: ' + n);
  console.log('m: ' + m);
  document.write(' n: ' + n);
  document.write(' m: ' + m);




if (screen.width <= 720) {

  if (ref=='') {
    if ((m!==null) || (n!==null)) {
    // If referrer contains either the default or mobile path, do not redirect
    document.write(' has REFERRER: ');
    //window.location = mobile_url;
    stop;
  }
  // Small screen
  //window.location = mobile_url;
  document.write(' Small Screen Width: ' + screen.width);


    // If there is no referrer, redirect
    window.location = mobile_url;
  }
  else {
    // If the referrer did not originate from within the site, redirect
    //window.location = mobile_url;
  }
}
else {
document.write(' Big Screen Width: ' + screen.width);

//  if ((m!==null) || (n!==null)) {
//    // If referrer contains either the default or mobile path, do not redirect
//    stop;
//  }

//  if (m!==null) {
//    window.location = mobile_url;
//  }
//  else if (destination_mobile == 1) {
//    document.write(' Destination_mobile: ' + destination_mobile);
//    //window.location = site_url;
//
//  }

  //console.log(window.outerWidth);
  //document.write(' Destiantion_mobile: ' + destination_mobile);


  if (destination_mobile == 1) {
    document.referrer = '';
    window.location = site_url;
  }

}









