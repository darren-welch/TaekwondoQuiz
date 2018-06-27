import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuizService } from '../shared/quiz.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  bgColour: string;
  textColour: string;

  constructor(private router: Router, public quizService: QuizService) { }

  ngOnInit() {
    let ppant = JSON.parse(localStorage.getItem('participant'));
    this.setColours(ppant.Belt);

    if (parseInt(localStorage.getItem('seconds')) > 0) {
      this.quizService.seconds = parseInt(localStorage.getItem('seconds'));
      this.quizService.qnProgress = parseInt(localStorage.getItem('qnProgress'));
      this.quizService.qns = JSON.parse(localStorage.getItem('qns'));
      if (this.quizService.qnProgress == 10)
        this.router.navigate(['/result']);
      else
        this.startTimer();
    }
    else {
      this.quizService.seconds = 0;
      this.quizService.qnProgress = 0;

      this.quizService.getQuestions(this.getNumericBelt(ppant.Belt)).subscribe(
        (data: any) => {
          this.quizService.qns = data;
          this.startTimer();
        }
      );
    }
  }

  startTimer() {
    this.quizService.timer = setInterval(() => {
      this.quizService.seconds++;
      localStorage.setItem('seconds', this.quizService.seconds.toString());
    }, 1000);
  }

  setColours(beltColour: string) 
  {
       
    switch(beltColour) { 
      case "White": { 
         this.bgColour = "white";
         this.textColour = "black-text";
         break; 
      }
      case "Yellow Tag":  
        case "Yellow": {
        this.bgColour = "yellow";
        this.textColour = "black-text";
        break; 
     }
     
   case "Green Tag":  
    case "Green": {
    this.bgColour = "green darken-4";
    this.textColour = "white-text";
    break; 
 }
 
case "Blue Tag":
case "Blue": { 
  this.bgColour = "blue";
  this.textColour = "white-text";
  break; 
}
case "Red Tag": 
case "Red": { 
  this.bgColour = "red";
  this.textColour = "white-text";
  break; 
}
case "Black Tag": 
case "Black 1st Dan": { 
  this.bgColour = "black";
  this.textColour = "white-text";
  break; 
}
      default: {
        this.bgColour = "teal";
        this.textColour = "white-text";
        break;       
      } 
     }
    
     
  }

  getNumericBelt(beltColour: string) : string
  {
       let beltNo : string;

    switch(beltColour) { 
      case "White": { 
         beltNo = "10";
         break; 
      }
      case "Yellow Tag": { 
        beltNo = "9";
        break; 
     }
     case "Yellow": { 
      beltNo = "8";
      break; 
   }
   case "Green Tag": { 
    beltNo = "7";
    
    break; 
 }
 case "Green": { 
  beltNo = "6";
  
  break; 
}
case "Blue Tag": { 
  beltNo = "5";
  
  break; 
}
case "Blue": { 
  beltNo = "4";
  
  break; 
}
case "Red Tag": { 
  beltNo = "3";
  
  break; 
}
case "Red": { 
  beltNo = "2";
  
  break; 
}
case "Black Tag": { 
  beltNo = "1";
  
  break; 
}
case "Black 1st Dan": { 
  beltNo = "-1";
  
  break; 
}


}
  return beltNo;  
     
  }

  Answer(qID, choice) {
    this.quizService.qns[this.quizService.qnProgress].answer = choice;
    localStorage.setItem('qns', JSON.stringify(this.quizService.qns));
    this.quizService.qnProgress++;
    localStorage.setItem('qnProgress', this.quizService.qnProgress.toString());
    if (this.quizService.qnProgress == 10) {
      clearInterval(this.quizService.timer);
      this.router.navigate(['/result']);
    }
  }

}