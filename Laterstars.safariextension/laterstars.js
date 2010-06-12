var isInIFrame = (window.location != window.parent.location) ? true : false;
if (isInIFrame == true) {
} else {
	var shift = false;
	
	function handleMessage(msgEvent) {
		var messageName = msgEvent.name;
		var messageData = msgEvent.message;
		if (messageName === "laterstars-faved") {		
			if ((shift == 1 && messageData.buttonBehavior == "open") || (shift == 0 && messageData.buttonBehavior == "oneClick")) {
				oneClick(messageData);
			} else {
				safari.self.tab.dispatchMessage("openLaterstars","");
				shift = 0;
			}
		}
	}
	
	function oneClick(messageData){
		var d = document,
				s = d.createElement('script'),
				c = d.createElement('link'),
				b = d.body;

		try {
			if (!b) throw (0);

			// Insert CSS
			c.setAttribute('href', 'http://laterstars.com/stylesheets/oneclick.css');
			c.setAttribute('media', 'all');
			c.setAttribute('rel', 'stylesheet');
			c.setAttribute('type', 'text/css');

			// Insert message div
			var div = d.createElement('div');
			div.setAttribute('id','lsbm-bezel');
			div.innerHTML = '&#x2605;&nbsp;&nbsp;faving for later...';
			b.appendChild(c);
			b.appendChild(div);

			// Insert script
			s.setAttribute('src', 'http://laterstars.com/' + encodeURI(messageData.twitterUsername) + '/bookmarklet/oneclick?url=' + encodeURIComponent(d.location.href) + '&title=' + encodeURIComponent(d.title));
			b.appendChild(s);
		} catch(e) {
			alert('simma');
		}
	}
	
	function handleKeyDown(event){
		if (event.keyCode == '16') {
			shift = 1;
		}
	}
	
	function handleKeyUp(event){
		if (event.keyCode == '16') {
			shift = 0;
		}
	}

	safari.self.addEventListener("message", handleMessage, false);
	document.addEventListener("keydown", handleKeyDown, false);
	document.addEventListener("keyup", handleKeyUp, false);
}
