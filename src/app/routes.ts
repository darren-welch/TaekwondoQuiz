import { Routes } from '@angular/router'
import { RegisterComponent } from './register/register.component';
import { QuizComponent } from './quiz/quiz.component';
import { ResultComponent } from './result/result.component';
import { GuardGuard } from './auth/guard.guard';

export const appRoutes : Routes =[
{path:'register',component:RegisterComponent}
,{path:'quiz',component:QuizComponent, canActivate : [GuardGuard]}
,{path:'result',component:ResultComponent, canActivate : [GuardGuard]}
,{path:'',redirectTo:'/register',pathMatch:'full'}
];

/*
https://www.youtube.com/watch?v=geEWd7mDlTI
11mins in
*/