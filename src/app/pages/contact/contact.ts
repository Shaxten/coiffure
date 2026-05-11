import { Component, inject, AfterViewInit, OnDestroy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Hero } from '../../components/hero/hero';
import { ScrollAnimationService } from '../../services/scroll-animation';

@Component({
  selector: 'app-contact',
  imports: [FormsModule, Hero],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class Contact implements AfterViewInit, OnDestroy {
  private scroll = inject(ScrollAnimationService);
  formData = { name: '', email: '', phone: '', message: '' };
  submitted = false;

  ngAfterViewInit(): void { this.scroll.init(); }
  ngOnDestroy(): void { this.scroll.destroy(); }

  onSubmit(): void {
    this.submitted = true;
    this.formData = { name: '', email: '', phone: '', message: '' };
  }
}
