import { Component, inject, AfterViewInit, OnDestroy } from '@angular/core';
import { Hero } from '../../components/hero/hero';
import { ScrollAnimationService } from '../../services/scroll-animation';

@Component({
  selector: 'app-about',
  imports: [Hero],
  templateUrl: './about.html',
  styleUrl: './about.scss'
})
export class About implements AfterViewInit, OnDestroy {
  private scroll = inject(ScrollAnimationService);
  ngAfterViewInit(): void { this.scroll.init(); }
  ngOnDestroy(): void { this.scroll.destroy(); }
}
