// Contenido del sitio en español (es) e inglés (en).
// Para editar textos, precios o fotos, cambia este archivo y vuelve a publicar.

export type Lang = 'es' | 'en';
export type T = Record<Lang, string>;

export const SITE = {
  name: 'Loma Nevada Minca Hotel',
  url: 'https://lomanevada.com',
  phone: '+573127960054',
  phoneDisplay: '+57 312 796 0054',
  landline: '+57 5 420 9651',
  email: 'contacto@lomanevada.com',
  address: {
    street: 'Vereda El Campano, lote 19',
    locality: 'Minca, Santa Marta',
    region: 'Magdalena',
    country: 'CO',
  },
  mapsUrl: 'https://maps.app.goo.gl/mYwiSKwuz8nwrme49',
  instagram: 'https://www.instagram.com/lomanevada/',
  facebook: 'https://www.facebook.com/lomanevada/',
  booking: 'http://www.booking.com/Share-yeLd99z',
  rating: '4.7',
  // Registro Nacional de Turismo del hotel. Al llenarlo aparece en el pie de página.
  rnt: '',
  // Motor de reservas externo. La página solo envía al huésped a esta dirección con
  // ?checkin=AAAA-MM-DD&checkout=AAAA-MM-DD&adults=N&kids=N&currency=cop
  // Para cambiar de motor (por ejemplo, uno propio), basta con cambiar esta línea.
  bookingEngine: 'https://hotels.cloudbeds.com/{lang}/reservation/maXuQ9',
  // Contador de visitas: se muestra esta base + las visitas reales desde la publicación.
  visitsBase: 35000,
};

export function waLink(text: string) {
  return `https://wa.me/${SITE.phone.replace('+', '')}?text=${encodeURIComponent(text)}`;
}

export const UI = {
  stays: { es: 'Estancias', en: 'Stays' },
  ambients: { es: 'Ambientes', en: 'Environments' },
  services: { es: 'Servicios', en: 'Services' },
  about: { es: 'Acerca de', en: 'About' },
  contact: { es: 'Contacto', en: 'Contact' },
  bookWa: { es: 'Reserva por WhatsApp', en: 'Book by WhatsApp' },
  bookDirect: {
    es: 'Reserva directamente con nosotros al mejor precio',
    en: 'Book directly with us at the best price',
  },
  avgRating: { es: 'Valoración promedio', en: 'Average rating' },
  bookOne: { es: 'Reserva alguna de nuestras estancias', en: 'Book one of our stays' },
  liveNature: { es: 'Vive la naturaleza en Loma Nevada', en: 'Live nature at Loma Nevada' },
  visitUs: { es: 'Visítanos', en: 'Visit us' },
  visitText: {
    es: 'Ven y visita el Paraíso Idílico Colombiano, donde la naturaleza encuentra su descanso.',
    en: 'Come and visit the Idyllic Colombian Paradise, where nature finds its rest.',
  },
  tagline: { es: 'Paraíso idílico de Colombia', en: 'Idyllic paradise of Colombia' },
  heroSub: {
    es: 'A 1.500 metros de altura, con vista al Mar Caribe, en la Sierra Nevada de Santa Marta',
    en: 'At 1,500 meters high, overlooking the Caribbean Sea, in the Sierra Nevada de Santa Marta',
  },
  seeMore: { es: 'Ver más', en: 'See more' },
  people: { es: 'personas', en: 'people' },
  includes: { es: 'Incluye', en: 'Includes' },
  details: { es: 'Detalles', en: 'Details' },
  openMap: { es: 'Abrir en Google Maps', en: 'Open in Google Maps' },
  faq: { es: 'Preguntas frecuentes', en: 'Frequent questions' },
  privacy: { es: 'Manejo de datos personales', en: 'Handling of personal data' },
  conduct: { es: 'Código de conducta', en: 'Code of conduct' },
  quality: { es: 'Política de gestión de calidad', en: 'Quality management policy' },
  aboutUs: { es: 'Quiénes somos', en: 'About us' },
  gallery: { es: 'Galería', en: 'Gallery' },
  close: { es: 'Cerrar', en: 'Close' },
  prev: { es: 'Anterior', en: 'Previous' },
  next: { es: 'Siguiente', en: 'Next' },
  menu: { es: 'Menú', en: 'Menu' },
  allRights: { es: 'Todos los derechos reservados.', en: 'All rights reserved.' },
  form: {
    name: { es: 'Nombre', en: 'First name' },
    last: { es: 'Apellidos', en: 'Last name' },
    phone: { es: 'Teléfono', en: 'Phone' },
    email: { es: 'Correo electrónico', en: 'Email' },
    message: { es: 'Mensaje', en: 'Message' },
    send: { es: 'Enviar', en: 'Send' },
    sending: { es: 'Enviando…', en: 'Sending…' },
    ok: { es: '¡Gracias! Te responderemos pronto.', en: 'Thank you! We will reply soon.' },
    error: {
      es: 'No se pudo enviar. Escríbenos por WhatsApp, por favor.',
      en: 'It could not be sent. Please write to us on WhatsApp.',
    },
    consent: {
      es: 'Al enviar aceptas nuestra política de manejo de datos personales.',
      en: 'By sending you accept our personal data policy.',
    },
  },
  waGreeting: { es: 'Hola, vengo de su sitio web', en: 'Hi, I come from your website' },
} satisfies Record<string, unknown>;

/* ---------- Estancias ---------- */

const COMMON_STAY = {
  coffee: { es: 'Todos los días de 6:30 am a 9:00 am', en: 'Every day from 6:30 am to 9:00 am' },
  areas: {
    es: 'Restaurante, bar, piscina, fogata y malla-red',
    en: 'Restaurant, bar, pool, bonfire and mesh-net',
  },
  fun: {
    es: 'Senderismo, avistamiento de aves y caminata ecológica con guía',
    en: 'Hiking, bird watching and guided ecological walk',
  },
  wifi: {
    es: 'En zonas comunes: lobby, recepción, restaurante, bar, piscina y fogata',
    en: 'In common areas: lobby, reception, restaurant, bar, pool and bonfire',
  },
  checkIn: '3:00 PM',
  checkOut: '12:00 M',
};
export { COMMON_STAY };

export type Stay = {
  key: string;
  slug: T;
  title: T;
  view: T;
  area: number;
  capacity: number;
  doubleBeds: number;
  bunks: number;
  bath: 'private' | 'shared';
  images: string[]; // rutas relativas a src/assets/img
  /** Precio por noche desde (COP). Si se deja vacío, no se muestra. */
  priceFrom?: number;
};

const MOUNTAIN = { es: 'Montaña', en: 'Mountain' };

export const STAYS: Stay[] = [
  {
    key: 'elite',
    slug: { es: 'cabana-privada-2', en: 'habitacion-privada' },
    title: { es: 'Cabaña Elite', en: 'Elite Cabin' },
    view: { es: 'Ciudad y el mar', en: 'City and the sea' },
    area: 24, capacity: 2, doubleBeds: 1, bunks: 0, bath: 'private',
    images: ['cabanas/elite-1.jpg', 'cabanas/elite-2.jpg', 'cabanas/elite-3.jpg', 'cabanas/elite-4.jpg', 'cabanas/elite-5.jpg', 'cabanas/elite-6.jpg'],
  },
  {
    key: 'deluxe',
    slug: { es: 'cabana-premium', en: 'room-premium' },
    title: { es: 'Cabaña Deluxe', en: 'Deluxe Cabin' },
    view: MOUNTAIN,
    area: 24, capacity: 2, doubleBeds: 1, bunks: 0, bath: 'private',
    images: ['cabanas/deluxe-1.jpg', 'cabanas/deluxe-2.jpg', 'cabanas/deluxe-3.jpg', 'cabanas/deluxe-4.jpg', 'cabanas/deluxe-5.jpg', 'cabanas/deluxe-6.jpg', 'cabanas/deluxe-7.jpg'],
  },
  {
    key: 'premium',
    slug: { es: 'premium-2', en: 'premium-3' },
    title: { es: 'Cabaña Premium', en: 'Premium Cabin' },
    view: MOUNTAIN,
    area: 22, capacity: 2, doubleBeds: 1, bunks: 0, bath: 'private',
    images: ['cabanas/premium-1.jpg', 'cabanas/premium-2.jpg', 'cabanas/premium-3.jpg', 'cabanas/premium-4.jpg', 'cabanas/premium-5.jpg'],
  },
  {
    key: 'mega',
    slug: { es: 'cabana-familiar-mega', en: 'family-room-mega' },
    title: { es: 'Cabaña Mega Familiar', en: 'Mega Family Cabin' },
    view: MOUNTAIN,
    area: 48, capacity: 8, doubleBeds: 1, bunks: 3, bath: 'private',
    images: ['cabanas/mega-1.jpg', 'cabanas/mega-2.jpg', 'cabanas/mega-3.jpg', 'cabanas/mega-4.jpg', 'cabanas/mega-5.jpg'],
  },
  {
    key: 'familiar',
    slug: { es: 'cabana-familiar', en: 'family-room' },
    title: { es: 'Cabaña Familiar', en: 'Family Cabin' },
    view: MOUNTAIN,
    area: 45, capacity: 6, doubleBeds: 1, bunks: 2, bath: 'private',
    images: ['cabanas/familiar-1.jpg', 'cabanas/familiar-2.jpg', 'cabanas/familiar-3.jpg', 'cabanas/familiar-4.jpg', 'cabanas/familiar-5.jpg'],
  },
  {
    key: 'energy',
    slug: { es: 'cabana-energy', en: 'energy-cabin' },
    title: { es: 'Cabaña Energy', en: 'Energy Cabin' },
    view: MOUNTAIN,
    area: 15, capacity: 2, doubleBeds: 1, bunks: 0, bath: 'shared',
    images: ['cabanas/energy-1.jpg', 'cabanas/energy-2.jpg', 'cabanas/energy-3.jpg', 'cabanas/energy-4.jpg', 'cabanas/energy-5.jpg'],
  },
  {
    key: 'camping',
    slug: { es: 'iglu-doble', en: 'double-igloo' },
    title: { es: 'Camping', en: 'Camping' },
    view: MOUNTAIN,
    area: 4, capacity: 2, doubleBeds: 1, bunks: 0, bath: 'shared',
    images: ['cabanas/camping-1.jpg', 'cabanas/camping-2.jpg', 'cabanas/camping-3.jpg', 'cabanas/camping-4.jpg'],
  },
];

/* ---------- Ambientes ---------- */

export type Ambient = {
  key: string;
  slug: T;
  title: T;
  text: T;
  thumb: string;
  images: string[];
};

export const AMBIENTS: Ambient[] = [
  {
    key: 'lobby',
    slug: { es: 'sala-de-espera', en: 'lobby' },
    title: { es: 'Sala de espera', en: 'Lobby' },
    text: {
      es: 'Amplio espacio con una espectacular vista del mar Caribe, ideal para compartir con familiares y amigos.',
      en: 'A wide space with a spectacular view of the Caribbean Sea, ideal for sharing with family and friends.',
    },
    thumb: 'ambientes/lobby-0.jpg',
    images: ['ambientes/lobby-2.jpg', 'ambientes/lobby-3.jpg', 'ambientes/lobby-1.jpg'],
  },
  {
    key: 'restaurante',
    slug: { es: 'restaurante-bar', en: 'restaurant-bar' },
    title: { es: 'Restaurante', en: 'Restaurant' },
    text: {
      es: 'Amplio espacio con una espectacular vista 360° donde se observa el mar Caribe, la Ciénaga Grande de Santa Marta y senderos de la Sierra Nevada, espacio ideal para departir con familiares y amigos.',
      en: 'A large space with a spectacular 360° view where you can see the Caribbean Sea, the Ciénaga Grande de Santa Marta and trails of the Sierra Nevada, an ideal place to share with family and friends.',
    },
    thumb: 'ambientes/restaurante-0.jpg',
    images: ['ambientes/restaurante-1.jpg', 'ambientes/restaurante-2.jpg'],
  },
  {
    key: 'bar',
    slug: { es: 'casa-hamaca-bar', en: 'hammock-house-bar' },
    title: { es: 'Casa Hamaca Bar', en: 'Hammock House Bar' },
    text: {
      es: 'Espacio con una espectacular vista de 180° donde se puede apreciar el mar Caribe, la Ciénaga Grande de Santa Marta y senderos de la Sierra Nevada, un lugar ideal para compartir en familia y amigos.',
      en: 'A space with a spectacular 180° view where you can see the Caribbean Sea, the Ciénaga Grande de Santa Marta and trails of the Sierra Nevada, an ideal place to share with family and friends.',
    },
    thumb: 'ambientes/bar-0.jpg',
    images: ['ambientes/bar-1.jpg', 'ambientes/bar-2.jpg'],
  },
  {
    key: 'gimnasio',
    slug: { es: 'gimnasio', en: 'gym' },
    title: { es: 'Gimnasio', en: 'Gym' },
    text: {
      es: 'Espacio ideal para las personas amantes del deporte, que desean descansar pero no abandonar su rutina de ejercicios.',
      en: 'The ideal space for sports lovers who want to rest without abandoning their exercise routine.',
    },
    thumb: 'ambientes/gimnasio-0.jpg',
    images: ['ambientes/gimnasio-1.jpg', 'ambientes/gimnasio-2.jpg'],
  },
  {
    key: 'piscina',
    slug: { es: 'piscina', en: 'pool' },
    title: { es: 'Piscina', en: 'Pool' },
    text: {
      es: 'Nuestro oasis de montaña, donde la magia del agua y la altitud se fusionan en armonía. Sumérgete en nuestra piscina de agua natural a 1.500 metros sobre el nivel del mar y descubre la perfecta combinación de frescura y serenidad. Con vistas panorámicas que te dejarán sin aliento y una temperatura refrescante, este paraíso acuático te invita a relajarte y rejuvenecer en medio de la majestuosidad de la naturaleza. ¡Ven y descubre la serenidad elevada en nuestro cautivador oasis de piscina de altura!',
      en: 'Our mountain oasis, where the magic of water and altitude merge in harmony. Immerse yourself in our natural water pool at 1,500 meters above sea level and discover the perfect combination of freshness and serenity. With breathtaking panoramic views and a refreshing temperature, this aquatic paradise invites you to relax and rejuvenate amidst the majesty of nature. Come discover elevated serenity in our captivating high-altitude pool!',
    },
    thumb: 'ambientes/piscina-0.jpg',
    images: ['ambientes/piscina-1.jpg', 'ambientes/piscina-2.jpg', 'ambientes/piscina-3.jpg', 'ambientes/piscina-4.jpg'],
  },
  {
    key: 'malla',
    slug: { es: 'malla-hamaca', en: 'mesh-hammock' },
    title: { es: 'Malla – Hamaca', en: 'Mesh – Hammock' },
    text: {
      es: 'En Loma Nevada contamos con una espectacular malla – hamaca, con certificación industrial de resistencia, en la cual podrás relajarte y compartir con tus acompañantes.',
      en: 'At Loma Nevada we have a spectacular mesh – hammock, with industrial resistance certification, where you can relax and share with your companions.',
    },
    thumb: 'ambientes/malla-0.jpg',
    images: ['ambientes/malla-1.jpg', 'ambientes/malla-2.jpg'],
  },
  {
    key: 'fogata',
    slug: { es: 'fogata', en: 'wood-fire' },
    title: { es: 'Fogata', en: 'Bonfire' },
    text: {
      es: 'Experimenta el sentimiento de sentarte frente a una fogata y observar la ciudad de Santa Marta desde 1.500 metros de altura.',
      en: 'Experience the feeling of sitting in front of a bonfire and watching the city of Santa Marta from 1,500 meters high.',
    },
    thumb: 'ambientes/fogata-0.jpg',
    images: ['ambientes/fogata-1.jpg', 'ambientes/fogata-2.jpg', 'ambientes/fogata-3.jpg'],
  },
];

/* ---------- Servicios ---------- */

export type Service = {
  key: 'pasadia' | 'transporte' | 'restaurante' | 'recorridos' | 'wifi' | 'senderismo';
  slug: T;
  title: T;
  intro: T;
  thumb: string;
  images: string[];
};

export const SERVICES: Service[] = [
  {
    key: 'pasadia',
    slug: { es: 'pasadia', en: 'pass' },
    title: { es: 'Pasadía', en: 'Day pass' },
    intro: {
      es: 'Pasa el día en Loma Nevada y disfruta de todos nuestros ambientes, de 8:00 a.m. a 5:00 p.m.',
      en: 'Spend the day at Loma Nevada and enjoy all our spaces, from 8:00 a.m. to 5:00 p.m.',
    },
    thumb: 'ambientes/piscina-1.jpg',
    images: ['servicios/pasadia.png'],
  },
  {
    key: 'transporte',
    slug: { es: 'transporte', en: 'transport' },
    title: { es: 'Transporte', en: 'Transport' },
    intro: {
      es: 'Te coordinamos el transporte desde Santa Marta o Minca hasta Loma Nevada.',
      en: 'We coordinate your transport from Santa Marta or Minca to Loma Nevada.',
    },
    thumb: 'hero/hero-7.jpg',
    images: ['servicios/transporte.jpg'],
  },
  {
    key: 'restaurante',
    slug: { es: 'restaurante-2', en: 'restaurant' },
    title: { es: 'Restaurante', en: 'Restaurant' },
    intro: {
      es: 'Desayuno, almuerzo y cena con vista al mar Caribe. Escanea el código QR para ver la carta.',
      en: 'Breakfast, lunch and dinner overlooking the Caribbean Sea. Scan the QR code to see the menu.',
    },
    thumb: 'servicios/restaurante.jpg',
    images: ['servicios/restaurante.jpg'],
  },
  {
    key: 'recorridos',
    slug: { es: 'recorridos-ecologicos', en: 'ecological-walks' },
    title: { es: 'Recorridos ecológicos', en: 'Ecological tours' },
    intro: {
      es: 'Ríos, cascadas, café y montaña: recorridos guiados desde Loma Nevada.',
      en: 'Rivers, waterfalls, coffee and mountains: guided tours from Loma Nevada.',
    },
    thumb: 'hero/hero-4.jpg',
    images: ['servicios/recorridos.jpg'],
  },
  {
    key: 'wifi',
    slug: { es: 'zona-wifi', en: 'wifi-zone' },
    title: { es: 'Zona wifi', en: 'Wifi zone' },
    intro: {
      es: 'Wifi gratis en las zonas comunes: lobby, recepción, restaurante, bar, piscina y fogata.',
      en: 'Free wifi in common areas: lobby, reception, restaurant, bar, pool and bonfire.',
    },
    thumb: 'ambientes/lobby-2.jpg',
    images: ['servicios/wifi.jpg'],
  },
  {
    key: 'senderismo',
    slug: { es: 'senderismo', en: 'trekking' },
    title: { es: 'Senderismo', en: 'Trekking' },
    intro: {
      es: 'Loma Nevada – Minca – Loma Nevada: 27,3 kilómetros de aventura, paisaje, naturaleza y vida.',
      en: 'Loma Nevada – Minca – Loma Nevada: 27.3 kilometers of adventure, landscape, nature and life.',
    },
    thumb: 'naturaleza/n4.jpg',
    images: ['servicios/senderismo.jpg'],
  },
];

/* ---------- Datos de los flyers, pasados a texto ---------- */

export const PASADIA = {
  price: '$100.000 COP',
  consumable: '$70.000',
  hours: { es: '8:00 a.m. a 5:00 p.m.', en: '8:00 a.m. to 5:00 p.m.' },
  includes: {
    es: ['Piscina manantial', 'Casa Hamaca', 'Terraza restaurante', 'Avistamiento de aves', 'Gimnasio', 'Senderos'],
    en: ['Spring-water pool', 'Hammock House', 'Restaurant terrace', 'Bird watching', 'Gym', 'Trails'],
  },
  consumableNote: {
    es: '$70.000 del pasadía son consumibles en el restaurante, en bebidas o en licores.',
    en: '$70,000 of the day pass can be spent at the restaurant, on drinks or liquor.',
  },
  kids: {
    es: 'Niños menores de 5 años no pagan entrada, solo el consumo.',
    en: 'Children under 5 do not pay entrance, only what they consume.',
  },
  perPerson: { es: 'Precio por persona', en: 'Price per person' },
};

export const TRANSPORT = {
  summary: {
    es: 'A 26 kilómetros de Santa Marta, a un tiempo de 70 minutos y a 1.500 msnm.',
    en: '26 kilometers from Santa Marta, about 70 minutes away, at 1,500 m above sea level.',
  },
  legs: [
    { from: 'Santa Marta', fromAlt: 0, to: 'Minca', toAlt: 620, km: '15', min: 35,
      how: { es: 'Transporte público, o moto desde El Yucal', en: 'Public transport, or motorbike from El Yucal' } },
    { from: 'Minca', fromAlt: 620, to: 'El Campano', toAlt: 1295, km: '8,5', min: 45,
      how: { es: 'Moto, o transporte exclusivo 4x4 hasta 6 personas', en: 'Motorbike, or exclusive 4x4 transport for up to 6 people' } },
    { from: 'El Campano', fromAlt: 1295, to: 'Loma Nevada', toAlt: 1495, km: '2,5', min: 10,
      how: { es: 'Moto, o transporte exclusivo 4x4 hasta 6 personas', en: 'Motorbike, or exclusive 4x4 transport for up to 6 people' } },
  ],
  notes: {
    es: [
      'Loma Nevada coordina el desplazamiento, pero el pago lo hace el huésped directamente al transportador.',
      'Los traslados desde El Yucal hacia destinos diferentes tienen recargos adicionales.',
      'El valor del traslado en motocicleta es desde El Yucal.',
      'Los tiempos entre trayectos son promedios en carro o en moto.',
      'El valor del transporte no se incluye en la reserva; se paga en el momento en que se utilice.',
    ],
    en: [
      'Loma Nevada coordinates the trip, but the guest pays the driver directly.',
      'Transfers from El Yucal to other destinations have additional charges.',
      'Motorbike fares are from El Yucal.',
      'Travel times are averages by car or motorbike.',
      'Transport is not included in the booking; it is paid when used.',
    ],
  },
  ask: {
    es: 'Consulta los valores con nuestro asesor de reservas.',
    en: 'Ask our booking advisor for current fares.',
  },
};

export const TOURS = [
  { dest: { es: 'Quebrada El Jabalí', en: 'El Jabalí River' }, time: '10:00 a.m.',
    how: { es: 'Caminando', en: 'Walking' }, duration: { es: '35 minutos', en: '35 minutes' }, price: '$10.000' },
  { dest: { es: 'Cascada El Jaguar', en: 'El Jaguar Waterfall' }, time: '9:00 a.m.',
    how: { es: '45 min en motocicleta y 35 min caminando', en: '45 min by motorbike and 35 min walking' },
    duration: { es: '80 minutos', en: '80 minutes' }, price: '$120.000' },
  { dest: { es: 'Recorrido cafetero', en: 'Coffee tour' }, time: '9:00 a.m.',
    how: { es: 'Motocicleta', en: 'Motorbike' }, duration: { es: '8 horas aprox.', en: 'About 8 hours' }, price: '$250.000',
    note: {
      es: 'Incluye transporte en motocicleta, entrada a la cascada de Marinka, almuerzo en Minca y entrada a la Finca La Victoria.',
      en: 'Includes motorbike transport, entrance to the Marinka waterfalls, lunch in Minca and entrance to Finca La Victoria.',
    } },
  { dest: { es: 'Cerro Kennedy', en: 'Cerro Kennedy' }, time: '3:00 a.m.',
    how: { es: 'Motocicleta', en: 'Motorbike' }, duration: { es: '2,5 horas', en: '2.5 hours' }, price: '$130.000' },
];

export const TREK_POINTS = [
  { n: 1, alt: '1.495', place: 'Loma Nevada' },
  { n: 2, alt: '1.291', place: 'El Campano' },
  { n: 3, alt: '1.364', place: 'Los Pinos' },
  { n: 4, alt: '754', place: 'Cascadas de Marinka' },
  { n: 5, alt: '631', place: 'Minca' },
  { n: 6, alt: '782', place: 'Pozo Azul' },
  { n: 7, alt: '1.043', place: 'Entrada a La Victoria' },
];

/* ---------- Páginas fijas ---------- */

export const PAGES = {
  home: { es: '', en: '' },
  ambients: { es: 'ambientes-2', en: 'ambientes' },
  faq: { es: 'preguntas-frecuentes', en: 'frequent-questions' },
  privacy: { es: 'manejo-de-datos-personales', en: 'handling-of-personal-data' },
  contact: { es: 'contacto-2', en: 'contacto' },
  about: { es: 'quienes-somos-2', en: 'quienes-somos' },
  conduct: { es: 'codigo-de-conducta', en: 'code-of-conduct' },
  quality: { es: 'politica-de-gestion-de-calidad', en: 'quality-politics' },
} satisfies Record<string, T>;

export function href(lang: Lang, slug: string) {
  // Portada: español en la raíz (/), inglés en /en/. Páginas internas: /es/... y /... (URLs del sitio anterior).
  if (lang === 'es') return slug ? `/es/${slug}/` : '/';
  return slug ? `/${slug}/` : '/en/';
}

export const ABOUT = {
  es: 'Loma Nevada Minca Hotel está ubicado a 1.500 metros de altura con vista hacia el mar Caribe, en la Sierra Nevada de Santa Marta, Colombia. Es un espacio donde el descanso y el placer por disfrutar la naturaleza presentan su mejor combinación. En un ambiente ecológico, con alojamiento en cabañas privadas, cabañas familiares y zona de camping. Todas nuestras cabañas están hechas en madera de pino inmunizado y reforestado, traída de Rionegro (Antioquia): no se cortó un solo árbol de la región para construir el hotel. Abrimos nuestras puertas el 8 de diciembre de 2018. Haz tu reserva ya. ¡Te esperamos!',
  en: 'Loma Nevada Minca Hotel is located 1,500 meters high overlooking the Caribbean Sea, in the Sierra Nevada de Santa Marta, Colombia. It is a place where rest and the pleasure of enjoying nature come together at their best. In an ecological setting, with accommodation in private cabins, family cabins and a camping area. All our cabins are built from treated, reforested pine wood brought from Rionegro (Antioquia): not a single tree in the region was cut to build the hotel. We opened our doors on December 8, 2018. Book now. We are waiting for you!',
};

export const PRIVACY: Record<Lang, { title: string; sections: { h?: string; p: string[] }[]; docs: { label: string; file: string }[] }> = {
  es: {
    title: 'Política de privacidad',
    sections: [
      { p: ['La presente Política de Privacidad establece los términos en que www.lomanevada.com usa y protege la información que es proporcionada por sus usuarios al momento de utilizar su sitio web. Esta compañía está comprometida con la seguridad de los datos de sus usuarios. Cuando le pedimos llenar los campos de información personal con la cual usted pueda ser identificado, lo hacemos asegurando que sólo se empleará de acuerdo con los términos de este documento. Sin embargo, esta Política de Privacidad puede cambiar con el tiempo o ser actualizada, por lo que le recomendamos y enfatizamos revisar continuamente esta página para asegurarse de que está de acuerdo con dichos cambios.'] },
      { h: 'Información que es recogida', p: ['Nuestro sitio web podrá recoger información personal, por ejemplo: nombre, información de contacto como su dirección de correo electrónico e información demográfica. Así mismo, cuando sea necesario, podrá ser requerida información específica para procesar algún pedido o realizar una entrega o facturación.'] },
      { h: 'Uso de la información recogida', p: ['Nuestro sitio web emplea la información con el fin de proporcionar el mejor servicio posible, particularmente para mantener un registro de usuarios, de pedidos en caso de que aplique, y mejorar nuestros productos y servicios. Es posible que sean enviados correos electrónicos periódicamente a través de nuestro sitio con ofertas especiales, nuevos productos y otra información publicitaria que consideremos relevante para usted o que pueda brindarle algún beneficio; estos correos electrónicos serán enviados a la dirección que usted proporcione y podrán ser cancelados en cualquier momento.'] },
      { h: 'Cookies', p: [
        'Una cookie se refiere a un fichero que es enviado con la finalidad de solicitar permiso para almacenarse en su ordenador; al aceptar dicho fichero se crea y la cookie sirve entonces para tener información respecto al tráfico web, y también facilita las futuras visitas a una web recurrente. Otra función que tienen las cookies es que con ellas las webs pueden reconocerle individualmente y por tanto brindarle el mejor servicio personalizado.',
        'Nuestro sitio web emplea las cookies para poder identificar las páginas que son visitadas y su frecuencia. Esta información es empleada únicamente para análisis estadístico y después la información se elimina de forma permanente. Usted puede eliminar las cookies en cualquier momento desde su ordenador. Las cookies no dan acceso a información de su ordenador ni de usted, a menos de que usted así lo quiera y la proporcione directamente. Usted puede aceptar o negar el uso de cookies; también puede cambiar la configuración de su ordenador para declinarlas. Si se declinan, es posible que no pueda utilizar algunos de nuestros servicios.',
      ] },
      { h: 'Enlaces a terceros', p: ['Este sitio web pudiera contener enlaces a otros sitios que pudieran ser de su interés. Una vez que usted dé clic en estos enlaces y abandone nuestra página, ya no tenemos control sobre el sitio al que es redirigido y por lo tanto no somos responsables de los términos o privacidad ni de la protección de sus datos en esos otros sitios. Dichos sitios están sujetos a sus propias políticas de privacidad, por lo cual es recomendable que los consulte para confirmar que usted está de acuerdo con estas.'] },
      { h: 'Control de su información personal', p: [
        'En cualquier momento usted puede restringir la recopilación o el uso de la información personal que es proporcionada a nuestro sitio web. Cada vez que se le solicite rellenar un formulario, puede marcar o desmarcar la opción de recibir información por correo electrónico. En caso de que haya marcado la opción de recibir nuestro boletín o publicidad, usted puede cancelarla en cualquier momento.',
        'Esta compañía no venderá, cederá ni distribuirá la información personal que es recopilada sin su consentimiento, salvo que sea requerido por un juez con una orden judicial.',
        'www.lomanevada.com se reserva el derecho de cambiar los términos de la presente Política de Privacidad en cualquier momento.',
      ] },
    ],
    docs: [
      { label: 'Aviso de privacidad', file: '/docs/aviso-privacidad.pdf' },
      { label: 'Referencia monitoreo de cámaras', file: '/docs/monitoreo-camaras.pdf' },
      { label: 'Política de tratamiento de la información', file: '/docs/politica-tratamiento-informacion.pdf' },
    ],
  },
  en: {
    title: 'Privacy policy',
    sections: [
      { p: ['This Privacy Policy establishes the terms in which www.lomanevada.com uses and protects the information provided by its users when using its website. This company is committed to the security of its users’ data. When we ask you to fill in personal information with which you can be identified, we do so ensuring that it will only be used in accordance with the terms of this document. This Privacy Policy may change over time or be updated, so we recommend that you review this page regularly to make sure you agree with any changes.'] },
      { h: 'Information that is collected', p: ['Our website may collect personal information such as your name, contact information such as your email address, and demographic information. When necessary, specific information may be required to process an order, a delivery or billing.'] },
      { h: 'Use of collected information', p: ['Our website uses the information in order to provide the best possible service, particularly to keep a record of users and orders, if applicable, and to improve our products and services. Emails may be sent periodically through our site with special offers, new products and other advertising information that we consider relevant to you; these emails will be sent to the address you provide and can be cancelled at any time.'] },
      { h: 'Cookies', p: [
        'A cookie is a file sent to request permission to be stored on your computer. Once accepted, the cookie helps collect information about web traffic and makes future visits easier. Cookies also allow websites to recognize you individually and offer you a more personalized service.',
        'Our website uses cookies to identify the pages that are visited and how often. This information is used only for statistical analysis and is then permanently deleted. You can delete cookies at any time from your computer. Cookies do not give access to information on your computer or about you unless you choose to provide it directly. You can accept or decline cookies, and you can change your browser settings to decline them. If you decline them, you may not be able to use some of our services.',
      ] },
      { h: 'Links to third parties', p: ['This website may contain links to other sites that may interest you. Once you click on these links and leave our page, we no longer have control over the site you are redirected to, and therefore we are not responsible for the terms, privacy or protection of your data on those third-party sites. These sites are subject to their own privacy policies, so we recommend that you review them.'] },
      { h: 'Control of your personal information', p: [
        'At any time you can restrict the collection or use of the personal information you provide to our website. Each time you are asked to fill out a form, you can check or uncheck the option to receive information by email. If you have subscribed to our newsletter or advertising, you can cancel it at any time.',
        'This company will not sell, assign or distribute the personal information collected without your consent, unless required by a judge with a court order.',
        'www.lomanevada.com reserves the right to change the terms of this Privacy Policy at any time.',
      ] },
    ],
    docs: [
      { label: 'Privacy notice (Spanish)', file: '/docs/aviso-privacidad.pdf' },
      { label: 'Camera monitoring notice (Spanish)', file: '/docs/monitoreo-camaras.pdf' },
      { label: 'Information processing policy (Spanish)', file: '/docs/politica-tratamiento-informacion.pdf' },
    ],
  },
};

/* ---------- Experiencias (portada) ---------- */

export const EXPERIENCES: { image: string; title: T; text: T }[] = [
  {
    image: 'hero/hero-1.jpg',
    title: { es: 'Atardecer sobre las nubes', en: 'Sunset above the clouds' },
    text: {
      es: 'Desde 1.500 metros se ven Santa Marta, El Rodadero, el mar Caribe y la Ciénaga Grande.',
      en: 'From 1,500 meters you can see Santa Marta, El Rodadero, the Caribbean Sea and the Ciénaga Grande.',
    },
  },
  {
    image: 'naturaleza/n2.jpg',
    title: { es: 'Avistamiento de aves', en: 'Bird watching' },
    text: {
      es: 'La Sierra Nevada tiene especies de aves que solo existen aquí. El avistamiento está incluido en tu estadía.',
      en: 'The Sierra Nevada is home to bird species found nowhere else. Bird watching is included in your stay.',
    },
  },
  {
    image: 'naturaleza/n1.jpg',
    title: { es: 'Quebrada El Jabalí', en: 'El Jabalí stream' },
    text: {
      es: 'Acceso exclusivo a 45 minutos caminando por selva virgen, con guía de la casa.',
      en: 'Exclusive access, a 45-minute walk through virgin forest, with an in-house guide.',
    },
  },
  {
    image: 'naturaleza/n8.jpg',
    title: { es: 'Café orgánico al amanecer', en: 'Organic coffee at sunrise' },
    text: {
      es: 'Café gratis todos los días de 6:30 a 9:00 a.m., cultivado en la finca La Victoria.',
      en: 'Free coffee every day from 6:30 to 9:00 a.m., grown at Finca La Victoria.',
    },
  },
  {
    image: 'ambientes/piscina-1.jpg',
    title: { es: 'Piscina de manantial', en: 'Spring-water pool' },
    text: {
      es: 'Agua natural a 1.500 metros de altura, rodeada de montaña.',
      en: 'Natural water at 1,500 meters, surrounded by mountains.',
    },
  },
  {
    image: 'naturaleza/n5.jpg',
    title: { es: 'Fogata con vista a la ciudad', en: 'Bonfire with city views' },
    text: {
      es: 'De noche, las luces de Santa Marta se encienden a lo lejos frente a la fogata.',
      en: 'At night, the lights of Santa Marta glow in the distance in front of the bonfire.',
    },
  },
];

/* ---------- Formulario de reserva ---------- */

export const BOOK = {
  title: { es: 'Consulta disponibilidad', en: 'Check availability' },
  checkIn: { es: 'Llegada', en: 'Check-in' },
  checkOut: { es: 'Salida', en: 'Check-out' },
  adults: { es: 'Adultos', en: 'Adults' },
  kids: { es: 'Niños', en: 'Children' },
  stay: { es: 'Estancia', en: 'Stay' },
  anyStay: { es: 'Cualquiera / recomiéndenme', en: 'Any / recommend one' },
  submit: { es: 'Ver disponibilidad y precios', en: 'See availability & rates' },
  waAlt: { es: 'o pregúntanos por WhatsApp', en: 'or ask us on WhatsApp' },
  secure: { es: 'Disponibilidad en tiempo real en nuestro sistema de reservas', en: 'Real-time availability in our booking system' },
  nights: { es: 'noches', en: 'nights' },
  night: { es: 'noche', en: 'night' },
  reply: { es: 'Mejor precio reservando directo con nosotros.', en: 'Best price when you book direct with us.' },
  capacityWarn: {
    es: 'Esta estancia es para máximo {n} personas. Para su grupo les recomendamos:',
    en: 'This stay sleeps up to {n} people. For your group we recommend:',
  },
  kidsNote: {
    es: 'Los niños menores de 5 años no pagan y pueden dormir en la cama de los padres.',
    en: 'Children under 5 stay free and can share their parents’ bed.',
  },
  reserve: { es: 'Reservar', en: 'Book' },
  filterAll: { es: 'Todas', en: 'All' },
  filterCouples: { es: 'Parejas', en: 'Couples' },
  filterFamily: { es: 'Familias y grupos', en: 'Families & groups' },
  filterPrivate: { es: 'Baño privado', en: 'Private bathroom' },
  filterBudget: { es: 'Económicas', en: 'Budget' },
  tagCouples: { es: 'Ideal parejas', en: 'For couples' },
  tagFamily: { es: 'Familias', en: 'Families' },
  tagSea: { es: 'Vista al mar', en: 'Sea view' },
  weatherNow: { es: 'ahora en Loma Nevada', en: 'now at Loma Nevada' },
  experiences: { es: 'Experiencias', en: 'Experiences' },
  mapLoad: { es: 'Ver mapa', en: 'Show map' },
  visits: { es: 'visitas', en: 'visits' },
};

/* ---------- Por qué elegirnos (solo servicios reales, tomados de las preguntas frecuentes) ---------- */

export const WHY: { icon: string; title: T; text: T }[] = [
  { icon: 'coffee', title: { es: 'Café orgánico gratis', en: 'Free organic coffee' }, text: { es: 'Todos los días de 6:30 a 9:00 a.m.', en: 'Every day, 6:30 to 9:00 a.m.' } },
  { icon: 'drop', title: { es: 'Agua de manantial gratis', en: 'Free spring water' }, text: { es: 'Purificada y con permiso de CORPAMAG', en: 'Purified, licensed by CORPAMAG' } },
  { icon: 'pool', title: { es: 'Piscina de manantial', en: 'Spring-water pool' }, text: { es: 'A 1.500 m, con vista a la montaña', en: 'At 1,500 m, with mountain views' } },
  { icon: 'food', title: { es: 'Restaurante y bar', en: 'Restaurant & bar' }, text: { es: 'Tres comidas al día con vista al mar', en: 'Three meals a day with sea views' } },
  { icon: 'wifi', title: { es: 'Wifi gratis', en: 'Free wifi' }, text: { es: 'En todas las zonas comunes', en: 'In all common areas' } },
  { icon: 'car', title: { es: 'Parqueadero gratis', en: 'Free parking' }, text: { es: 'Dentro de Loma Nevada', en: 'Inside Loma Nevada' } },
  { icon: 'shower', title: { es: 'Agua caliente', en: 'Hot water' }, text: { es: 'En las duchas de todas las estancias', en: 'In every shower' } },
  { icon: 'paw', title: { es: 'Mascotas bienvenidas', en: 'Pets welcome' }, text: { es: 'Hasta 12 kg, con costo adicional', en: 'Up to 12 kg, extra charge' } },
];

/* ---------- Antes de reservar (políticas reales) ---------- */

export const POLICIES: { title: T; text: T }[] = [
  { title: { es: 'Check-in y check-out', en: 'Check-in & check-out' }, text: { es: 'Entrada desde las 3:00 p.m. (hasta las 5:00 p.m., o avísanos) y salida a las 12:00 m. Después de la salida puedes seguir disfrutando las instalaciones.', en: 'Check-in from 3:00 p.m. (until 5:00 p.m., or let us know) and check-out at 12:00 noon. You can keep enjoying the facilities after check-out.' } },
  { title: { es: 'Pago y reserva', en: 'Payment & booking' }, text: { es: 'La reserva se confirma con el pago total. La tarifa es por estancia, no por persona.', en: 'Bookings are confirmed with full payment. Rates are per unit, not per person.' } },
  { title: { es: 'Niños', en: 'Children' }, text: { es: 'Bienvenidos. Los menores de 5 años no pagan; desde los 5 años pagan su estadía.', en: 'Welcome. Under 5 stay free; from age 5 they pay their stay.' } },
  { title: { es: 'Mascotas', en: 'Pets' }, text: { es: 'Permitidas hasta 12 kg, con un valor adicional.', en: 'Allowed up to 12 kg, for an extra fee.' } },
  { title: { es: 'Comida', en: 'Food' }, text: { es: 'Restaurante para las tres comidas. No se permite cocinar ni comer en las habitaciones; los mecatos sí.', en: 'Restaurant for all three meals. No cooking or eating in the rooms; snacks are fine.' } },
  { title: { es: 'Cómo llegar', en: 'Getting here' }, text: { es: 'En moto, en 4x4 o con el transporte que te coordinamos. Carros bajitos solo en temporada seca y consultando antes.', en: 'By motorbike, 4x4 or the transport we arrange. Low cars only in the dry season, ask us first.' } },
];

/* ---------- Distancias (tomadas de la página de transporte y las preguntas frecuentes) ---------- */

export const DISTANCES: { place: T; value: T }[] = [
  { place: { es: 'Santa Marta', en: 'Santa Marta' }, value: { es: '26 km · unos 70 min', en: '26 km · about 70 min' } },
  { place: { es: 'Minca (pueblo)', en: 'Minca (town)' }, value: { es: '11 km · 35 a 45 min', en: '11 km · 35 to 45 min' } },
  { place: { es: 'Quebrada El Jabalí', en: 'El Jabalí stream' }, value: { es: '45 min caminando', en: '45 min walk' } },
  { place: { es: 'Playa más cercana', en: 'Nearest beach' }, value: { es: 'Santa Marta, ~1 h 30', en: 'Santa Marta, ~1 h 30' } },
];

export const UX = {
  reserveNow: { es: 'Reservar ahora', en: 'Book now' },
  viewCabin: { es: 'Ver cabaña', en: 'View cabin' },
  from: { es: 'Desde', en: 'From' },
  perNight: { es: 'noche', en: 'night' },
  seePrices: { es: 'Ver precios', en: 'See rates' },
  whyTitle: { es: 'Por qué elegir Loma Nevada', en: 'Why choose Loma Nevada' },
  policiesTitle: { es: 'Antes de reservar', en: 'Before you book' },
  howToGet: { es: 'Cómo llegar', en: 'How to get here' },
  directBest: { es: 'Reserva directa: mejor precio', en: 'Book direct: best price' },
  since: { es: 'Abiertos desde 2018', en: 'Open since 2018' },
  amenities: { es: 'Amenidades', en: 'Amenities' },
  rnt: { es: 'RNT', en: 'RNT' },
};
