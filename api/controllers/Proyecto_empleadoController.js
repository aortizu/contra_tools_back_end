/**
 * Proyecto_empleadoController
 *
 * @description :: Server-side logic for managing Proyecto_empleadoes
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
  
    add: function (req, res) {
    Proyecto_empleado.findOneById_proyecto(req.params.id).exec(function (err, usuario) {
      if (err) res.json({ error: 'DB error' }, 500);
      if (usuario) {
         if (usuario.id_proyecto == req.params.id){
           res.json(usuario);
         }else{
           res.json({ error: 'User not found' }, 404);
         }
      } else {
        res.json({ error: 'User not found' }, 404);
      }
    });
  },
	
};

