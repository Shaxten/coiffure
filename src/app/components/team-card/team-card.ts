import { Component, input } from '@angular/core';
import { TeamMember } from '../../models/team-member.model';

@Component({
  selector: 'app-team-card',
  imports: [],
  templateUrl: './team-card.html',
  styleUrl: './team-card.scss'
})
export class TeamCard {
  member = input.required<TeamMember>();
}
