import { Component, inject, AfterViewInit, OnDestroy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Hero } from '../../components/hero/hero';
import { ServiceCard } from '../../components/service-card/service-card';
import { TeamCard } from '../../components/team-card/team-card';
import { SalonDataService } from '../../services/salon-data';
import { ScrollAnimationService } from '../../services/scroll-animation';

@Component({
  selector: 'app-home',
  imports: [Hero, ServiceCard, TeamCard, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home implements AfterViewInit, OnDestroy {
  private data = inject(SalonDataService);
  private scroll = inject(ScrollAnimationService);

  featuredServices = this.data.getServices().slice(0, 4);
  team = this.data.getTeam();

  ngAfterViewInit(): void { this.scroll.init(); }
  ngOnDestroy(): void { this.scroll.destroy(); }
}
