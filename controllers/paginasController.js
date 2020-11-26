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
const paginaViajes = (req, res) => {
  res.render('viajes', {
    pagina: 'Viajes',
  });
};
const paginaTestimonios = (req, res) => {
  res.render('testimoniales', {
    pagina: 'Testimoniales',
  });
};
export { paginaInicio, paginaNosotros, paginaViajes, paginaTestimonios };
