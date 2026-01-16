export interface HistoryItem {
  playerMove: 'Rock' | 'Paper' | 'Scissors';
  computerMove: 'Rock' | 'Paper' | 'Scissors';
  result: 'Win' | 'Lose' | 'Draw';
  date: Date;
}
