import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuizService } from '../shared/quiz.service';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css']
})

export class LeaderboardComponent implements OnInit {
cBelt : string;
  constructor(private router: Router, public quizService: QuizService) { }

  ngOnInit() {
    if (parseInt(localStorage.getItem('qnProgress')) == 10) {
      this.quizService.seconds = parseInt(localStorage.getItem('seconds'));
      this.quizService.qnProgress = parseInt(localStorage.getItem('qnProgress'));
      this.quizService.qns = JSON.parse(localStorage.getItem('qns'));
    let ppant = JSON.parse(localStorage.getItem('participant'));
    this.cBelt = ppant.Belt;
    
    this.quizService.getLeaderboard(this.cBelt).subscribe(
      (data: any) => {
        this.quizService.lb = data;
       
      }
    );
  }
  else
{
  this.router.navigate(['/quiz']);
}
  }

  
  restart() {
    localStorage.setItem('qnProgress', "0");
    localStorage.setItem('qns', "");
    localStorage.setItem('seconds', "0");
    this.router.navigate(['/quiz']);
  }

}
