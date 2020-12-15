$(function() {
	var params = {
		// Request parameters
		location: "trial",
		accountId: "1a206862-1b40-440c-9057-4a6c2bc9b364",
		allowEdit: "true"
	}; 

	$.ajax({
		url: "https://api.videoindexer.ai/Auth/"+params.location+"/Accounts/"+params.accountId+"/AccessToken?allowEdit="+params.allowEdit,
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
			alert("success get token");
			alert(data);
		})
		.fail(function() {
			alert("error get token");
		});
});
</script>

