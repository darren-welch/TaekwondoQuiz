import { Component, OnInit } from '@angular/core';
import { QuizService } from '../shared/quiz.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
questions  : any;



  constructor(public quizService: QuizService, private router: Router) { }

  ngOnInit() {



     if (parseInt(localStorage.getItem('qnProgress')) == 10) {
      this.quizService.seconds = parseInt(localStorage.getItem('seconds'));
      this.quizService.qnProgress = parseInt(localStorage.getItem('qnProgress'));
      this.quizService.qns = JSON.parse(localStorage.getItem('qns'));

      this.quizService.getAnswers().subscribe(
        (data: any) => {

          this.quizService.correctAnswerCount = 0;
          this.quizService.qns.forEach((e, i) => {
            if ((e.answer+1) == data[i])
            {
 
              this.quizService.correctAnswerCount++;
              e.correct = data[i];
            }
    
          });
        }
      );

        //this.quizService.submitScore().subscribe(() => {
          //this.restart();
        //});

    }
    else
      this.router.navigate(['/quiz']);
  }


  OnSubmit() {
    this.quizService.submitScore().subscribe(() => {
      this.router.navigate(['/leaderboard']); 
    });
   
  }

  restart() {
    localStorage.setItem('qnProgress', "0");
    localStorage.setItem('qns', "");
    localStorage.setItem('seconds', "0");
    this.router.navigate(['/quiz']);
  }
  

}