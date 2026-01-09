
import { Vehicle } from './types';

export const COLORS = {
  primary: '#1459DD', // NADO Blue
  accent: '#FDD817',  // NADO Yellow
  text: '#1e293b',
  bg: '#f8fafc'
};

export const MOCK_VEHICLE: Vehicle = {
  id: 'v123',
  brand: 'Porsche',
  model: '911 Carrera S (992)',
  year: 2022,
  price: 1450000,
  mileage: 12500,
  fuel: 'Essence',
  transmission: 'Automatique PDK',
  power: '450 ch',
  color: 'Gris Craie',
  certified: true,
  images: [
    'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=1200',
    'https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&q=80&w=1200',
    'https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&q=80&w=1200',
    'https://images.unsplash.com/photo-1611859328053-3cbc9f9399f4?auto=format&fit=crop&q=80&w=1200'
  ],
  description: "Porsche 911 Carrera S type 992 en parfait état. Première main, carnet d'entretien complet chez le concessionnaire. Pack Sport Chrono, échappement sport, sièges sport plus 18 positions chauffants et ventilés. Véhicule certifié NADO Expert (110 points de contrôle).",
  specs: {
    "Année": "2022",
    "Kilométrage": "12,500 km",
    "Moteur": "Flat-6 biturbo 3.0L",
    "Puissance": "450 ch",
    "Boîte": "Automatique (PDK)",
    "Transmission": "Propulsion",
    "Couleur": "Gris Craie",
    "Intérieur": "Cuir Noir / Surpiqûres"
  },
  equipment: [
    "Pack Sport Chrono",
    "Échappement Sport avec sorties noires",
    "Toit ouvrant électrique",
    "BOSE Surround Sound System",
    "Assistance Parking Avant/Arrière",
    "Caméra de recul 360°",
    "Régulateur de vitesse adaptatif",
    "Phares Matrix LED (PDLS Plus)"
  ],
  history: [
    { event: "Mise en circulation", date: "Janvier 2022" },
    { event: "Entretien des 1 an / 10 000 km", date: "Janvier 2023" },
    { event: "Vérification technique NADO", date: "Décembre 2024" }
  ]
};
