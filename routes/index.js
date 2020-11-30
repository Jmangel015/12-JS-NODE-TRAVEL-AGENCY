import express from 'express';
import {
  paginaInicio,
  paginaNosotros,
  paginaViajes,
  paginaDetalleViaje,
  paginaTestimonios,
} from '../controllers/paginasController.js';

const router = express.Router();

router.get('/', paginaInicio);
// req - lo que enviamos : res - lo que expressnos responde

router.get('/nosotros', paginaNosotros);
router.get('/viajes', paginaViajes);
router.get('/viajes/:slug', paginaDetalleViaje);
router.get('/testimoniales', paginaTestimonios);
export default router;
