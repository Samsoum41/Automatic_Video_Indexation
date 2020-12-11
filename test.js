window.alert("Salut les copains")
let titre = document.getElementById("titre")

let fichierJSON = {
    "nom" : "Zeller",
    "prenom" : "Torben",
    "age" : "23 ans"
}

var heading = document.createElement("p");
var heading_text = document.createTextNode(fichierJSON.nom + " " + fichierJSON.prenom);
heading.appendChild(heading_text);
document.body.appendChild(heading);

$(function() {
    var params = {
        // Request parameters
        "allowEdit": "False",
        "location": "trial"
    };
  
    $.ajax({
        url: "https://api.videoindexer.ai/Auth/{location}/Accounts/{accountId}/AccessToken?" + $.param(params),
        beforeSend: function(xhrObj){
            // Request headers
            xhrObj.setRequestHeader("x-ms-client-request-id","");
            xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key","{subscription key}");
        },
        type: "GET",
        // Request body
        data: "{body}",
    })
    .done(function(data) {
        alert("success");
    })
    .fail(function() {
        alert("error");
    });
});
/*
Pour indexer une vidéo avec l'API de Video Indexer, il faut :

1. Commande : Get Account Access Token
/!\ Faire attention à bien utilisé le même compte pour les identifiants
URL : https://api.videoindexer.ai/Auth/trial/Accounts/82003bd5-d1bb-46c6-9485-7f16f83a1b7f/AccessToken?allowEdit=false
Résultat : String token
eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTI1NiIsInR5cCI6IkpXVCJ9.eyJBY2NvdW50SWQiOiI4MjAwM2JkNS1kMWJiLTQ2YzYtOTQ4NS03ZjE2ZjgzYTFiN2YiLCJBbGxvd0VkaXQiOiJUcnVlIiwiRXh0ZXJuYWxVc2VySWQiOiJlMDhhMjhjODU2M2Y3ZmRiIiwiVXNlclR5cGUiOiJNaWNyb3NvZnQiLCJJc3N1ZXJMb2NhdGlvbiI6IlRyaWFsIiwibmJmIjoxNjA3NzA4MTQ5LCJleHAiOjE2MDc3MTIwNDksImlzcyI6Imh0dHBzOi8vYXBpLnZpZGVvaW5kZXhlci5haS8iLCJhdWQiOiJodHRwczovL2FwaS52aWRlb2luZGV4ZXIuYWkvIn0.UEsKNUDx1sTfmSWjgfGXNSI_35OqpiEb_KE8Jtt6hE0

2. Commande Upload Video:
Paramètres obligatoires :
- Access Token
- Account ID
- location

Cette commande sert à uploader la vidéo chez Microsoft et générer son ID.
Résultat : JSON contenant notamment String id, le videoID de la video
cc846e5ee6

3. Command Get Video Index:
Paramètres obligatoires :
- VideoID(2.Upload Video)
- AccessToken
- Location
- Account ID

Résultat : JSON détaillant l'état du processus.
JSON.videos.processingProgess -> Etat du processus en "xx%"


Pour mardi :

- Résoudre le problème du lieu de stockage des vidéos en ligne (Azure blob, serveur centrale etc)
- Réaliser les requêtes avec JavaScript
- Traiter la vidéo à partir d'une URL


*/