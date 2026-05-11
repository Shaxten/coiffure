import { Component, input } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { SalonService } from '../../models/service.model';

@Component({
  selector: 'app-service-card',
  imports: [CurrencyPipe],
  templateUrl: './service-card.html',
  styleUrl: './service-card.scss'
})
export class ServiceCard {
  service = input.required<SalonService>();
}
