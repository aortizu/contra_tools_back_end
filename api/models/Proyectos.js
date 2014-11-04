/**
* Proyectos.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
    tableName: 'proyectos',
    adapter: 'someMysqlServer',
    migrate: 'safe',
    attributes: {
        nombre: {
            type: 'string',
            required: true
        },
        inicio: {
            type: 'string',
            required: true
        },
        provista: {
            type: 'string',
            required: true
        },
        real: {
            type: 'string',
            required: true
        },
        activo: {
            type:'boolean',
            required: false
        },
        lugar: {
            type: 'string'
        },
        cliente:{
            type: 'string'
        },
        comentarios:{
            type:'string'
        }
    }
};

