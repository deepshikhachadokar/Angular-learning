import { Component } from '@angular/core';
// import * from '../../../assets/data-binding.png'
@Component({
  selector: 'app-one-way',
  imports: [],
  templateUrl: './one-way.component.html',
  styleUrl: './one-way.component.scss'
})
export class OneWayComponent {
  message:string='welcome to one way Data-binding';
  topic1:string='Interpolation';
  PicUrl= '../../../assets/data-binding.png';
  
  showMessage() {
    alert('Hello! You clicked the button.');
  }
  typedValue: string = '';

   onTyping(event: any) {
     this.typedValue = event.target.value;
   }

  
   onHover() {
    console.log('Mouse entered the box!');
  }
  
  onLeave() {
    console.log('Mouse left the box!');
  }
  


}
function onover() {
  throw new Error('Function not implemented.');
}

