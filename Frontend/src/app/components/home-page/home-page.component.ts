import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
// import {FooterModule } from 'cdbangular';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [RouterLink,MatCardModule, MatIconModule,],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}
