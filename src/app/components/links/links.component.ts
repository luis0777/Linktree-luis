import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';


@Component({
  selector: 'app-links',
  standalone: true,
  imports: [ButtonModule],
  templateUrl: './links.component.html',
  styleUrl: './links.component.css'
})
export class LinksComponent {

    redirectTo(url: string){
      window.open(url, '_blank');
    }
}
