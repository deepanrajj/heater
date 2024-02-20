import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `<main class="main">
    <router-outlet />
  </main>`,
})
export class AppComponent {
  title = 'Heater';
}
