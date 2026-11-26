// Guías para viajeros (/es/guias/ y /guides/). Para agregar una, copia un bloque y cambia sus textos.
// `body` admite HTML sencillo. Precios y distancias salen de site.ts: se actualizan allí.
import { TRANSPORT, TOURS, type Lang, type T } from './site';

export type Guide = {
  slug: T;
  title: T;
  seoTitle: T;
  description: T;
  image: string; // ruta relativa a src/assets/img
  /** Fecha de publicación o última revisión (AAAA-MM-DD). */
  updated: string;
  body: Record<Lang, string>;
};

const legRows = (lang: Lang) =>
  TRANSPORT.legs
    .map((l) => `<tr><td><strong>${l.from} → ${l.to}</strong></td><td>${lang === 'es' ? l.km : l.km.replace(',', '.')} km</td><td>${l.min} min</td><td>${l.how[lang]}</td></tr>`)
    .join('');

const tourRows = (lang: Lang) =>
  TOURS.map((t) => `<tr><td><strong>${t.dest[lang]}</strong></td><td>${t.time}</td><td>${t.duration[lang]}</td><td>COP ${t.price}</td></tr>`).join('');

const table = (head: string[], rows: string) =>
  `<div class="table-scroll"><table class="data"><thead><tr>${head.map((h) => `<th>${h}</th>`).join('')}</tr></thead><tbody>${rows}</tbody></table></div>`;

export const GUIDES: Guide[] = [
  {
    slug: { es: 'guias/como-llegar-de-santa-marta-a-minca', en: 'guides/santa-marta-to-minca' },
    title: { es: 'Cómo llegar de Santa Marta a Minca', en: 'How to get from Santa Marta to Minca' },
    seoTitle: { es: 'Cómo llegar de Santa Marta a Minca | Loma Nevada', en: 'How to Get from Santa Marta to Minca | Loma Nevada' },
    description: {
      es: 'Opciones para ir de Santa Marta a Minca y subir hasta la montaña: transporte público, moto y 4x4, con distancias y tiempos de cada tramo.',
      en: 'How to travel from Santa Marta to Minca and up the mountain: public transport, motorbike and 4x4, with distances and times for each leg.',
    },
    image: 'hero/hero-7.jpg',
    updated: '2026-11-26',
    body: {
      es: `
<p>Minca es un corregimiento de Santa Marta, en la Sierra Nevada. El pueblo está a unos 620 metros sobre el nivel del mar y se llega por carretera desde la ciudad.</p>
<h2>De Santa Marta al pueblo de Minca</h2>
<p>Son unos 15 kilómetros y cerca de 35 minutos. Hay transporte público: las camionetas compartidas suelen salir desde los alrededores del Mercado Público de Santa Marta. También puedes ir en moto desde El Yucal. Los horarios y tarifas cambian, así que confírmalos antes de viajar y lleva efectivo.</p>
<h2>Del pueblo a la parte alta</h2>
<p>Si te quedas arriba, como en Loma Nevada, a 1.500 metros, el camino continúa por El Campano. La vía requiere moto o un vehículo 4x4.</p>
${table(['Tramo', 'Distancia', 'Tiempo', 'Cómo'], legRows('es'))}
<p>En total, calcula alrededor de hora y media desde Santa Marta. Los tiempos son promedios y dependen del clima y del estado de la vía.</p>
<h2>¿Puedo ir en mi carro?</h2>
<p>Hasta Loma Nevada, sí, si es un campero 4x4. En temporada seca (entre febrero y mayo) han llegado automóviles, pero consúltanos antes. El parqueadero en Loma Nevada es gratis; en El Campano se paga por noche.</p>
<h2>Si te hospedas con nosotros</h2>
<p>Coordinamos el transporte desde Santa Marta o Minca. El pago se hace directamente al transportador y la camioneta lleva hasta seis pasajeros. Mira la página de <a href="/es/transporte/">transporte</a>. El ingreso es desde las 3:00 p.m. y normalmente hasta las 5:00 p.m.; si vas a llegar más tarde, avísanos.</p>
`,
      en: `
<p>Minca is a mountain village in the Sierra Nevada, part of the city of Santa Marta. The village sits at about 620 meters above sea level and is reached by road from the city.</p>
<h2>From Santa Marta to Minca village</h2>
<p>It is about 15 kilometers and roughly 35 minutes. There is public transport: shared vans usually leave from around the Mercado Público (central market) in Santa Marta. You can also go by motorbike from El Yucal. Timetables and fares change, so check them before you travel and carry cash.</p>
<h2>From the village up the mountain</h2>
<p>If you are staying higher up, as at Loma Nevada at 1,500 meters, the road continues through El Campano. You need a motorbike or a 4x4.</p>
${table(['Leg', 'Distance', 'Time', 'How'], legRows('en'))}
<p>Allow about an hour and a half in total from Santa Marta. Times are averages and depend on weather and road conditions.</p>
<h2>Can I drive my own car?</h2>
<p>To Loma Nevada, yes, if it is a 4x4. In the dry season (February to May) regular cars have made it, but please ask us first. Parking at Loma Nevada is free; parking in El Campano is charged per night.</p>
<h2>If you are staying with us</h2>
<p>We arrange transport from Santa Marta or Minca. You pay the driver directly, and the vehicle carries up to six passengers. See our <a href="/transport/">transport</a> page. Check-in is from 3:00 p.m., normally until 5:00 p.m.; if you will arrive later, let us know.</p>
`,
    },
  },
  {
    slug: { es: 'guias/que-hacer-en-minca', en: 'guides/things-to-do-in-minca' },
    title: { es: 'Qué hacer en Minca', en: 'Things to do in Minca' },
    seoTitle: { es: 'Qué hacer en Minca: cascadas, café y aves | Loma Nevada', en: 'Things to Do in Minca: Waterfalls, Coffee, Birds | Loma Nevada' },
    description: {
      es: 'Qué hacer en Minca y sus alrededores: cascadas y ríos, café y cacao, avistamiento de aves, miradores y caminatas en la Sierra Nevada.',
      en: 'What to do in and around Minca: waterfalls and rivers, coffee and cacao farms, bird watching, viewpoints and hikes in the Sierra Nevada.',
    },
    image: 'naturaleza/n1.jpg',
    updated: '2026-11-26',
    body: {
      es: `
<p>Minca combina selva, agua y montaña a poca distancia del Caribe. Estos son los planes que recomendamos a nuestros huéspedes. Puedes ir en moto, en carro o caminando; algunos sitios cobran entrada.</p>
<h2>Ríos y cascadas</h2>
<ul><li>Pozo Azul</li><li>Cascada de Marinka</li><li>Cascada El Jaguar o Chorrerón</li><li>Río Minca y Quebrada La Victoria</li><li>Quebrada El Jabalí: a 45 minutos caminando desde Loma Nevada, de acceso exclusivo y con guía de la casa</li></ul>
<h2>Café y cacao</h2>
<p>En el beneficiadero de la finca La Victoria se conoce el proceso del café. Para el cacao, las fincas La Candelaria y San Rafael.</p>
<h2>Aves, miradores y caminatas</h2>
<p>La Sierra Nevada de Santa Marta tiene especies de aves que solo existen allí. Entre los destinos de la zona están Los Pinos, La Tagua, San Lorenzo, la Reserva El Dorado y el Cerro Kennedy. Si te gusta caminar, hay una <a href="/es/senderismo/">ruta circular de 27,3 km</a> entre Loma Nevada y Minca.</p>
<h2>Recorridos desde Loma Nevada</h2>
${table(['Destino', 'Salida', 'Duración', 'Valor por persona'], tourRows('es'))}
<p>Más detalles en <a href="/es/recorridos-ecologicos/">recorridos ecológicos</a>. Confirma disponibilidad y precios antes de tu visita.</p>
<h2>Solo por el día</h2>
<p>Con el <a href="/es/pasadia/">pasadía</a> disfrutas la piscina de manantial, la terraza del restaurante, los senderos y la vista, de 8:00 a.m. a 5:00 p.m.</p>
<h2>Qué llevar</h2>
<p>Zapatos con buen agarre, ropa que se pueda mojar, abrigo ligero para la noche en la parte alta, repelente y efectivo.</p>
`,
      en: `
<p>Minca brings together forest, water and mountains a short drive from the Caribbean. These are the plans we suggest to our guests. You can get around by motorbike, car or on foot; some places charge an entrance fee.</p>
<h2>Rivers and waterfalls</h2>
<ul><li>Pozo Azul</li><li>Marinka waterfalls</li><li>El Jaguar (Chorrerón) waterfall</li><li>Minca river and La Victoria stream</li><li>El Jabalí stream: a 45-minute walk from Loma Nevada, exclusive access with an in-house guide</li></ul>
<h2>Coffee and cacao</h2>
<p>Visit the coffee mill at Finca La Victoria to see how coffee is processed. For cacao, try La Candelaria or San Rafael farms.</p>
<h2>Birds, viewpoints and hikes</h2>
<p>The Sierra Nevada de Santa Marta is home to bird species found nowhere else. Places to visit in the area include Los Pinos, La Tagua, San Lorenzo, El Dorado Nature Reserve and Cerro Kennedy. If you enjoy walking, there is a <a href="/trekking/">27.3 km loop</a> between Loma Nevada and Minca.</p>
<h2>Tours from Loma Nevada</h2>
${table(['Destination', 'Departure', 'Duration', 'Price per person'], tourRows('en'))}
<p>More on our <a href="/ecological-walks/">ecological tours</a> page. Please confirm availability and prices before your visit.</p>
<h2>Just for the day</h2>
<p>With our <a href="/pass/">day pass</a> you can enjoy the spring-water pool, restaurant terrace, trails and views from 8:00 a.m. to 5:00 p.m.</p>
<h2>What to pack</h2>
<p>Shoes with good grip, clothes that can get wet, a light jacket for evenings higher up, insect repellent and cash.</p>
`,
    },
  },
  {
    slug: { es: 'guias/donde-dormir-en-minca', en: 'guides/where-to-stay-in-minca' },
    title: { es: 'Dónde dormir en Minca: ¿pueblo o montaña?', en: 'Where to stay in Minca: village or mountain?' },
    seoTitle: { es: 'Dónde dormir en Minca: pueblo o montaña | Loma Nevada', en: 'Where to Stay in Minca: Village or Mountain | Loma Nevada' },
    description: {
      es: 'Dormir en el pueblo de Minca o en la montaña: diferencias de acceso, clima, vista y ambiente para elegir tu hospedaje.',
      en: 'Staying in Minca village or up the mountain: how access, climate, views and atmosphere differ, so you can choose well.',
    },
    image: 'hero/hero-9.jpg',
    updated: '2026-11-26',
    body: {
      es: `
<p>La respuesta depende del viaje que quieras. Estas son las diferencias principales.</p>
<h2>En el pueblo (unos 620 m)</h2>
<p>Conviene si quieres llegar fácil en transporte público, salir a comer a distintos sitios y moverte sin depender de moto o 4x4. Es la opción práctica para estadías muy cortas o para quien llega de noche.</p>
<h2>En la montaña</h2>
<p>Conviene si buscas vista, silencio, aire fresco y amaneceres. A cambio, el camino es más largo y requiere moto o 4x4, y lo normal es comer donde te hospedas.</p>
<h2>Cómo es dormir en Loma Nevada</h2>
<ul>
<li>A 1.500 metros y a 11 kilómetros del pueblo (unos 35 minutos en moto y 45 en carro).</li>
<li>Todas las estancias tienen vista; la <a href="/es/cabana-privada-2/">Cabaña Elite</a> mira hacia Santa Marta y el mar Caribe.</li>
<li>Temperatura promedio de 18 °C en el día y 15 °C en la noche. No hay aire acondicionado ni ventilador porque no se necesitan.</li>
<li>Hay agua caliente, restaurante para las tres comidas, bar, piscina de manantial y fogata. No hay cocina para huéspedes.</li>
<li>El wifi es gratis en las zonas comunes.</li>
<li>Hay opciones para parejas, familias de hasta ocho personas y camping.</li>
</ul>
<h2>Antes de reservar</h2>
<p>La reserva se confirma con el pago total y la tarifa es por estancia. Se admiten niños y mascotas de hasta 12 kg con costo adicional. Resuelve otras dudas en las <a href="/es/preguntas-frecuentes/">preguntas frecuentes</a>.</p>
`,
      en: `
<p>It depends on the trip you want. These are the main differences.</p>
<h2>In the village (about 620 m)</h2>
<p>Best if you want to arrive easily by public transport, eat at different places and get around without a motorbike or 4x4. It is the practical choice for very short stays or late arrivals.</p>
<h2>Up the mountain</h2>
<p>Best if you are after views, quiet, fresh air and sunrises. The trade-off is a longer road that needs a motorbike or 4x4, and you will usually eat where you stay.</p>
<h2>What staying at Loma Nevada is like</h2>
<ul>
<li>1,500 meters high and 11 kilometers from the village (about 35 minutes by motorbike, 45 by car).</li>
<li>Every stay has a view; the <a href="/habitacion-privada/">Elite Cabin</a> faces Santa Marta and the Caribbean Sea.</li>
<li>Average temperature of 18 °C by day and 15 °C at night. There is no air conditioning or fan because you do not need one.</li>
<li>Hot water, a restaurant serving three meals, a bar, a spring-water pool and a bonfire. There is no guest kitchen.</li>
<li>Free wifi in common areas.</li>
<li>Options for couples, families of up to eight people, and camping.</li>
</ul>
<h2>Before you book</h2>
<p>Bookings are confirmed with full payment and rates are per unit. Children are welcome, as are pets up to 12 kg for an extra fee. Find more answers in our <a href="/frequent-questions/">frequent questions</a>.</p>
`,
    },
  },
];
