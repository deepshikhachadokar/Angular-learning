import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-two-way',
  standalone:true,
  imports: [CommonModule,FormsModule],
  templateUrl: './two-way.component.html',
  styleUrl: './two-way.component.scss'
})
export class TwoWayComponent {
  username: string = ' '; // Starts as empty
  age:number=23;
  isSubscribed:boolean= true;
  selectedColor: string = 'Red'; // Default selection
  feedback: string = ''; // Starts as empty
  gender: string = 'Male'; // Default selection
}
