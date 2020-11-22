import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
  // req - lo que enviamos : res - lo que expressnos responde
  res.render('inicio');
});
router.get('/nosotros', (req, res) => {
  const viajes = 'Viajes a Alemania';
  res.render('nosotros', {
    viajes,
  });
});

export default router;
