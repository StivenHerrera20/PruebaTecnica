const router = require("express").Router();
const { Op } = require('sequelize');
const { animals, sequelize } = require("../../models/conexion");


router.get('/search', async (req, res) => {
    try {
      const { name } = req.query;
      /* No se envian datos */
      if (!name) {
        return res.status(400).json({ error: 'Debes ingresar un nombre de un animal.' });
      }
  
      // Buscar animales cuyo nombre sea similar al proporcionado
      const animalsRes = await animals.findAll({
        where: {
          name: {
            [Op.like]: `%${name}%`,
          },
        },
      });
  
      /* Valida si hay animales */
      if (animalsRes.length === 0) {
        return res.status(404).json({ message: `No se encontraron animales que coincidan con ${name}.` });
      }

      res.json(animalsRes);
      
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error al buscar animales' });
    }
  });

module.exports = router;