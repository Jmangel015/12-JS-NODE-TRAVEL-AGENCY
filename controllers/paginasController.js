import { Viaje } from '../models/Viajes.js';
import { Testimonial } from '../models/Testimoniales.js';
const paginaInicio = async (req, res) => {
  //consultar modelo
  const promiseBd = [];
  promiseBd.push(Viaje.findAll({ limit: 3 }));
  promiseBd.push(Testimonial.findAll({ limit: 3 }));

  try {
    const resultado = await Promise.all(promiseBd);

    res.render('inicio', {
      pagina: 'Inicio',
      clase: 'home',
      viajes: resultado[0],
      testimoniales: resultado[1],
    });
  } catch (error) {
    console.log(error);
  }
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
const paginaTestimonios = async (req, res) => {
  try {
    const testimoniales = await Testimonial.findAll();

    res.render('testimoniales', {
      pagina: 'Testimoniales',
      testimoniales,
    });
  } catch (error) {
    console.log(error);
  }
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
