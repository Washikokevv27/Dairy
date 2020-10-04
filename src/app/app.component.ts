import { Component } from '@angular/core';
import { Quote } from './quote';
import { Quote } from '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quotes:Quote[] = [
    {id:1, name:'All our dreams can come true, if we have the courage to pursue them'},
    {id:2,name:'The secret of getting ahead is getting started'},
    {id:3,name:'Don’t limit yourself. Many people limit themselves to what they think they can do. You can go as far as your mind lets you. What you believe, remember, you can achieve'},
    {id:4,name:'The best time to plant a tree was 20 years ago. The second best time is now'},
    {id:5,name:'Only the paranoid survive'},
    {id:6,name:'It’s hard to beat a person who never gives up'},
  ];
}
