import { Component } from '@angular/core';
import { LinksComponent } from "../../components/links/links.component";
import { HeaderComponent } from "../header/header.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [LinksComponent, HeaderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
}
