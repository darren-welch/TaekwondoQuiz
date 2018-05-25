import { Component, OnInit } from '@angular/core';
import { QuizService } from '../shared/quiz.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  belts = ['White','Yellow Tag','Yellow','Green Tag'];
 
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  
  constructor(private quizService : QuizService, private route : Router) { }

  ngOnInit() {
  }

  OnSubmit(name: string, email: string, belt: string){
    this.quizService.insertParticipant(name,email,belt).subscribe(
      (data : any) => {
        
        localStorage.clear();
        localStorage.setItem('participant',JSON.stringify(data));
        this.route.navigate(['/quiz']);
      }
    );

    

  }
}
