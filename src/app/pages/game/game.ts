import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { HistoryService } from '../history/history.service';


type MoveType = 'Rock' | 'Paper' | 'Scissors';
type Outcome = 'Win' | 'Lose' | 'Draw';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './game.html',
  styleUrls: ['./game.scss']
})



export class GameComponent implements OnInit {

  goHistory(): void {
    this.router.navigate(['/history']);
  }


  restart(): void {
    this.router.navigate(['/home']);
  }


  constructor(private router: Router,
    private route: ActivatedRoute,
    private historyService: HistoryService
  ) { }

  bestOf!: number;
  targetWins!: number;
  lastPlayerMove?: MoveType;
  lastComputerMove?: MoveType;

  playerScore = 0;
  computerScore = 0;
  matchFinished = false;

  lastResult?: string;
  finalResult?: 'Win' | 'Lose' | 'Draw';

  ngOnInit() {
    this.bestOf = +this.route.snapshot.queryParamMap.get('bestOf')! || 3;
    this.resetGameState();
  }
  resetGameState() {
    this.targetWins = Math.ceil(this.bestOf / 2);
    this.playerScore = 0;
    this.computerScore = 0;
    this.matchFinished = false;
    this.lastPlayerMove = undefined;
  }
  play(move: MoveType) {
    if (this.matchFinished) return;

    const opponentMove = this.randomMove();
    const outcome = this.evaluate(move, opponentMove);

    this.lastPlayerMove = move;
    this.lastComputerMove = opponentMove;

    this.lastResult = `${move} vs ${opponentMove} → ${outcome}`;

    if (outcome === 'Win') this.playerScore++;
    if (outcome === 'Lose') this.computerScore++;

    if (this.playerScore === this.targetWins || this.computerScore === this.targetWins) {
      this.matchFinished = true;

      if (this.playerScore === this.targetWins) {
        this.finalResult = 'Win';
      } else if (this.computerScore === this.targetWins) {
        this.finalResult = 'Lose';
      }

      this.historyService.add({
        playerMove: this.lastPlayerMove,
        computerMove: this.lastComputerMove,
        result: outcome,
        date: new Date()
      });



    }
  }


  randomMove(): MoveType {
    const moves: MoveType[] = ['Rock', 'Paper', 'Scissors'];
    return moves[Math.floor(Math.random() * moves.length)];
  }

  evaluate(player: MoveType, opponent: MoveType): Outcome {
    if (player === opponent) return 'Draw';

    if (
      (player === 'Rock' && opponent === 'Scissors') ||
      (player === 'Paper' && opponent === 'Rock') ||
      (player === 'Scissors' && opponent === 'Paper')
    ) return 'Win';

    return 'Lose';
  }
}
