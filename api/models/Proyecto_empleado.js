/**
* Proyecto_empleado.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

    tableName: 'proyecto_empleado',
    adapter: 'someMysqlServer',
    migrate: 'safe',
    attributes: {
        nombre_proyecto: {
            type: 'string',
            required: true
        },
        id_proyecto: {
            type: 'int',
            required: true
        },
        ids_empleados: {
            type: 'string',
            required: true
        }
    }
};

