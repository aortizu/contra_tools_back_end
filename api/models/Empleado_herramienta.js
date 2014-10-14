/**
* Empleado_herramienta.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  tableName: 'empleado_herramienta',
    adapter: 'someMysqlServer',
    migrate: 'safe',
    attributes: {
        nombre_empleado: {
            type: 'string',
            required: true
        },
        id_empleado: {
            type: 'int',
            required: true
        },
        nombre_herramienta: {
            type: 'string',
            required: true
        },
        id_herramienta: {
            type: 'int',
            required: true
        }
    }
};

