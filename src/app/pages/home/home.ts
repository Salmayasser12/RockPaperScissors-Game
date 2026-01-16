import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './home.html',
  styleUrls: ['./home.scss']
})
export class HomeComponent {
  bestOf = 3;

  constructor(private router: Router) {}

  start() {
    this.router.navigate(['/game'], {
      queryParams: { bestOf: this.bestOf }
    });
  }
}
