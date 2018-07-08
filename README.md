# TaekwondoQuiz

URL of live version: http://tkd-quiz.azurewebsites.net/

An online tool to assist ITF Taekwondo practitioners with the theory for their gradings.  Currently supports 10th Kup to 1st Dan.  More belts will be added shortly.

The questions for this website can be obtained from an API.

### All questions
http://tkd-quiz-backend.azurewebsites.net/api/questions

### Individual belt questions.
- http://tkd-quiz-backend.azurewebsites.net/api/questions/10
- http://tkd-quiz-backend.azurewebsites.net/api/questions/9

The questions include the current grade plus any previous gradings, as you would expect at your grading.

Use the Kup integer. e.g.
- 10 > 10th Kup (White Belt)
- 9  > 9th Kup (Yellow tag).
For 1st dan, use -1.  2nd Dan will be -2 and so on.

## Version 2.0 Release features
- [ ] Include password authentication
- [ ] Include profile page & option to submit questions for approval.
- [ ] Add profanity filter for leaderboard.

## Copyrights and Licence

MIT License

Copyright (c) 2018 <a href="https://darrenwelch.co.uk" target="_blank">Darren Lee Welch</a>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
