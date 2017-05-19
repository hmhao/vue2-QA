(function() {
  var lastTime = 0;
  var vendors = ['ms', 'moz', 'webkit', 'o'];
  for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
    window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
    window.cancelAnimationFrame = window[vendors[x]+'CancelAnimationFrame'] || window[vendors[x]+'CancelRequestAnimationFrame'];
  }

  if (!window.requestAnimationFrame)
    window.requestAnimationFrame = function(callback, element) {
      var currTime = new Date().getTime();
      var timeToCall = Math.max(0, 16 - (currTime - lastTime));
      var id = window.setTimeout(function() { callback(currTime + timeToCall); },
        timeToCall);
      lastTime = currTime + timeToCall;
      return id;
    };

  if (!window.cancelAnimationFrame)
    window.cancelAnimationFrame = function(id) {
      clearTimeout(id);
    };
}());

(function ( document, window ) {
  var i,
    el = document.createElement('div'),
    transitions = {
      'WebkitTransition':'webkitTransitionEnd',
      'MozTransition':'mozTransitionEnd',
      'OTransition':'oTransitionEnd',  // oTransitionEnd in very old Opera
      'transition':'transitionend'
    },
    animations = {
      'WebkitAnimation':'webkitAnimationEnd',
      'MozAnimation':'mozAnimationEnd',
      'OAnimation':'oAnimationEnd',  // oTransitionEnd in very old Opera
      'animation':'animationend'
    };

  function whichEvent (events) {
    var event;
    for (i in events) {
      if (events.hasOwnProperty(i) && el.style[i] !== undefined) {
        event = events[i];
        break;
      }
    }
    return event
  }
  window.transitionEnd = whichEvent(transitions);
  window.animationEnd = whichEvent(animations);
}( document, window ));