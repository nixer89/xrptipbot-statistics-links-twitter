var url = document.URL;

setInterval(addStatisticsLink, 2000)	

function addStatisticsLink() {
	var allActionLinks = document.getElementsByClassName('ProfileTweet-actionList js-actions');
	
	if(allActionLinks && allActionLinks.length > 0) {
		var i;
		try {
			for (i = 0; i < allActionLinks.length; i++) {
				if(allActionLinks[i].parentElement && allActionLinks[i].parentElement.parentElement) {
					var tweetHeaderSpan =  allActionLinks[i].parentElement.parentElement.getElementsByClassName('username u-dir u-textTruncate');
					if(tweetHeaderSpan &&  tweetHeaderSpan[0] && tweetHeaderSpan[0].getElementsByTagName('b')[0]) {
						var userHandle = tweetHeaderSpan[0].getElementsByTagName('b')[0].innerHTML;
						var actionListDiv =  allActionLinks[i];
						
						//check if icons exists already
						if(actionListDiv && actionListDiv.getElementsByClassName('xrptipbot-statistics-button').length==0) {
							var newLinkDiv = document.createElement('DIV');
							newLinkDiv.setAttribute('class','ProfileTweet-action xrptipbot-statistics-button');
							newLinkDiv.style.verticalAlign = "top";
							
							var newLinkDiv2 = document.createElement('DIV');
							newLinkDiv2.setAttribute('class','IconContainer');
							newLinkDiv2.style.paddingBottom = "2em";
							
							var a = document.createElement('A');
							a.setAttribute('class','Icon');
							a.href = "https://xrptipbot-stats.com/userstatistics?user="+userHandle+"&network=twitter";
							a.target = '_blank';
							
							var img = document.createElement('img');
							img.style.width = '18px';
							img.style.height= '18px';
							
							if(chrome && chrome.extension)
								img.src = chrome.extension.getURL("xrptipbot.png");
							else if(browser && browser.extension)
								img.src = browser.extension.getURL("xrptipbot.png");
							else
								img.src = "xrptipbot.png";
							
							a.appendChild(img);
							newLinkDiv2.appendChild(a)
							newLinkDiv.appendChild(newLinkDiv2);
							actionListDiv.appendChild(newLinkDiv);
						}
					}
				}
			}
		} catch(err) {
			console.log(err);
		}
	} else {
		//nothing found on normal page. Try mobile view!
		addStatisticsLinkMobile();
	}
}

function addStatisticsLinkMobile() {
	var slice = Array.prototype.slice;
	var allActionLinks = []
	var divs = slice.call(document.getElementsByTagName('div'));
	for(var j = 0; j < divs.length; j++) {
		if(divs[j] && divs[j].getAttribute('data-testid') && (divs[j].getAttribute('data-testid') === 'like' ||divs[j].getAttribute('data-testid') === 'unlike'))
			allActionLinks.push(divs[j].parentElement.parentElement);
	}
	
	var i;
	try {
		for (i = 0; i < allActionLinks.length; i++) {
			if(allActionLinks[i].parentElement) {
				var tweetHeaderSpan =  allActionLinks[i].parentElement.getElementsByTagName('a');
				if(tweetHeaderSpan &&  tweetHeaderSpan[0]) {
					var userHandle = tweetHeaderSpan[0].href.substring(tweetHeaderSpan[0].href.lastIndexOf('/')+1);
					var actionListDiv =  allActionLinks[i];
					
					//check if icons exists already
					if(actionListDiv && actionListDiv.getElementsByClassName('xrptipbot-statistics-button').length==0) {
						var newLinkDiv;
						var emptyDiv = actionListDiv.getElementsByClassName('css-1dbjc4n r-1mlwlqe r-18kxxzh r-199wky7');
						
						var a = document.createElement('A');
						//a.setAttribute('class','Icon');
						a.href = "https://xrptipbot-stats.com/userstatistics?user="+userHandle+"&network=twitter";
						a.target = '_blank';
						
						if(emptyDiv && emptyDiv[0] && emptyDiv[0].childNodes.length==0 && !emptyDiv[0].innerHTML) {
							newLinkDiv = emptyDiv[0];
							newLinkDiv.setAttribute('class', newLinkDiv.className + ' xrptipbot-statistics-button');
						}
						else {
							newLinkDiv = document.createElement('DIV');
							newLinkDiv.setAttribute('class','xrptipbot-statistics-button');
							newLinkDiv.style.marginLeft = '15%';
						}						
						
						var img = document.createElement('img');
						img.style.width = '18px';
						img.style.height= '18px';
						img.style.verticalAlign = 'bottom';
						
						if(chrome && chrome.extension)
							img.src = chrome.extension.getURL("xrptipbot.png");
						else if(browser && browser.extension)
							img.src = browser.extension.getURL("xrptipbot.png");
						else
							img.src = "xrptipbot.png";
						
						a.appendChild(img);
						newLinkDiv.appendChild(a);
						actionListDiv.appendChild(newLinkDiv);
					}
				}
			}
		}
	} catch(err) {
		console.log(err);
	}
}
