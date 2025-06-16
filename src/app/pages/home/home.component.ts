import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { MenuTitleComponent } from '../../components/menu-title/menu-title.component';
import { BigCardComponent } from '../../components/big-card/big-card.component';
import { SmallCardComponent } from "../../components/small-card/small-card.component";
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, MenuTitleComponent, BigCardComponent, SmallCardComponent, NgFor],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
    posts = [
    {
      image: 'https://images.unsplash.com/photo-1605296867304-46d5465a13f1?auto=format&fit=crop&w=400&q=80',
      title: 'Treinos para casa',
      date: '14 Jun'
    },
    {
      image: 'https://images.unsplash.com/photo-1633339409275-84fb9541ab88?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Dieta pós treino',
      date: '10 Jun'
    }
  ];
}
