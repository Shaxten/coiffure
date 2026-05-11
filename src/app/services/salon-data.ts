import { Injectable } from '@angular/core';
import { SalonService, ServiceCategory } from '../models/service.model';
import { TeamMember } from '../models/team-member.model';

@Injectable({
  providedIn: 'root'
})
export class SalonDataService {
  private services: SalonService[] = [
    {
      id: 1,
      name: 'Coupe Femme',
      description: 'Consultation, shampoing, coupe personnalisée et coiffage. Un moment de détente et de transformation.',
      duration: '45 min',
      price: 55,
      category: ServiceCategory.Coupe,
      icon: '✂️'
    },
    {
      id: 2,
      name: 'Coupe Homme',
      description: 'Coupe tendance ou classique, adaptée à votre style et à la texture de vos cheveux.',
      duration: '30 min',
      price: 35,
      category: ServiceCategory.Coupe,
      icon: '💈'
    },
    {
      id: 3,
      name: 'Coupe Enfant',
      description: 'Une coupe adaptée aux plus jeunes dans une ambiance détendue et bienveillante.',
      duration: '20 min',
      price: 25,
      category: ServiceCategory.Coupe,
      icon: '👦'
    },
    {
      id: 4,
      name: 'Coloration Complète',
      description: 'Coloration sur mesure avec des produits haut de gamme respectueux de vos cheveux.',
      duration: '90 min',
      price: 85,
      category: ServiceCategory.Coloration,
      icon: '🎨'
    },
    {
      id: 5,
      name: 'Mèches & Balayage',
      description: 'Technique de balayage naturel pour un effet soleil subtil et lumineux.',
      duration: '120 min',
      price: 120,
      category: ServiceCategory.Coloration,
      icon: '✨'
    },
    {
      id: 6,
      name: 'Ombré Hair',
      description: 'Dégradé de couleur progressif des racines aux pointes pour un look moderne.',
      duration: '150 min',
      price: 145,
      category: ServiceCategory.Coloration,
      icon: '🌅'
    },
    {
      id: 7,
      name: 'Soin Kératine',
      description: 'Traitement lissant à la kératine pour des cheveux soyeux et disciplinés jusqu\'à 3 mois.',
      duration: '120 min',
      price: 180,
      category: ServiceCategory.Soin,
      icon: '💎'
    },
    {
      id: 8,
      name: 'Soin Profond Hydratant',
      description: 'Masque nourrissant intensif pour redonner vie et éclat aux cheveux secs et abîmés.',
      duration: '45 min',
      price: 45,
      category: ServiceCategory.Soin,
      icon: '💧'
    },
    {
      id: 9,
      name: 'Brushing',
      description: 'Mise en forme élégante au séchoir pour un volume et une brillance incomparables.',
      duration: '30 min',
      price: 35,
      category: ServiceCategory.Coiffage,
      icon: '💨'
    },
    {
      id: 10,
      name: 'Chignon & Coiffure Événement',
      description: 'Coiffure élaborée pour mariages, galas et occasions spéciales. Sur consultation.',
      duration: '90 min',
      price: 95,
      category: ServiceCategory.Coiffage,
      icon: '👰'
    },
    {
      id: 11,
      name: 'Taille de Barbe',
      description: 'Taille et sculpture de barbe au rasoir, avec soin hydratant et serviette chaude.',
      duration: '30 min',
      price: 30,
      category: ServiceCategory.Barbe,
      icon: '🧔'
    },
    {
      id: 12,
      name: 'Rasage Traditionnel',
      description: 'L\'art du rasage à l\'ancienne : serviette chaude, mousse onctueuse et rasoir droit.',
      duration: '40 min',
      price: 40,
      category: ServiceCategory.Barbe,
      icon: '🪒'
    }
  ];

  private team: TeamMember[] = [
    {
      id: 1,
      name: 'Isabelle Tremblay',
      role: 'Directrice & Styliste Senior',
      bio: 'Fondatrice du salon avec plus de 20 ans d\'expérience. Formée à Paris et Milan, elle excelle dans les coupes créatives et les colorations d\'exception.',
      specialties: ['Coupes créatives', 'Coloration', 'Conseil image'],
      avatar: '👩‍🦰'
    },
    {
      id: 2,
      name: 'Marc-Antoine Dubois',
      role: 'Coloriste Expert',
      bio: 'Spécialiste des techniques de coloration avancées. Son œil artistique transforme chaque chevelure en œuvre d\'art.',
      specialties: ['Balayage', 'Ombré', 'Couleurs fantaisie'],
      avatar: '👨‍🎨'
    },
    {
      id: 3,
      name: 'Sophie Lavoie',
      role: 'Styliste & Spécialiste Soins',
      bio: 'Passionnée par la santé capillaire, Sophie combine expertise technique et approche holistique pour sublimer vos cheveux.',
      specialties: ['Soins kératine', 'Coupes femmes', 'Coiffures événements'],
      avatar: '👩‍💼'
    },
    {
      id: 4,
      name: 'Alexandre Chen',
      role: 'Barbier & Styliste Homme',
      bio: 'Maître barbier formé à Londres, Alexandre apporte une touche contemporaine aux techniques traditionnelles.',
      specialties: ['Barbe', 'Coupes hommes', 'Rasage traditionnel'],
      avatar: '🧔‍♂️'
    }
  ];

  getServices(): SalonService[] {
    return this.services;
  }

  getServicesByCategory(category: ServiceCategory): SalonService[] {
    return this.services.filter(s => s.category === category);
  }

  getCategories(): ServiceCategory[] {
    return Object.values(ServiceCategory);
  }

  getTeam(): TeamMember[] {
    return this.team;
  }

  getTeamMember(id: number): TeamMember | undefined {
    return this.team.find(m => m.id === id);
  }
}
