$(function() {
	var params = {
		location: "trial",
		accountId: "1a206862-1b40-440c-9057-4a6c2bc9b364",
		name: prompt("Please enter the name of the video"),
		videoUrl: prompt("Please enter the url of the video"), 
		token: prompt("Please enter your account acces token") 
	};

	$.ajax({
		url: "https://api.videoindexer.ai/"+params.location+"/Accounts/"+params.accountId+"/Videos?name="+params.name+"&privacy=Private&videoUrl="+params.videoUrl+"&indexingPreset=Default&streamingPreset=Default&sendSuccessEmail=False&accessToken="+params.token,
		beforeSend: function(xhrObj){
			// Request headers
			xhrObj.setRequestHeader("x-ms-client-request-id","");
			xhrObj.setRequestHeader("Content-Type","multipart/form-data");
			xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key","fc9726bc506c420f8510a57ea140dbf6");
		},
		type: "POST",
		// Request body
		data: "{body}"
	})
		.done(function(data) {
			alert("success upload video");
			var dataString = JSON.stringify(data);
			alert(dataString);
		})
		.fail(function() {
			alert("error upload video");
		});
});

