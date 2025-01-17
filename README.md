# web_advanced_api

 Om de api te starten moet je in je command line node index.js typen. dit zorgt ervoor dat de api open zal zijn op poort 3000.

 om de api te gebruiken kan je bv postman gebruiken. dit is ook de applicatie die ik gebruik. Dat is zeer gemakkelijk om te gebruiken. 
 
eerst en vooral maak je een nieuwe http request aan. 
om al de users te tonen moet je GET kiezen. en dan de volgende url invullen: http://localhost:3000/api/users . als je dan op send drukt krijg je een lijst van al de bestaande users en hun informatie. als je op het einde van de url /2 schrijft bijvoorbeeld kan krijg je de user met id 2 te zien. 

om een nieuwe user aan te maken moet je POST kiezen. dan weer dezelfde url. vervolgend moet je naar body gaan, raw kiezen en zien dat het op json staat. dan moet je dit in de body typen:
{
    "name": "naam",
    "email": "email",
    "password": "wachtwoord"
}

Als je een user wil updaten moet je exact hetzelfde doen als een user aanmaken maar moet je gewoon in de url op het einde /userid zetten zodat postman weet welke user hij moet updaten. 

om een user te verwijderen moet je DELETE kiezen en dat dezelfde url als update met de userid van de user die je wilt verwijderen. 

om een endpoint te krijgen met een limiet en een offset moet je dit in de ulr schrijven:http://localhost:3000/api/users?limit=5&offset=10 de limit beslist hoeveel users je max toont en de offset is hoeveel users hij moet skippen. 

om een endpoint te krijgen waar een entiteit wordt teruggegeven na het zoeken van een waarde van minstens één veld moet je het volgende in je url plaatsen: http://localhost:3000/api/events?search=1. na het = moet je in ons geval het id van de discipline schrijven zoals in het voorbeeld de 1 wat de 100m is. 

