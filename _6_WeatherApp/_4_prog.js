const request = require("request");
const url = 'http://api.weatherstack.com/current?access_key=b34af15b2c1bc3cc6e47c6a832fdc516&query=37.8267,-122';

console.log("start");
request({
    url,
    json:'application/json'
},(error,response) => {
    if(!error){
        console.log("There is a temperature of " +  response.body.current.temperature + "and chance ofrain is " + response.body.current.precip+ "%");
    }
})

console.log("end");