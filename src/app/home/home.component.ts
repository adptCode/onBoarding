import { Component } from '@angular/core';
import { EscenaComponent } from './../escena/escena.component';
import { iStep } from '../interfaces/iStep';
import { StepsService } from '../steps.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [EscenaComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

 constructor(private stepsService: StepsService) {}

 steps = this.stepsService.steps
}
