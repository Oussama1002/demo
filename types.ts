
export interface Vehicle {
  id: string;
  brand: string;
  model: string;
  year: number;
  price: number;
  mileage: number;
  fuel: string;
  transmission: string;
  power: string;
  color: string;
  certified: boolean;
  images: string[];
  description: string;
  specs: Record<string, string>;
  equipment: string[];
  history: {
    event: string;
    date: string;
  }[];
}

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

export enum ProfileType {
  SALARIE = 'Salarié',
  FONCTIONNAIRE = 'Fonctionnaire',
  RETRAITE = 'Retraité',
  INDEPENDANT = 'Indépendant'
}
