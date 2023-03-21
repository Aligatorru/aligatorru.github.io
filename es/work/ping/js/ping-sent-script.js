function is_mobile(){var check = false;(function(a){if(/(android|ipad|playbook|silk|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))check = true})(navigator.userAgent||navigator.vendor||window.opera);return check;}
function addEventListener(el,b,c){if (el.addEventListener){el.addEventListener(b,c);} else if (el.attachEvent){el.attachEvent("on"+b,function(){c.call(el)});}}
function hideDiv(id){document.getElementById(id).style.display = "none";}
// https://www.sitepoint.com/css3-animation-javascript-event-handlers/
function prefixedAddEventListener(el,type,callback){var l = prefixedEventListener.length;for (var p = 0; p < l; p++){if (!prefixedEventListener[p]) type = type.toLowerCase();addEventListener(el, prefixedEventListener[p]+type, callback);}}
function ieFixHeight(){if (!navFixMinHeight){return;}var FH = document.querySelectorAll(".full-height");var l = FH.length;for (var i = 0; i < l; i++){FH[i].style.height = 'auto';FH[i].style.height = FH[i].clientHeight+'px';}}
function legalsNotice(action){if (!Modernizr.localstorage){return false;}var now = new Date();if (action == 'set'){now.setMonth(now.getMonth() + 1);localStorage.setItem('policy_agreed', now.getTime());} else if (action == 'check'){var expire = localStorage.getItem('policy_agreed');if (expire == null){return false;}return (now.getTime() < expire);}}
function getOffsetTop(el){var rect = el.getBoundingClientRect();return rect.top + (window.pageYOffset || document.documentElement.scrollTop)}
function scrollTo(el){window.scroll(0,getOffsetTop(el));}

var clickevent = is_mobile() ? 'touchstart':'click',
prefixedEventListener = ["webkit","moz","MS","o",""],
navFixMinHeight = (navigator.appName == 'Microsoft Internet Explorer' || (navigator.appName == "Netscape" && (navigator.appVersion.indexOf('Edge') > -1 || navigator.appVersion.indexOf('Trident') > -1)))
divNav = document.getElementById('nav');

// cookies notification
if (legalsNotice('check')){hideDiv('cookies');}

(function(){
	// fix full height for IE & Edge
	ieFixHeight();addEventListener(window,"resize",ieFixHeight);
	// nav toggle
	var navT = document.querySelectorAll(".navToggle");var l = navT.length;for (var p = 0; p < l; p++){addEventListener(navT[p],clickevent,function(){divNav.classList.toggle('closed')});}
})(document);

// handle button effect
addEventListener(document,clickevent,
	function(el){
		// not a .btn 
		if (!el.srcElement.classList.contains("btn")){return;}
		var btn = el.srcElement;
		// remove blur if mouse hover
		if (btn.querySelector(":hover") || btn.parentNode.querySelector(":hover") == btn){
			document.activeElement.blur();
		}
		if (!el.srcElement.classList.contains("btn-ripple")){return;}
		btn.classList.remove("active");
		btn.classList.add("active");
		prefixedAddEventListener(btn, "AnimationEnd", function(){btn.classList.remove("active");});
		setTimeout(function(){btn.classList.remove("active");},1000);
	},
	false
);

// app

document.getElementById("graph").innerHTML += '<div class="line line-700"><span>700</span></div>'
	+'<div class="line line-600"><span>600</span></div>'
	+'<div class="line line-500"><span>500</span></div>'
	+'<div class="line line-400"><span>400</span></div>'
	+'<div class="line line-300"><span>300</span></div>'
	+'<div class="line line-200"><span>200</span></div>'
	+'<div class="line line-100"><span>100</span></div>'
	+'<div class="line line-50"><span>50</span></div>'
	+'<div class="line line-25"><span>25</span></div>'
	+'<div class="line line-0"><span>ms</span></div><div id="graphBars"></div>';

var 
	ping_loop,
	ping_running = false,
	ping_fail = 0,
	ping_fail_timeOut = 0,
	ping_time_cumul = 0,
	ping_i = 0,
	ping_min = 999999,
	ping_fail = 0,
	ping_max = 0,
	btnStart = document.getElementById("pingStart"),
	btnStartText = btnStart.innerHTML,
	divChartBars = document.getElementById("graphBars"),
	divFail = document.getElementById("pingFail"),
	divIter = document.getElementById("pingIter"),
	divMin = document.getElementById("pingMin"),
	divAve = document.getElementById("pingAve"),
	divMax = document.getElementById("pingMax");


btnStart.addEventListener(
		clickevent,
		function(e){
				e.preventDefault();
				if (ping_running == true) {
					btnStart.innerHTML = btnStartText;
					http_ping_stop();
				} else {
					btnStart.innerHTML = 'Stop';
					http_ping(9999999);
				}
				return;
			},
		false
	);

function http_ping_stop(){
	if (ping_loop === undefined){return;}
	clearInterval(ping_loop);
	ping_running = false;
}

function http_ping_show_result(pong){
	if (ping_i == 0){return;}
	divFail.innerHTML = ping_fail;
	divIter.innerHTML = (ping_i-1);
	if (ping_i > 1){
		divMin.innerHTML = ping_min +' <small>ms</small>';
	}
	divMax.innerHTML = ping_max +' <small>ms</small>';
	if (ping_time_cumul > 0 && ping_i > 1) {
		var avg_time = Math.round(ping_time_cumul / (ping_i - 1));
		divAve.innerHTML = avg_time +' <small>ms</small>';

		var bar = document.createElement("div");
		bar.classList.add('bar');
		var c = '',h = "200px";
		if (pong == null){
			c = 'fail';
			h = "100%";
		} else if (pong > 299){
			c = 'red';
			h = "260px";
		} else if (pong > 199){
			c = 'red';
			h = pong+"px";
		} else if (pong > 99){
			c = 'orange';
			h = pong+"px";
		} else if (pong >= 0){
			pong++;
			c = 'green';
			h = pong+"px";
		} else {
			c = 'black';
			h = "200px";
		}
		bar.style.height = h;
		bar.classList.add('bar-'+c);
		divChartBars.insertBefore(bar,divChartBars.children[0]);
	}
}

function http_ping(iter_nb) {
	http_ping_stop();
	ping_running = true;
	divChartBars.innerHTML = '';

	if (iter_nb === undefined){iter_nb = 4;} else {iter_nb = parseInt(iter_nb);}
	var iter_max = iter_nb + 1,
		TIME_PERIOD = 1000,
		over_flag = 0;

	// re-init some vars
	max_ttl = 3000;
	ping_fail_timeOut = 0;
	ping_min = 99999;
	ping_max = 0;
	ping_i = 0;
	ping_time_cumul = 0;

	ping_loop = setInterval(
		function(){
				url = "send/ping.txt?uid=" + Math.random().toString(36).substring(7);

				if (ping_i < iter_max) {

					ping_i++;
					over_flag++;

					// var ping = getClient();
					var ping = new XMLHttpRequest();

					ping.seq = ping_i;
					ping.date1 = Date.now();

					// the request has returned something, let's log it (starting after the first one)
					ping.onreadystatechange = function() {
						var delta_time = null;
						if (ping.readyState == 4 && ping_fail_timeOut == 0) {
							over_flag--;
							if (this.status >= 200 && this.status < 400) {
								if (ping.seq > 1) {
									delta_time = (Date.now() - ping.date1) + 1;
									ping_time_cumul += delta_time;
									if (delta_time < ping_min){ping_min = delta_time;}
									if (delta_time > ping_max){ping_max = delta_time;}
								}

							} else {
								ping_fail++;
							}

							// if (delta_time !== null) {
                                
                                divChartBars.style.width = (ping_i*7)+'px';
								http_ping_show_result(delta_time);
							// }
						}
					}

					ping.ontimeout = function(){
						ping_fail_timeOut = 1;
					}

					ping.open("GET", url, true);
					ping.timeout = max_ttl;
					ping.send();
				}

				if ((ping_i > iter_nb) && (over_flag < 1)){
					clearInterval(ping_loop);
				}

				if (ping_fail_timeOut == 1){
					clearInterval(ping_loop);
					return;
				}
			},
		TIME_PERIOD
	);
}
