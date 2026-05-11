import { Component, inject, AfterViewInit, OnDestroy } from '@angular/core';
import { Hero } from '../../components/hero/hero';
import { ServiceCard } from '../../components/service-card/service-card';
import { SalonDataService } from '../../services/salon-data';
import { ScrollAnimationService } from '../../services/scroll-animation';
import { SalonService, ServiceCategory } from '../../models/service.model';

@Component({
  selector: 'app-services',
  imports: [Hero, ServiceCard],
  templateUrl: './services.html',
  styleUrl: './services.scss'
})
export class Services implements AfterViewInit, OnDestroy {
  private data = inject(SalonDataService);
  private scroll = inject(ScrollAnimationService);

  categories = this.data.getCategories();
  allServices = this.data.getServices();
  filteredServices: SalonService[] = this.allServices;
  selectedCategory: ServiceCategory | null = null;

  ngAfterViewInit(): void { this.scroll.init(); }
  ngOnDestroy(): void { this.scroll.destroy(); }

  filter(cat: ServiceCategory | null): void {
    this.selectedCategory = cat;
    this.filteredServices = cat ? this.data.getServicesByCategory(cat) : this.allServices;
    setTimeout(() => this.scroll.refresh(), 50);
  }
}
