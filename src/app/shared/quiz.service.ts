import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class QuizService {
  //---------------- Properties---------------
  //readonly rootUrl = 'http://localhost:49790/';
  readonly rootUrl = 'http://tkd-quiz-backend.azurewebsites.net/';
  qns: any[];
  lb: any[];
  lbLength: number;
  seconds: number;
  timer;
  qnProgress: number;
  correctAnswerCount: number = 0;

  //---------------- Helper Methods---------------
  constructor(private http: HttpClient) { }
  displayTimeElapsed() {
    return Math.floor(this.seconds / 3600) + ' Hours ' 
    + Math.floor(this.seconds / 60) + ' Minutes ' 
    + Math.floor(this.seconds % 60) + ' Seconds ';
  }

  getParticipantName() {
    var participant = JSON.parse(localStorage.getItem('participant'));
    return participant.Name;
  }


  //---------------- Http Methods---------------

  insertParticipant(name: string, email: string, belt: string) {
    
    var body = {
      Name: name,
      Email: email,
      Belt: belt
    }
    return this.http.post(this.rootUrl + '/api/InsertParticipant', body);
  }

  getQuestions(b:string) {
    return this.http.get(this.rootUrl + '/api/Questions/'+b);
  }

  getLeaderboard(b:string) {
    return this.http.get(this.rootUrl + '/api/leaderboard/'+b);
  }

  getAnswers() {
    var body = this.qns.map(x => x.QnID);

    return this.http.post(this.rootUrl + '/api/Answers', body);
  }

  submitScore() {
    var body = JSON.parse(localStorage.getItem('participant'));
    body.Score = this.correctAnswerCount;
    body.TimeSpent = this.seconds;
    return this.http.post(this.rootUrl + "/api/UpdateOutput", body);
  }

  setbgColour(beltColour: string) : string 
  {
    switch(beltColour) { 
      case "White": { 
         return "white";
      }
      case "Yellow Tag":
      case "Yellow":  {
        return "yellow";
     }
    case "Green Tag":  
    case "Green": {
    return "green darken-4"; 
 }
case "Blue Tag":
case "Blue": { 
  return "blue darken-4";
}
case "Red Tag": 
case "Red": { 
  return "red";
  }
case "Black Tag": 
case "Black 1st Dan": { 
  return "black";
}
default: {
return "teal";      
} 
}
}

setTextColour(beltColour: string) : string 
{
  switch(beltColour) { 
    case "White": { 
       return "black-text";
    }
    case "Yellow Tag":
    case "Yellow":  {
      return "black-text";
   }
  case "Green Tag":  
  case "Green": {
  return "white-text"; 
}
case "Blue Tag":
case "Blue": { 
return "white-text";
}
case "Red Tag": 
case "Red": { 
return "white-text";
}
case "Black Tag": 
case "Black 1st Dan": { 
return "white-text";
}
default: {
return "white-text";      
} 
}
}

}