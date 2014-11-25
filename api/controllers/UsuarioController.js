/**
 * UsuarioController
 *
 * @module		:: Controller
 * @description	:: Contains logic for handling requests.
 */

module.exports = {


  login: function (req, res) {
    var bcrypt = require('bcrypt');

    User.findOneByUsuario(req.body.usuario).exec(function (err, usuario) {
      if (err) res.json({ error: 'DB error' }, 500);

      if (usuario) {
        bcrypt.compare(req.body.password, usuario.password, function (err, match) {
          if (err) res.json({ error: 'Server error' }, 500);

          if (match) {
            // password match
            req.session.usuario = usuario.id;
            res.json(usuario);
          } else {
            // invalid password
            if (req.session.usuario) req.session.usuario = null;
            res.json({ error: 'Invalid password' }, 400);
          }
        });
      } else {
        res.json({ error: 'User not found' }, 404);
      }
    });
  },
  

};