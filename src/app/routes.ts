import { Routes } from '@angular/router'
import { RegisterComponent } from './register/register.component';
import { QuizComponent } from './quiz/quiz.component';
import { ResultComponent } from './result/result.component';
import { GuardGuard } from './auth/guard.guard';
import {LeaderboardComponent} from './leaderboard/leaderboard.component';

export const appRoutes : Routes =[
{path:'register',component:RegisterComponent}
,{path:'quiz',component:QuizComponent, canActivate : [GuardGuard]}
,{path:'result',component:ResultComponent, canActivate : [GuardGuard]}
,{path:'leaderboard',component:LeaderboardComponent, canActivate : [GuardGuard]}
,{path:'',redirectTo:'/register',pathMatch:'full'}
];
