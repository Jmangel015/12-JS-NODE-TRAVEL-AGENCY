import { Viaje } from '../models/Viajes.js';
const paginaInicio = (req, res) => {
  res.render('inicio', {
    pagina: 'Inicio',
  });
};

const paginaNosotros = (req, res) => {
  res.render('nosotros', {
    pagina: 'Nosotros',
  });
};
const paginaViajes = async (req, res) => {
  //Consultar BD
  const viajes = await Viaje.findAll();
  console.log(viajes);
  res.render('viajes', {
    pagina: 'Viajes',
    viajes,
  });
};
const paginaTestimonios = (req, res) => {
  res.render('testimoniales', {
    pagina: 'Testimoniales',
  });
};

const paginaDetalleViaje = async (req, res) => {
  const { slug } = req.params;
  try {
    const viaje = await Viaje.findOne({ where: { slug } });
    res.render('viaje', {
      pagina: 'Informacion Viaje',
      viaje,
    });
  } catch (error) {
    console.log(error);
  }
};
export {
  paginaInicio,
  paginaNosotros,
  paginaViajes,
  paginaTestimonios,
  paginaDetalleViaje,
};
