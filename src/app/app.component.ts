import { Component } from '@angular/core';
import { Quote } from './quote';
import { templateJitUrl } from '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  
})
export class AppComponent {
  quotes:Quote[] = [
    {id:1, name:'All our dreams can come true, if we have the courage to pursue them',description:'Author: Walt Disney'},
    {id:2,name:'The secret of getting ahead is getting started',description:'Author: Mark Twain'},
    {id:3,name:'Don’t limit yourself. Many people limit themselves to what they think they can do. You can go as far as your mind lets you. What you believe, remember, you can achieve',description:'Author:Mary Kay Ash'},
    {id:4,name:'The best time to plant a tree was 20 years ago. The second best time is now',description:'Author:Chinese Proverb'},
    {id:5,name:'Only the paranoid survive',description:'Author:Andy Grove'},
    {id:6,name:'It’s hard to beat a person who never gives up',description:'Author:Babe Ruth'},
  ];
}
