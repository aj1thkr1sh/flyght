var Flyght = {

	// DOM Element to load the content
	idElement : "",

	// Hash Page Mapping
	hashPageList : [],

	requestHeader : [],

	init : function(argumentMap) {
		Flyght.idElement = argumentMap.idElement;
		Flyght.register(argumentMap.urlConfiguration);

		if (typeof argumentMap.requestHeader !== "undefined") {
			Flyght.requestHeader = argumentMap.requestHeader;
		}
		Flyght.configureXHR();
		window.addEventListener("hashchange", Flyght.hashListener, false);
		window.onload = Flyght.hashListener();
	},

	configureXHR : function() {
		Flyght.xhr = new XMLHttpRequest();
		Flyght.xhr.onreadystatechange = function() {
			if (Flyght.xhr.readyState == 4 && Flyght.xhr.status == 200) {
				document.getElementById(Flyght.idElement).innerHTML = Flyght.xhr.responseText;
			}
		}
	},

	register : function(mappingList) {
		Flyght.hashPageList = mappingList;
	},

	hashListener : function() {
		for ( var key in Flyght.hashPageList) {
			if (window.location.hash === Flyght.hashPageList[key].hash) {
				var url = Flyght.hashPageList[key].url;
				var type = typeof Flyght.hashPageList[key].type !== "undefined"? Flyght.hashPageList[key].type: "GET";

				Flyght.xhr.open(type, url, true);

				for ( var key in Flyght.requestHeader) {
					if (Flyght.requestHeader.hasOwnProperty(key)) {
						Flyght.xhr.setRequestHeader(
								Flyght.requestHeader[key].header,
								Flyght.requestHeader[key].value);
					}
				}

				Flyght.xhr.send();
				break;
			} else {
				document.getElementById(Flyght.idElement).innerHTML = "";
			}
		}
	}

};
