import { Component, inject, AfterViewInit, OnDestroy } from '@angular/core';
import { Hero } from '../../components/hero/hero';
import { ScrollAnimationService } from '../../services/scroll-animation';

@Component({
  selector: 'app-gallery',
  imports: [Hero],
  templateUrl: './gallery.html',
  styleUrl: './gallery.scss'
})
export class Gallery implements AfterViewInit, OnDestroy {
  private scroll = inject(ScrollAnimationService);

  galleryItems = [
    { emoji: '💇‍♀️', label: 'Coupe Créative', color: 'linear-gradient(135deg, #ffecd2, #fcb69f)' },
    { emoji: '🎨', label: 'Balayage Naturel', color: 'linear-gradient(135deg, #a18cd1, #fbc2eb)' },
    { emoji: '✨', label: 'Coloration Fantaisie', color: 'linear-gradient(135deg, #89f7fe, #66a6ff)' },
    { emoji: '👰', label: 'Coiffure Mariage', color: 'linear-gradient(135deg, #f6d5f7, #fbc2eb)' },
    { emoji: '💈', label: 'Coupe Homme', color: 'linear-gradient(135deg, #d4a5a5, #e8d5b7)' },
    { emoji: '💎', label: 'Soin Kératine', color: 'linear-gradient(135deg, #96e6a1, #d4fc79)' },
    { emoji: '🧔', label: 'Barbe Sculptée', color: 'linear-gradient(135deg, #fccb90, #d57eeb)' },
    { emoji: '💨', label: 'Brushing Volume', color: 'linear-gradient(135deg, #f093fb, #f5576c)' },
    { emoji: '🌅', label: 'Ombré Hair', color: 'linear-gradient(135deg, #4facfe, #00f2fe)' },
  ];

  ngAfterViewInit(): void { this.scroll.init(); }
  ngOnDestroy(): void { this.scroll.destroy(); }
}
