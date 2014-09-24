/**
* Usuario.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
   tableName: 'usuario',
   adapter: 'someMysqlServer',
   migrate: 'alter',

   /* beforeCreate: function (attrs, next) {
    var bcrypt = require('bcrypt');

    bcrypt.genSalt(10, function(err, salt) {
      if (err) return next(err);

      bcrypt.hash(attrs.password, salt, function(err, hash) {
        if (err) return next(err);

        attrs.password = hash;
        next();
      });
    });
  },*/
  
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

