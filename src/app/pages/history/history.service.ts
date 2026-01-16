import { Injectable } from '@angular/core';
import { HistoryItem } from './history.model';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  private history: HistoryItem[] = [];

  add(item: HistoryItem): void {
    this.history.unshift(item); // newest first
  }

  getAll(): HistoryItem[] {
    return this.history;
  }

  clear(): void {
    this.history = [];
  }
}
