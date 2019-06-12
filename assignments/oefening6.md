1. Maak een applicatie aan met 3 pagina's: Home, About, Images
2. In de pagina genaamd images, haal je alle foto's op van Flicker met deze gegevens:
###
const SHUTTER_CLIENT_ID = '3434a56d8702085b9226';
const SHUTTER_CLIENT_SECRET = '7698001661a2b347c2017dfd50aebb2519eda578';
const SHUTTERSTOCK_API_ENDPOINT = `https://api.shutterstock.com/v2/images/search?
query=kites&page=1&per_page=10`;
// Basic Authentication for accessing Shutterstock API
const basicAuth = () => 'Basic '.concat(window.btoa(`${SHUTTER_CLIENT_ID}:${SHUTTER_CLIENT_SECRET}`));
const authParameters = {
    headers: {
        Authorization: basicAuth()
    }
};
###

3. De foto's toon je vervolgens in een NoThree card.
4. Voor moet de website identiek zijn aan het online voorbeeld.

Online voorbeeld: https://oefening6-dot-nothree-ui.appspot.com/
No Three UI: https://nothree-ui.appspot.com/