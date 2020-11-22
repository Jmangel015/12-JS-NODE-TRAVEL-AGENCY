import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
  // req - lo que enviamos : res - lo que expressnos responde
  res.send('Inicio');
});
router.get('/nosotros', (req, res) => {
  // req - lo que enviamos : res - lo que expressnos responde
  res.send('Nosotros');
});
router.get('/contacto', (req, res) => {
  // req - lo que enviamos : res - lo que expressnos responde
  res.send('Contacto');
});

export default router;
