import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NgClass } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, NgClass],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  isLoading = true;

  ngOnInit(): void {
    // Verifica se está no navegador
    if (typeof window !== 'undefined' && typeof sessionStorage !== 'undefined') {
      const splashShown = sessionStorage.getItem('splashShown');

      if (splashShown) {
        this.isLoading = false;
      } else {
        setTimeout(() => {
          this.isLoading = false;
          sessionStorage.setItem('splashShown', 'true');
        }, 4000);
      }
    } else {
      // Fallback se estiver no servidor (SSR)
      this.isLoading = false;
    }
  }
}
