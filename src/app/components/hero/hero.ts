import { Component, input, HostListener } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hero',
  imports: [RouterLink],
  templateUrl: './hero.html',
  styleUrl: './hero.scss'
})
export class Hero {
  title = input('');
  subtitle = input('');
  ctaText = input('');
  ctaLink = input('/reservation');
  compact = input(false);
  parallaxY = 0;

  @HostListener('window:scroll')
  onScroll(): void {
    this.parallaxY = window.scrollY * 0.4;
  }
}
