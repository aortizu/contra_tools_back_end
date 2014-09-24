/**
* Herramienta.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
   tableName: 'herramienta',
   adapter: 'someMysqlServer',
   migrate: 'safe',
   attributes: {
     nombre:{       
       type:'string',
       required: true
     },
     serial:{
       type:'string'
     },
     descripcion:{
       type:'string'
     },
     comentario:{
       type:'string'
   }
}
};

