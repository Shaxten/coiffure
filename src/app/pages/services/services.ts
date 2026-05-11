import { Component, inject } from '@angular/core';
import { SalonDataService } from '../../services/salon-data';
import { SalonService, ServiceCategory } from '../../models/service.model';

@Component({
  selector: 'app-services',
  imports: [],
  templateUrl: './services.html',
  styleUrl: './services.scss'
})
export class Services {
  private data = inject(SalonDataService);

  categories = this.data.getCategories();
  allServices = this.data.getServices();
  filteredServices: SalonService[] = this.allServices;
  selectedCategory: ServiceCategory | null = null;

  filter(cat: ServiceCategory | null): void {
    this.selectedCategory = cat;
    this.filteredServices = cat ? this.data.getServicesByCategory(cat) : this.allServices;
  }
}
