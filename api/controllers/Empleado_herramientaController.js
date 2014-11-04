/**
 * Empleado_herramientaController
 *
 * @description :: Server-side logic for managing empleado_herramientas
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

 module.exports = {
   retirar:function(req, res){
     Empleado_herramienta.find({id_herramienta:req.body.id_herramienta}).exec(function findCB(err,found){
      var aux = "http://contratools-143332.sae1.nitrousbox.com:8080/herramienta/destroy/"+req.params.id;   
      var request = require("request");
      var result;
      while (found.length){
        result = found.pop();
        if(result.id_empleado == req.body.id_empleado){
          aux = "http://contratools-143332.sae1.nitrousbox.com:8080/empleado_herramienta/destroy/"+result.id;
          request(aux, function(error, response, body) {
            if (error) 
              res.json({error: 'DB error'}, 500);
          });
        }
      } 
      res.json("succes");
    });
   }
 };

