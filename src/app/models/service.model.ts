export interface SalonService {
  id: number;
  name: string;
  description: string;
  duration: string;
  price: number;
  category: ServiceCategory;
  icon: string;
}

export enum ServiceCategory {
  Coupe = 'Coupe',
  Coloration = 'Coloration',
  Soin = 'Soin',
  Coiffage = 'Coiffage',
  Barbe = 'Barbe'
}
