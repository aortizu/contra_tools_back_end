/**
 * Empleado.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */
module.exports = {
    tableName: 'empleado',
    adapter: 'someMysqlServer',
    migrate: 'safe',
    attributes: {
        nombre: {
            type: 'string',
            required: true
        },
        cargo: {
            type: 'string'
        },
        documento: {
            type: 'string'
        },
        vinculacion: {
            type: 'string'
        },
        comentarios: {
            type: 'string'
        }
    }
};