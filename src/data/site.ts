export interface Service {
  id: string;
  name: string;
  description: string;
  icon: string;
  features: string[];
  price?: string;
}

// Utility function to handle base URL for internal links
export const withBase = (path: string): string => {
  if (typeof window !== 'undefined') {
    // Client-side: use the current base from the page
    const base = document.querySelector('base')?.getAttribute('href') || '/';
    return base === '/' ? path : `${base.replace(/\/$/, '')}${path}`;
  }
  // Server-side: return path as-is, let Astro handle it
  return path;
};

export interface Location {
  id: string;
  name: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  phone: string;
  email: string;
  hours: string;
  mapUrl?: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export const siteConfig = {
  brandName: "Hidrografika",
  tagline: "Profesionalus Vandens Pernešimo Spausdinimas",
  description: "Profesionalios hidrografikos paslaugos automobiliams, ginklams, sportinėms prekėms ir individualūs projektai. Ekspertų vandens pernešimo spausdinimas su aukščiausios kokybės apdaila.",

  phone: "+370 600 12345",
  email: "info@hidrografika.lt",
  address: "Pramonės g. 123",
  city: "Vilnius",
  state: "LT",
  zip: "01234",

  hours: "Pr-Pn: 8:00-18:00, Št: 9:00-15:00",

  siteUrl: "https://hidrografika.lt",

  socials: [
    {
      platform: "Facebook",
      url: "https://facebook.com/hydrographixpro",
      icon: "facebook"
    },
    {
      platform: "Instagram",
      url: "https://instagram.com/hydrographixpro",
      icon: "instagram"
    },
    {
      platform: "YouTube",
      url: "https://youtube.com/@hydrographixpro",
      icon: "youtube"
    }
  ] as SocialLink[],

  services: [
    {
      id: "automotive",
      name: "Automobilių Dalys",
      description: "Individuali hidrografinė apdaila vidaus ir išorės automobilio komponentams, įskaitant prietaisų skydelius, apdailos dalis, ratlankius ir variklio dangčius.",
      icon: "🚗",
      features: [
        "Vidaus apdailos dalys",
        "Prietaisų skydelio komponentai",
        "Ratlankių atnaujinimas",
        "Variklio skyriaus komponentai",
        "Individualūs raštai prieinami"
      ],
      price: "Nuo 150 €"
    },
    {
      id: "firearms",
      name: "Ginklai ir Taktinė Įranga",
      description: "Patvarūs, profesionalūs vandens pernešimo spaudiniai ginklams, dėtuvėms ir taktinei įrangai su kamufliažo ir individualiais raštais.",
      icon: "🎯",
      features: [
        "Šautuvų ir medžioklės šautuvų buožės",
        "Pistoletų rėmai",
        "Dėtuvės ir aksesuarai",
        "Taktinė įranga",
        "Cerakote paruošimas prieinamas"
      ],
      price: "Nuo 200 €"
    },
    {
      id: "sporting",
      name: "Sportinės Prekės",
      description: "Aukščiausios kokybės apdaila medžioklės įrangai, žvejybos reikmenims, keturračiams, motociklams ir lauko rekreacijai skirtiems produktams.",
      icon: "🏹",
      features: [
        "Keturračių ir bagių dalys",
        "Motociklų komponentai",
        "Medžioklės įranga",
        "Žvejybos meškerės ir ritės",
        "Lauko aksesuarai"
      ],
      price: "Nuo 100 €"
    },
    {
      id: "industrial",
      name: "Pramoninė ir Individuali",
      description: "Profesionali hidrografika komerciniams projektams, prototipams, iškaboms ir unikaliems individualūs taikymams.",
      icon: "⚙️",
      features: [
        "Komercinė įranga",
        "Prototipai ir pavyzdžiai",
        "Iškabos ir ekspozicijos",
        "Namų dekoro daiktai",
        "Vienarūšiai individualūs projektai"
      ],
      price: "Individuali kaina"
    }
  ] as Service[],

  locations: [
    {
      id: "vilnius",
      name: "Vilnius - Pagrindinė Dirbtuvė",
      address: "Pramonės g. 123",
      city: "Vilnius",
      state: "LT",
      zip: "01234",
      phone: "+370 600 12345",
      email: "vilnius@hidrografika.lt",
      hours: "Pr-Pn: 8:00-18:00, Št: 9:00-15:00",
      mapUrl: "https://maps.google.com/?q=Vilnius+Lithuania"
    },
    {
      id: "kaunas",
      name: "Kauno Filialas",
      address: "Pramonės pr. 456",
      city: "Kaunas",
      state: "LT",
      zip: "45678",
      phone: "+370 600 54321",
      email: "kaunas@hidrografika.lt",
      hours: "Pr-Pn: 9:00-17:00, Št: 10:00-14:00",
      mapUrl: "https://maps.google.com/?q=Kaunas+Lithuania"
    }
  ] as Location[],

  process: [
    {
      step: 1,
      title: "Paviršiaus Paruošimas",
      description: "Kruopštus valymas ir šlifavimas, kad būtų užtikrintas optimalus sukibimas. Nuvalome senus dangus ir paruošiame paviršių iki tobulumo."
    },
    {
      step: 2,
      title: "Gruntuojamojo Sluoksnio Uždėjimas",
      description: "Aukščiausios kokybės gruntas užtikrina optimalų rašto sukibimą ir spalvos gylį. Keli sluoksniai užtikrina tolygų padengimą."
    },
    {
      step: 3,
      title: "Vandens Pernešimo Panardinis",
      description: "Tikslus panardinis, kurio metu hidrografinė plėvelė aktyvuojama ir uždedama ant daikto mūsų temperatūros kontroliuojamame rezervuare."
    },
    {
      step: 4,
      title: "Skalavimas ir Patikra",
      description: "Švelnūs skalavimas, kad pašalin turtumas liekanų, po kurio atliekama išsami kokybės patikra, kad užtikrintume nesklaidų rašto uždėjimą."
    },
    {
      step: 5,
      title: "Džiovinimo Periodas",
      description: "Kontroliuojama džiovinimo aplinka užtikrina tinkamą kietėjimą. Mes niekada neskubame šio kritin io žingsnio."
    },
    {
      step: 6,
      title: "Skaidrus Dangos Padengimas",
      description: "Keli profesionalaus lygio skaidraus dango sluoksniai UV apsaugai, ilgaamžiškumui ir nuostabiai blizgiai arba matinei apdailai."
    }
  ],

  faqs: [
    {
      question: "Kas yra hidrografika?",
      answer: "Hidrografika, taip pat žinoma kaip vandens pernešimo spausdinimas, yra procesas, kuris uždeda dekoratyvinius raštus ant trimatių objektų. Specializuota plėvelė plūduriuojama vandenyje, aktyvinama cheminio tirpalo ir tada objektas pamerkiamas pro plėvelę, perkeliant raštą ant paviršiaus."
    },
    {
      question: "Kiek laiko užtrunka procesas?",
      answer: "Dauguma projektų užtrunka 3-5 darbo dienas nuo pristatymo iki užbaigimo. Tai apima paviršiaus paruošimą, gruntuojamąjį sluoksnį, panardininį procesą, džiovinimo laiką ir skaidraus dango padengimą. Skubios paslaugos gali būti prieinamos už papildomą mokestį."
    },
    {
      question: "Kokias medžiagas galima panardinti?",
      answer: "Galime panardinti beveik bet kokią kieto medžiagą, įskaitant plastikus, metalą, medieną, stiklą ir keraminius dirbimus. Dažniausiai tai automobilių dalys, ginklai, sportinės prekės, šalmai ir namų dekoras. Jei abejojate dėl savo daikto, susisiekite su mumis konsultacijai."
    },
    {
      question: "Kiek patvarūs yra apdailos?",
      answer: "Kai tinkamai uždedama su mūsų profesionalaus lygio skaidriais dangais, hidrografinės apdailos yra nepaprastai patvarūs ir gali išlikti daugelį metų. Apdaila atspari UV spinduliams, įbrėžimams ir gali atlaikyti įprastą nusidėvėjimą. Rekomenduojame tinkamą priežiūrą optimaliam ilgaamžiškumui."
    },
    {
      question: "Ar galiu pasirinkti bet kokį raštą?",
      answer: "Siūlome šimtus raštų, įskaitant anglies pluoštą, kamufliažą, medienos tekstūras, geometrinius dizainus ir daugiau. Jei turite individualų raštą omenyje, susisiekite su mumis aptarti galimybes. Galime įsigyti daugumą komerciš kai prieinamų hidrografinių plėvelių."
    },
    {
      question: "Ar teikiate garantiją?",
      answer: "Taip, už savo darbą atsakome su 1 metų garantija prieš defektus darbo kokybėje. Tai apima lupimąsi, atšokimą arba sukibimo problemas, kai daiktas naudojamas įprastomis sąlygomis. Garantija neapima žalos dėl avarijų, piktnaudžiavimo arba netinkamos priežiūros."
    },
    {
      question: "Kiek kainuoja tipinis projektas?",
      answer: "Kaina priklauso nuo daikto dydžio, sudėtingumo ir rašto pasirinkimo. Maži daiktai prasideda nuo 100 €, automobilių dalys paprastai svyruoja nuo 150-400 €, o ginklai prasideda nuo 200 €. Susisiekite su mumis su nuotraukomis ir detalėmis tiksliai kainai gauti."
    },
    {
      question: "Ar turiu išardyti savo daiktą?",
      answer: "Daugeliu atvejų, taip. Daiktai turėtų būti išardyti ir bet kokios dalys, kurių nenorite panardinti, turėtų būti pašalintos. Galime teikti išardymo paslaugas už papildomą mokestį. Atveskite savo daiktą konsultacijai ir patarsime geriausią būdą."
    }
  ],

  testimonials: [
    {
      name: "Tomas Petrauskas",
      location: "Vilnius, Lietuva",
      rating: 5,
      text: "Visiškai priblokštas kokybės! Mano automobilio vidaus dalys atliktos anglies pluošto raštu ir atrodo kaip gamyklinės. Dėmesys detalėms nepaprastas.",
      project: "Automobilio Vidus"
    },
    {
      name: "Rūta Kazlauskaitė",
      location: "Kaunas, Lietuva",
      rating: 5,
      text: "Profesionali paslauga nuo pradžios iki pabaigos. Jie man išaiškino visą procesą ir galutinis rezultatas viršijo lūkesčius. Labai rekomenduoju!",
      project: "Medžioklės Įranga"
    },
    {
      name: "Darius Jonaitis",
      location: "Klaipėda, Lietuva",
      rating: 5,
      text: "Šie žmonės yra tikri meistrai. Padariau motociklo dalis ir keturračio skydelius. Apdaila nepriekaistinga ir išliko puikiai per pastaruosius metus.",
      project: "Motorsportas"
    }
  ]
} as const;
