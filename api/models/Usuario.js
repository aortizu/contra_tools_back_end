/**
* Usuario.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
   tableName: 'usuario',
   adapter: 'someMysqlServer',
   migrate: 'safe',
  
   attributes: {
     usuario: {
       type: 'string',
       required: true,
       unique: true
     },
     password:{
       type: 'string',
       required: true
     },
     email:{
       type:'string',
       required: true,
       unique: true
     },
     empresa:{
       type:'string',
       required: true
     }
   }
};