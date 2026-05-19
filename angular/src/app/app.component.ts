import { Component } from '@angular/core'
import { RouterOutlet } from '@angular/router'

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  template: `
    <h1>You did it!</h1>
    <p>
      Visit
      <a href="https://angular.dev/" target="_blank" rel="noopener">angular.dev</a>
      to read the documentation
    </p>
    <router-outlet />
  `,
})
export class AppComponent {}
