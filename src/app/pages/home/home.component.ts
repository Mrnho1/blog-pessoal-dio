import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { MenuTitleComponent } from '../../components/menu-title/menu-title.component';
import { BigCardComponent } from '../../components/big-card/big-card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, MenuTitleComponent, BigCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
