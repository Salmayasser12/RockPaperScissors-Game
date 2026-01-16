import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { HistoryService } from './history.service';
import { HistoryItem } from './history.model';

@Component({
  selector: 'app-history',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './history.html',
  styleUrls: ['./history.scss']
})
export class HistoryComponent {

  history: HistoryItem[] = [];

  constructor(
    private historyService: HistoryService,
    private router: Router
  ) {
    this.history = this.historyService.getAll();
  }

  back(): void {
    this.router.navigate(['/game']);
  }

  clear(): void {
    this.historyService.clear();
    this.history = [];
  }
}
