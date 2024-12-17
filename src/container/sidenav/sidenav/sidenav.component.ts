import { Component } from '@angular/core';
import { DataBindingComponent } from '../../topics/data-binding/data-binding.component';
import { OneWayComponent } from '../../topics/one-way/one-way.component';
import { TwoWayComponent } from '../../topics/two-way/two-way.component';


@Component({
  selector: 'app-sidenav',
  standalone:true,
  imports: [DataBindingComponent,OneWayComponent,TwoWayComponent],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss'
})
export class SidenavComponent {

}
