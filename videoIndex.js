$(function() {
	var params = {
		location: "trial",
		accountId: "1a206862-1b40-440c-9057-4a6c2bc9b364",
		videoId : prompt("Please enter the id of the video"),
		token: prompt("Please enter your account acces token") 
	};

	$.ajax({
		url: "https://api.videoindexer.ai/"+params.location+"/Accounts/"+params.accountId+"/Videos/"+params.videoId+"/Index?reTranslate=False&includeStreamingUrls=False&accessToken="+params.token,
		beforeSend: function(xhrObj){
			// Request headers
			xhrObj.setRequestHeader("x-ms-client-request-id","");
			xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key","fc9726bc506c420f8510a57ea140dbf6");
		},
		type: "GET",
		// Request body
		data: "{body}"
	})
		.done(function(data) {
			alert("success video index");
			var dataString = JSON.stringify(data);
			alert(dataString);
		})
		.fail(function() {
			alert("error video index");
		});
});
