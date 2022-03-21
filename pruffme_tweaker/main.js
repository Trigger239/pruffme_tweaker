function show_pres_and_resize(){
  var pres = $('#main_box_presentation');
  var video = $('#main_box_video');
  var chat = $('#main_box_chat');

  var bodyWidth = $('.pruffme-full-container').width();
  var bodyHeigth = $('.pruffme-full-container').height();

  var rPad = 10;
  var lPad = 10;
  var tPad = 60;

  var topBtwSpace = 10;
  var btwSpace = 10; /*скролл бар + 20*/
  var contentWidth = bodyWidth - lPad - rPad - btwSpace; 

  var body14Half = Math.floor(contentWidth / 4);
  var body34Half = body14Half * 3;

  bodyHeigth = bodyHeigth - tPad;
  var magicTopPX = 5; /*5 - мистическое число для ресайза*/
  var height13Half = ((bodyHeigth - topBtwSpace) / 3) - magicTopPX;
  var height23Half = height13Half * 2 + magicTopPX;
  var fullBodyHeight = bodyHeigth - magicTopPX - 5;

  var leftAfter14Half = lPad+body14Half+btwSpace;

  video.width(body14Half).height(height13Half).css({left:lPad, top:tPad});
  pres.width(body34Half).height(fullBodyHeight).css({left:leftAfter14Half, top:tPad});
  chat.width(body14Half).height(height23Half).css({left:lPad, top:tPad + height13Half + topBtwSpace});

  resizeFitContent();

  pres.show();
  moveBoxTopOneStep(pres);
  alert(2);
};

if("pruffme.com" === window.location.host && 
   window.location.pathname.startsWith("/webinar/")){
  show_pres_and_resize();
}
else{
  alert("You are not on a Pruffme Webinar page!");
}
//var scr = document.getElementById("pruffme_tweak");
//if(scr)
//  document.body.removeChild(scr);

//scr = document.createElement("script");
//scr.id = "pruffme_tweak";
//scr.innerText = "(function(){(" + show_pres_and_resize.toString() + ")();})();";
//document.body.appendChild(scr);

