import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuizService } from '../shared/quiz.service';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css']
})

export class LeaderboardComponent implements OnInit {

  constructor(private router: Router, private quizService: QuizService) { }

  ngOnInit() {
    let ppant = JSON.parse(localStorage.getItem('participant'));
    let cBelt = ppant.Belt;
    this.quizService.getLeaderboard(cBelt).subscribe(
      (data: any) => {
        this.quizService.lb = data;
       
      }
    );
  }

  
  restart() {
    localStorage.setItem('qnProgress', "0");
    localStorage.setItem('qns', "");
    localStorage.setItem('seconds', "0");
    this.router.navigate(['/quiz']);
  }

}
