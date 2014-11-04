/**
 * HerramientaController
 *
 * @description :: Server-side logic for managing Herramientas
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

 module.exports = {
   eliminar:function(req, res){
     Empleado_herramienta.find({id_herramienta:req.params.id}).exec(function findCB(err,found){
      var aux = "http://contratools-143332.sae1.nitrousbox.com:8080/herramienta/destroy/"+req.params.id;   
      var request = require("request");
      var id = "";
       
      request(aux, function(error, response, body) {
          if (error) 
          res.json({error: 'DB error'}, 500); 
      });
      while (found.length){
        id = found.pop().id;
        aux = 'http://contratools-143332.sae1.nitrousbox.com:8080/empleado_herramienta/destroy/'+id;   
        request(aux, function(error, response, body) {
          if (error) 
          res.json({error: 'DB error'}, 500);
        });
      }
       
      res.json("succes");
       
    });
  }
};

