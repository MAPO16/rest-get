var unirest = require('unirest');

var req = unirest("GET", "http://eap-app-ags-cayas.openshift.amcilab/ws-cayas/rest/empleado");

req.headers({
    "cache-control": "no-cache",
    "x-dreamfactory-api-key": "empleado?idEmpleado=00000140039"
});

req.end(function (res) {
   if (res.error)throw new Error(res.error);

   console.log(res.body);
});