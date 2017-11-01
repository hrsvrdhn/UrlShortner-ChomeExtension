

chrome.tabs.query({'active': true, 'windowId': chrome.windows.WINDOW_ID_CURRENT},
   function(tabs){
      document.getElementById("url").value = tabs[0].url;
   }
);

$(document).ready(function() {
	$("#shorten").click(function(evt) {
		evt.preventDefault()
		var url = $("#url").val()
		if(!url.startsWith("xhml.ml")) {
	    	$("#shorten").html("Processing...")
	    	$("#shorten").addClass("btn-info")
			$.ajax({
				type: "POST",
				url: "http://xhml.ml/api",
				data: { url: url },
			    success: function (xhr, status) {
	    			$("#shorten").html("Success!")
	    			$("#shorten").removeClass("btn-info")
	    			$("#shorten").addClass("btn-success")
	    			$("#url").val("xhml.ml/"+xhr.data.shortCode)
				}
			})
		}
	})
})
