import { HttpResponse, http } from 'msw';

export const headlinesArticles = [
  {
    source: {
      id: 'google-news',
      name: 'Google News',
    },
    author: 'LA NACION',
    title:
      'Milei arribó a El Salvador para participar de la nueva toma de posesión de Bukele - LA NACION',
    description: null,
    url: 'https://news.google.com/rss/articles/CBMiZ2h0dHBzOi8vd3d3LmxhbmFjaW9uLmNvbS5hci9wb2xpdGljYS9qYXZpZXItbWlsZWktZW4tdml2by1sYXMtdWx0aW1hcy1tZWRpZGFzLWRlbC1nb2JpZXJuby1uaWQwMTA2MjAyNC_SAQA?oc=5',
    urlToImage: null,
    publishedAt: '2024-06-01T14:14:00Z',
    content: null,
  },
  {
    source: {
      id: 'google-news',
      name: 'Google News',
    },
    author: 'Clarín',
    title:
      'Inter Miami vs St. Louis City SC, EN VIVO: formaciones, a qué hora juega Messi, cómo y dónde ver el partido de la MLS - Clarín',
    description: null,
    url: 'https://news.google.com/rss/articles/CBMikQFodHRwczovL3d3dy5jbGFyaW4uY29tL2RlcG9ydGVzL2ludGVyLW1pYW1pLXZzLXN0LWxvdWlzLWNpdHktc2MtbWxzLXVsdGltYS1mdW5jaW9uLWxpb25lbC1tZXNzaS1zZWxlY2Npb24tbWludXRvLW1pbnV0by1kaXJlY3RvXzBfV3Y2bndmeG5RbC5odG1s0gEA?oc=5',
    urlToImage: null,
    publishedAt: '2024-06-01T13:50:07Z',
    content: null,
  },
  {
    source: {
      id: 'google-news',
      name: 'Google News',
    },
    author: 'Página/12',
    title:
      'La OEI se desmarcó del escándalo de Capital Humano | Responsabilizó a la Secretaría de Niñez, Adolescencia y Familia - Página/12',
    description: null,
    url: 'https://news.google.com/rss/articles/CBMiVWh0dHBzOi8vd3d3LnBhZ2luYTEyLmNvbS5hci83NDEzNzktbGEtb2VpLXNlLWRlc21hcmNvLWRlbC1lc2NhbmRhbG8tZGUtY2FwaXRhbC1odW1hbm_SAQA?oc=5',
    urlToImage: null,
    publishedAt: '2024-06-01T13:44:12Z',
    content: null,
  },
  {
    source: {
      id: 'google-news',
      name: 'Google News',
    },
    author: 'infobae',
    title:
      'Martín Varsavsky: “El discurso de Milei es música para los oídos de empresas que sienten culpa por tener éxito” - infobae',
    description: null,
    url: 'https://news.google.com/rss/articles/CBMimQFodHRwczovL3d3dy5pbmZvYmFlLmNvbS9lY29ub21pYS8yMDI0LzA2LzAxL21hcnRpbi12YXJzYXZza3ktZWwtZGlzY3Vyc28tZGUtbWlsZWktZXMtbXVzaWNhLXBhcmEtbG9zLW9pZG9zLWRlLWVtcHJlc2FzLXF1ZS1zaWVudGVuLWN1bHBhLXBvci10ZW5lci1leGl0by_SAa0BaHR0cHM6Ly93d3cuaW5mb2JhZS5jb20vZWNvbm9taWEvMjAyNC8wNi8wMS9tYXJ0aW4tdmFyc2F2c2t5LWVsLWRpc2N1cnNvLWRlLW1pbGVpLWVzLW11c2ljYS1wYXJhLWxvcy1vaWRvcy1kZS1lbXByZXNhcy1xdWUtc2llbnRlbi1jdWxwYS1wb3ItdGVuZXItZXhpdG8vP291dHB1dFR5cGU9YW1wLXR5cGU?oc=5',
    urlToImage: null,
    publishedAt: '2024-06-01T13:18:42Z',
    content: null,
  },
];

export const messiArticles = [
  {
    source: {
      id: 'marca',
      name: 'Marca',
    },
    author: 'GERARDO VALENCIA',
    title:
      'Aficionados del Al Hilal cantan "Messi Messi" a Cristiano... y Neymar se parte de la risa',
    description:
      'No fue la noche de Cristiano Ronaldo la del viernes 31 de mayo. El Al-Hilal derrotó (5-4) en los penaltis a su Al-Nassr en la final de la King&apos;s Cup de Arabia Saudí. De esta f',
    url: 'https://www.marca.com/futbol/liga-arabia-saudi/2024/06/01/665b0166ca474196128b45a5.html',
    urlToImage:
      'https://ak.uecdn.es/p/110/thumbnail/entry_id/0_5yi1hud7/width/657/type/2/bgcolor/000000/0_5yi1hud7.jpg',
    publishedAt: '2024-06-01T11:10:03Z',
    content:
      "No fue la noche de Cristiano Ronaldo la del viernes 31 de mayo. El Al-Hilal derrotó (5-4) en los penaltis a su Al-Nassr en la final de la King's Cup de Arabia Saudí. De esta forma, al portugués se le… [+486 chars]",
  },
  {
    source: {
      id: 'marca',
      name: 'Marca',
    },
    author: 'JORGE MORAGÓN',
    title: 'Messi no se agota: ¡cinco asistencias y un gol!',
    description:
      'Leo Messi vuelve a exhibirse en Miami. La MLS sigue marcada por la calidad del argentino que firmó una actuación memorable con un gol y cinco asistencias. Un nuevo recital para hac',
    url: 'https://www.marca.com/futbol/estados-unidos/2024/05/05/6637306cca4741193e8b459b.html',
    urlToImage:
      'https://phantom-marca.unidadeditorial.es/55c6ff90276bd613b31d1d090c21605c/resize/1200/f/webp/assets/multimedia/imagenes/2024/05/05/17148928632248.jpg',
    publishedAt: '2024-05-05T07:10:58Z',
    content:
      'Leo Messi vuelve a exhibirse en Miami. La MLS sigue marcada por la calidad del argentino que firmó una actuación memorable con un gol y cinco asistencias. Un nuevo recital para hacer efectiva la pali… [+2427 chars]',
  },
  {
    source: {
      id: 'marca',
      name: 'Marca',
    },
    author: 'GERARDO VALENCIA',
    title: "Ni Thiago, ni Ciro... Mateo Messi es el 'elegido'",
    description:
      'El apellido Messi parece estar en buenos pies. En las últimas horas se ha hecho viral en las redes sociales un vídeo de los hijos de Lionel Messi y Luis Suárez jugando un &apos;par',
    url: 'https://www.marca.com/futbol/estados-unidos/2024/05/20/664b4e07ca474198738b459e.html',
    urlToImage:
      'https://ak.uecdn.es/p/110/thumbnail/entry_id/0_kgfnbb4r/width/657/type/2/bgcolor/000000/0_kgfnbb4r.jpg',
    publishedAt: '2024-05-20T13:24:28Z',
    content:
      "El apellido Messi parece estar en buenos pies. En las últimas horas se ha hecho viral en las redes sociales un vídeo de los hijos de Lionel Messi y Luis Suárez jugando un 'partido' improvisado en el … [+607 chars]",
  },
  {
    source: {
      id: null,
      name: 'Trendencias.com',
    },
    author: 'Joana Costa',
    title:
      'La mansión de Messi frente al Mediterráneo con campo de fútbol, piscinas y hasta parque infantil',
    description:
      'El nombre de Messi estará para siempre vinculado a Barcelona en mayor o menor medida y aunque haga ya tiempo que el futbolista no reside en Cataluña, su huella y presencia siguen muy vigentes, sobre todo por lo imponente de su casa.\n<!-- BREAK 1 -->\nDurante s…',
    url: 'https://decoracion.trendencias.com/casas/mansion-messi-frente-al-mediterraneo-campo-futbol-piscinas-parque-infantil',
    urlToImage:
      'https://i.blogs.es/83181c/captura-de-pantalla-2024-05-14-a-las-21.51.46/840_560.png',
    publishedAt: '2024-05-18T07:00:50Z',
    content:
      'El nombre de Messi estará para siempre vinculado a Barcelona en mayor o menor medida y aunque haga ya tiempo que el futbolista no reside en Cataluña, su huella y presencia siguen muy vigentes, sobre … [+1974 chars]',
  },
  {
    source: {
      id: 'marca',
      name: 'Marca',
    },
    author: 'ALBERTO RUBIO',
    title:
      'Messi liderará a Argentina junto a De Paul, Nahuel, Correa, Acuña y Pezzella',
    description:
      'Lionel Scaloni ha dado a conocer la lista de Argentina para los dos amistosos previos -se enfrentará a Guatemala y Ecuador- a la disputa de la Copa América. Una convocatoria de 29',
    url: 'https://www.marca.com/futbol/copa-america/2024/05/20/664b62f8ca474135298b458b.html',
    urlToImage:
      'https://phantom-marca.unidadeditorial.es/aa5dc64b7288a56c85ec4adad1bf1f88/resize/1200/f/webp/assets/multimedia/imagenes/2024/05/20/17162165475057.jpg',
    publishedAt: '2024-05-20T14:50:50Z',
    content:
      'Lionel Scaloni ha dado a conocer la lista de Argentina para los dos amistosos previos -se enfrentará a Guatemala y Ecuador- a la disputa de la Copa América. Una convocatoria de 29 futbolistas de la q… [+1626 chars]',
  },
  {
    source: {
      id: 'marca',
      name: 'Marca',
    },
    author: 'marca.com',
    title:
      'Messi regresa con gol, pero el Inter Miami cae en casa ante Atlanta',
    description:
      'El argentino Lionel Messi regresó con un gol tras perderse la última visita al Vancouver, pero el Inter Miami cayó 1-3 en casa contra el Atlanta United en la decimoséptima jornada',
    url: 'https://www.marca.com/futbol/estados-unidos/2024/05/30/6657e921268e3e133a8b4578.html',
    urlToImage:
      'https://ak.uecdn.es/p/110/thumbnail/entry_id/0_mubc50g3/width/657/type/2/bgcolor/000000/0_mubc50g3.jpg',
    publishedAt: '2024-05-30T02:54:04Z',
    content:
      'El argentino Lionel Messi regresó con un gol tras perderse la última visita al Vancouver, pero el Inter Miami cayó 1-3 en casa contra el Atlanta United en la decimoséptima jornada de la MLS.\r\nMessi n… [+1879 chars]',
  },
  {
    source: {
      id: 'marca',
      name: 'Marca',
    },
    author: 'M. CARMEN TORRES',
    title: 'Ter Stegen, ante el difícil reto de dar caza a Messi',
    description:
      'Ter Stegen es un jugador fundamental en el esquema y en el rendimiento del Barcelona y un de sus símbolos. Pero, además, es ya una leyenda. El meta alemán se convertirá este sábado',
    url: 'https://www.marca.com/futbol/barcelona/2024/05/03/66326e8d46163f504b8b45d2.html',
    urlToImage:
      'https://phantom-marca.unidadeditorial.es/50d23673ca078a45422edcbb05a00674/resize/1200/f/webp/assets/multimedia/imagenes/2024/05/01/17145814118829.jpg',
    publishedAt: '2024-05-03T15:00:33Z',
    content:
      'Ter Stegen es un jugador fundamental en el esquema y en el rendimiento del Barcelona y un de sus símbolos. Pero, además, es ya una leyenda. El meta alemán se convertirá este sábado, en Girona, en el … [+1935 chars]',
  },
  {
    source: {
      id: 'marca',
      name: 'Marca',
    },
    author: 'GERARDO VALENCIA',
    title:
      'Por eso Messi está tan bien cuidado: así se entrena su guardaespaldas',
    description:
      'Desde que Lionel Messi llegó al Inter de Miami en julio de 2023, hay un nombre que tiene que mencionarse cada vez que se habla del argentino. Yassine Cheuko, el guardaespaldas del',
    url: 'https://www.marca.com/futbol/estados-unidos/2024/05/02/6633673022601d6f468b45f5.html',
    urlToImage:
      'https://ak.uecdn.es/p/110/thumbnail/entry_id/0_mv9u9u12/width/657/type/2/bgcolor/000000/0_mv9u9u12.jpg',
    publishedAt: '2024-05-02T11:18:52Z',
    content:
      'Desde que Lionel Messi llegó al Inter de Miami en julio de 2023, hay un nombre que tiene que mencionarse cada vez que se habla del argentino. Yassine Cheuko, el guardaespaldas del ocho veces ganador … [+771 chars]',
  },
  {
    source: {
      id: 'marca',
      name: 'Marca',
    },
    author: 'MARIO BLÁZQUEZ GIL',
    title:
      'El excompañero de Messi que podría jugar el Mundial de la Kings League',
    description:
      'Ya ha llegado el mes de mayo y eso trae buenas noticias para todos los aficionados de la Kings League. Y es que es en este mes en el que va a dar comienzo la Kings World Cup, la co',
    url: 'https://www.marca.com/videojuegos/kings-league/2024/05/02/66339dba268e3e5b7f8b45b8.html',
    urlToImage:
      'https://phantom-marca.unidadeditorial.es/a13d0df1d5e40e300b6b94caa15215ca/resize/1200/f/webp/assets/multimedia/imagenes/2024/05/02/17146586225718.jpg',
    publishedAt: '2024-05-02T14:07:24Z',
    content:
      'Ya ha llegado el mes de mayo y eso trae buenas noticias para todos los aficionados de la Kings League. Y es que es en este mes en el que va a dar comienzo la Kings World Cup, la competición que se ce… [+1455 chars]',
  },
  {
    source: {
      id: 'marca',
      name: 'Marca',
    },
    author: 'marca.com',
    title:
      "Kroos sigue la estela de Mbappé, Messi, Cristiano y Vinícius y registra su marca 'TK8'",
    description:
      'Toni Kroos ha protegido su nombre y sus iniciales con el número de su dorsal (el 8) ante la Oficina de la Propiedad Intelectual de la UE (EUIPO) para reservarse la posibilidad de o',
    url: 'https://www.marca.com/tiramillas/actualidad/2024/05/24/66506a0922601df50a8b45ca.html',
    urlToImage:
      'https://phantom-marca.unidadeditorial.es/407c95a89d3e4e85f2670503e51aeadf/resize/1200/f/webp/assets/multimedia/imagenes/2024/05/24/17165459393579.jpg',
    publishedAt: '2024-05-24T10:24:39Z',
    content:
      'Toni Kroos ha protegido su nombre y sus iniciales con el número de su dorsal (el 8) ante la Oficina de la Propiedad Intelectual de la UE (EUIPO) para reservarse la posibilidad de operar en un variado… [+2406 chars]',
  },
  {
    source: {
      id: 'marca',
      name: 'Marca',
    },
    author: 'EFE',
    title:
      "Los mejores goles de Sunil Chhetri, el 'Pichichi' indio que plantó cara a Messi y Cristiano",
    description:
      'El futbolista indio Sunil Chhetri, tercer máximo goleador en activo en partidos internacionales por detrás de Cristiano Ronaldo y Lionel Messi, anunció que el siguiente partido que',
    url: 'https://www.marca.com/futbol/futbol-internacional/2024/05/16/6645a93c268e3ecd5b8b457a.html',
    urlToImage:
      'https://ak.uecdn.es/p/110/thumbnail/entry_id/0_06gvzut4/width/657/type/2/bgcolor/000000/0_06gvzut4.jpg',
    publishedAt: '2024-05-16T06:40:25Z',
    content:
      'El futbolista indio Sunil Chhetri, tercer máximo goleador en activo en partidos internacionales por detrás de Cristiano Ronaldo y Lionel Messi, anunció que el siguiente partido que dispute con la Ind… [+2246 chars]',
  },
  {
    source: {
      id: 'marca',
      name: 'Marca',
    },
    author: 'EFE',
    title:
      'El \'cerebro\' del Inter de Miami: "Esperamos facturar 200$ millones gracias a Leo Messi"',
    description:
      'Pensar en el Inter Miami es hacerlo en Leo Messi, David Beckham o los propietarios Jorge y José Mas, pero tras ellos, hay un hombre que le está sacando todo el jugo a la locura mun',
    url: 'https://www.marca.com/futbol/estados-unidos/2024/05/03/6634e1ef22601dae1d8b4582.html',
    urlToImage:
      'https://ak.uecdn.es/p/110/thumbnail/entry_id/0_zmaksza4/width/657/type/2/bgcolor/000000/0_zmaksza4.jpg',
    publishedAt: '2024-05-03T13:10:09Z',
    content:
      'Pensar en el Inter Miami es hacerlo en Leo Messi, David Beckham o los propietarios Jorge y José Mas, pero tras ellos, hay un hombre que le está sacando todo el jugo a la locura mundial que existe por… [+5499 chars]',
  },
];

export const topHeadLinesNewsResponse = (variant: 'headlines' | 'messi') => ({
  status: 'ok',
  totalResults: variant === 'headlines' ? 4 : 12,
  articles: variant === 'headlines' ? headlinesArticles : messiArticles,
});

export const newsHandlers = [
  http.get(`${import.meta.env.VITE_APP_API_URL}/top-headlines`, async () => {
    try {
      return HttpResponse.json(topHeadLinesNewsResponse);
    } catch (e: unknown) {
      let error;
      if (typeof e === 'string') {
        error = e.toUpperCase(); // works, `e` narrowed to string
      } else if (e instanceof Error) {
        error = e.message;
      }

      return HttpResponse.json({ message: error }, { status: 500 });
    }
  }),
  http.get(`${import.meta.env.VITE_APP_API_URL}/everything`, async () => {
    try {
      return HttpResponse.json(topHeadLinesNewsResponse);
    } catch (e: unknown) {
      let error;
      if (typeof e === 'string') {
        error = e.toUpperCase(); // works, `e` narrowed to string
      } else if (e instanceof Error) {
        error = e.message;
      }

      return HttpResponse.json({ message: error }, { status: 500 });
    }
  }),
];
