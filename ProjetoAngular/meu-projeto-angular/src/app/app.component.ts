// app.component.ts

// app.component.ts

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
   
    
    <main>
      <!-- Conteúdo principal da sua aplicação vai aqui -->
      <router-outlet></router-outlet>
    </main>
    
    <footer>
    <p>footer works!</p>
    </footer>
  `,
  styles: [
    // Adicione estilos se necessário
  ]
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  // Lógica do componente principal, se necessário
}
