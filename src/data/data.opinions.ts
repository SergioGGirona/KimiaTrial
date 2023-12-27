export type Opinion = {
  id: number;
  name: string;
  image: string;
  imageDescription: string;
  opinion: string;
  stars: string;
};
export const data: Opinion[] = [
  {
    id: 1,
    name: "Diego Torres",
    image:
      "../../assets/imagenes/hombre-mediana-edad-chaqueta-riendo-feliz.jpg",
    imageDescription: "Hombre riendo mirando a cámara",
    opinion:
      "¡Vaya hallazgo!:A Gracias a esta web, me llamaron y no me cobraron nada. Enseguida me pusieron en contacto con instaladores y ya tengo placas en casa funcionando.",
    stars: "../../assets/imagenes/fiveStars.svg",
  },
  {
    id: 2,
    name: "Manuel Herrera",
    image: "../../assets/imagenes/portrait-young-man-street.jpg",
    imageDescription: "Hombre feliz mirando a cámara",

    opinion:
      "Increíblemente útil. No tenía idea de por dónde empezar en mi búsqueda de paneles solares, pero esta plataforma me lo facilitó todo. Mis nuevas placas funcionan de maravilla y ya estoy ahorrando dinero.",
    stars: "../../assets/imagenes/fourStars.svg",
  },
  {
    id: 3,
    name: "Marta Díaz",
    imageDescription: "Mujer mayor riendo mirando a cámara",
    image:
      "../../assets/imagenes/retrato-abuela-sonriente-imagen-ilustracion-hermosa-ia-generativa.jpg",
    opinion:
      "Nunca había dejado una reseña antes, pero estoy tan impresionada con la rapidez y calidad del servicio que sentía que debía hacerlo. Me pusieron en contacto con mi instalador super rápido y él también vino enseguida.",
    stars: "../../assets/imagenes/fiveStars.svg",
  },
  {
    id: 4,
    name: "Beatriz R. Medina",
    image:
      "../../assets/imagenes/mi-lema-siempre-ha-sido-ser-audaz-retrato-empresaria-madura-sentada-oficina.jpg",
    imageDescription: "Mujer empresaria contenta mirando a cámara",
    opinion:
      "Me ahorré tiempo y dinero. Me pusieron en contacto inmediatamente con profesionales competentes y pude elegir la mejor opción para mi casa. Además me ayudaron con las subvenciones.",
    stars: "../../assets/imagenes/fiveStars.svg",
  },
];
