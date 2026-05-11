import { Component, inject, AfterViewInit, OnDestroy } from '@angular/core';
import { Hero } from '../../components/hero/hero';
import { TeamCard } from '../../components/team-card/team-card';
import { SalonDataService } from '../../services/salon-data';
import { ScrollAnimationService } from '../../services/scroll-animation';

@Component({
  selector: 'app-team',
  imports: [Hero, TeamCard],
  templateUrl: './team.html',
  styleUrl: './team.scss'
})
export class Team implements AfterViewInit, OnDestroy {
  private data = inject(SalonDataService);
  private scroll = inject(ScrollAnimationService);
  team = this.data.getTeam();

  ngAfterViewInit(): void { this.scroll.init(); }
  ngOnDestroy(): void { this.scroll.destroy(); }
}
