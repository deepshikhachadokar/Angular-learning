import { Component } from '@angular/core';
import { FooterComponent } from '../container/header/footer/footer.component';
import { HeaderComponent } from '../container/header/header/header.component';
import { SidenavComponent } from '../container/sidenav/sidenav/sidenav.component';

@Component({
  selector: 'app-root',
  standalone:true,
  imports: [FooterComponent, HeaderComponent,SidenavComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'nglearning';
}
