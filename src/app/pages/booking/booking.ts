import { Component, inject, AfterViewInit, OnDestroy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Hero } from '../../components/hero/hero';
import { SalonDataService } from '../../services/salon-data';
import { ScrollAnimationService } from '../../services/scroll-animation';

@Component({
  selector: 'app-booking',
  imports: [FormsModule, Hero],
  templateUrl: './booking.html',
  styleUrl: './booking.scss'
})
export class Booking implements AfterViewInit, OnDestroy {
  private data = inject(SalonDataService);
  private scroll = inject(ScrollAnimationService);

  services = this.data.getServices();
  team = this.data.getTeam();

  booking = {
    name: '',
    email: '',
    phone: '',
    service: '',
    stylist: '',
    date: '',
    time: '',
    notes: ''
  };

  submitted = false;

  ngAfterViewInit(): void { this.scroll.init(); }
  ngOnDestroy(): void { this.scroll.destroy(); }

  onSubmit(): void {
    this.submitted = true;
  }
}
