/**
 * Created by duc on 11/6/16.
 */
function newGradient() {
	var c1 = {
		r: Math.floor(Math.random()*255),
		g: Math.floor(Math.random()*255),
		b: Math.floor(Math.random()*255)
	};
	var c2 = {
		r: Math.floor(Math.random()*255),
		g: Math.floor(Math.random()*255),
		b: Math.floor(Math.random()*255)
	};
	c1.rgb = 'rgb('+c1.r+','+c1.g+','+c1.b+')';
	c2.rgb = 'rgb('+c2.r+','+c2.g+','+c2.b+')';
	return 'radial-gradient(at top left, '+c1.rgb+', '+c2.rgb+')';
}

function rollBg() {
	$('.bg.hidden').css('background', newGradient());
	$('.bg').toggleClass('hidden');
}

function startApp() {
	setTimeout(function () {
		var onBoarding = document.getElementById("onboarding");
		onBoarding.className += "o-hide";
		rollBg();
		setInterval(rollBg, 5000);
	}, 300);
}

function gotoPortfolio() {
	
}

function gotoBlog() {
	
}

function gotoContact() {
	var win = window.open('https://www.linkedin.com/in/nnduc', '_blank');
	if (win) {
		win.focus();
	} else {
		alert('Please allow popups for this website');
	}
}