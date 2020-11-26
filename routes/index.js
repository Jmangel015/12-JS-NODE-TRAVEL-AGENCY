import express from 'express';
import {
  paginaInicio,
  paginaNosotros,
  paginaViajes,
  paginaTestimonios,
} from '../controllers/paginasController.js';

const router = express.Router();

router.get('/', paginaInicio);
// req - lo que enviamos : res - lo que expressnos responde

router.get('/nosotros', paginaNosotros);
router.get('/viajes', paginaViajes);
router.get('/testimoniales', paginaTestimonios);
export default router;
