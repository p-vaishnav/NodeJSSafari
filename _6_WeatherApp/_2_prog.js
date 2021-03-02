const request = require("request");
const url = 'http://api.weatherstack.com/current?access_key=b34af15b2c1bc3cc6e47c6a832fdc516&query=37.8267,-122';


request({
    url
},(error,response) => {
    if(!error){
        console.log(JSON.parse(response.body));
    }
})