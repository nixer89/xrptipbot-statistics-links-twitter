var url = document.URL;
if(url.includes('mobile.twitter.com'))
	setInterval(addStatisticsLinkMobile ,2000)
else
	setInterval(addStatisticsLink ,2000)

function addStatisticsLink() {
	var allActionLinks = document.getElementsByClassName('ProfileTweet-actionList js-actions');

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
						
						var newLinkDiv2 = document.createElement('DIV');
						newLinkDiv2.setAttribute('class','IconContainer');
						newLinkDiv2.style.paddingBottom = "2em";
						
						var a = document.createElement('A');
						a.setAttribute('class','Icon');
						a.href = "https://xrptipbot-statistics.siedentopf.xyz/userstatistics?user="+userHandle+"&network=twitter";
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
}

function addStatisticsLinkMobile() {
	var slice = Array.prototype.slice;
	var allActionLinks = []
	var divs = slice.call(document.getElementsByTagName('div'));
	for(var j = 0; j < divs.length; j++) {
		if(divs[j] && divs[j].getAttribute('data-testid') && divs[j].getAttribute('data-testid') == 'like')
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
						a.href = "https://xrptipbot-statistics.siedentopf.xyz/userstatistics?user="+userHandle+"&network=twitter";
						a.target = '_blank';
						
						if(emptyDiv && emptyDiv[0] && emptyDiv[0].childNodes.length==0 && !emptyDiv[0].innerHTML) {
							newLinkDiv = emptyDiv[0];
							newLinkDiv.setAttribute('class', newLinkDiv.className + ' xrptipbot-statistics-button');
						}
						else {
							newLinkDiv = document.createElement('DIV');
							newLinkDiv.setAttribute('class','css-1dbjc4n r-18u37iz r-1h0z5md r-3qxfft r-h4g966 r-rjfia xrptipbot-statistics-button');
							a.setAttribute('class','css-18t94o4 css-1dbjc4n r-1777fci r-11cpok1 r-bztko3 r-lrvibr');
						}
						
						
						
						//newLinkDiv2.setAttribute('class','IconContainer');
						//newLinkDiv2.style.paddingBottom = "2em";
						
						
						
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
