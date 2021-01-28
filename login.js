angular.module('delf', [
	// 'ngRoute',
  'ngAnimate'
	// ,'ngCookies'
	// ,'ngFileUpload'
	// ,'angularMoment'
	// ,'ui.router'
	// ,'angularUtils.directives.uiBreadcrumbs'
])
.service('services', function(){
	//   
	return {
		overHeader : function(id = 'modal__overlay', val = 'true'){
			var overHeader = angular.element(document.querySelectorAll('#'+id));
			if(val == 'true'){
				return overHeader.addClass("visible"); 
			}
			if(val == 'false'){
				return overHeader.removeClass("visible");  
			}
			if(val == 'toggle'){
				if(!overHeader.hasClass('visible')){
					//alert('open');
					return overHeader.addClass("visible");    
				}if(overHeader.hasClass('visible')){
					//alert('close');
					return overHeader.removeClass("visible");     
				}
			}
		}
		, modal : function(id = 'modal', val = 'true'){
			var mymodal = angular.element(document.querySelectorAll('#'+id));
			if(val == 'true'){
				return mymodal.addClass("open"); 
			}
			if(val == 'false'){
				return mymodal.removeClass("open");  
			}
			if(val == 'toggle'){
				if(!mymodal.hasClass('open')){
					//alert('open');
					return mymodal.addClass("open");    
				}if(mymodal.hasClass('open')){
					//alert('close');
					return mymodal.removeClass("open");     
				}
			}
		}
		, test : function(){
			return 'Open'
		}
	}
})	
.controller('index',['$scope', 'services', function($scope, services){
  //   
	$scope.eventoUno = services.test();
	$scope.overHeader = function(id, val){
		services.overHeader(id, val);
	}
	$scope.ModalControl = function(id, val){
		services.modal(id, val);
		if(val == 'true'){
			services.overHeader(undefined, 'true'); 
		}
		if(val == 'false'){
			services.overHeader(undefined, 'false'); 
		}
	}
	
	window.addEventListener('keydown', function(e){º
	
		var key = e.which || e.keyCode || 0;
		if(key == 27){
			services.overHeader(undefined, 'false'); 
			services.modal(undefined,  'false'); 
		}
		if(key == 13){
			services.modal(undefined,  'true'); 
		}
	})
}]);

particlesJS("particles-js", {
	  "particles": {
		 "number": {
			"value": 110,
			"density": {
			  "enable": false,
			  "value_area": 2051.7838682439087
			}
		 },
		 "color": {
			"value": "#ffffff"
		 },
		 "shape": {
			"type": "circle",
			"stroke": {
			  "width": 0,
			  "color": "#000000"
			},
			"polygon": {
			  "nb_sides": 5
			},
			"image": {
			  "src": "img/github.svg",
			  "width": 100,
			  "height": 100
			}
		 },
		 "opacity": {
			"value": 0.5,
			"random": false,
			"anim": {
			  "enable": false,
			  "speed": 1,
			  "opacity_min": 0.1,
			  "sync": false
			}
		 },
		 "size": {
			"value": 3,
			"random": true,
			"anim": {
			  "enable": false,
			  "speed": 40,
			  "size_min": 0.1,
			  "sync": false
			}
		 },
		 "line_linked": {
			"enable": true,
			"distance": 150,
			"color": "#ffffff",
			"opacity": 0.4,
			"width": 1
		 },
		 "move": {
			"enable": true,
			"speed": 1,
			"direction": "none",
			"random": true,
			"straight": false,
			"out_mode": "out",
			"bounce": false,
			"attract": {
			  "enable": false,
			  "rotateX": 868.0624057955,
			  "rotateY": 1200
			}
		 }
	  },
	  "interactivity": {
		 "detect_on": "window",
		 "events": {
			"onhover": {
			  "enable": false,
			  "mode": "repulse"
			},
			"onclick": {
			  "enable": false,
			  "mode": "push"
			},
			"resize": true
		 },
		 "modes": {
			"grab": {
			  "distance": 400,
			  "line_linked": {
				 "opacity": 1
			  }
			},
			"bubble": {
			  "distance": 400,
			  "size": 40,
			  "duration": 2,
			  "opacity": 8,
			  "speed": 3
			},
			"repulse": {
			  "distance": 200,
			  "duration": 0.4
			},
			"push": {
			  "particles_nb": 4
			},
			"remove": {
			  "particles_nb": 2
			}
		 }
	  },
	  "retina_detect": true
	});
	var count_particles, stats, update;
	stats = new Stats;
	stats.setMode(0);
	stats.domElement.style.position = 'absolute';
	stats.domElement.style.left = '0px';
	stats.domElement.style.top = '0px';
	document.body.appendChild(stats.domElement);
	// count_particles = document.querySelector('.js-count-particles');
	update = function() {
		 stats.begin();
		 stats.end();
		 // if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
		 //     count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
		 // }
		 requestAnimationFrame(update);
	};
	requestAnimationFrame(update);