function handleMessage(msgEvent) {
	var messageName = msgEvent.name;
	var messageData = msgEvent.message;
	if (messageName === "laterstars-faved") {
		console.log("I got here!");
		
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
			s.setAttribute('src', 'http://laterstars.com/epogue/bookmarklet/oneclick?url=' + encodeURIComponent(d.location.href) + '&title=' + encodeURIComponent(d.title));
			b.appendChild(s);
		} catch(e) {
			alert('simma');
		}
	}
}

safari.self.addEventListener("message", handleMessage, false);
