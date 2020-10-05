import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css'],
})
export class QuoteComponent implements OnInit {
  quotes: Quote[] = [
    new Quote(
      1,
      'All our dreams can come true, if we have the courage to pursue them',
      'Walt Disney',
      'Washiko',
      new Date(2020, 8, 23)
    ),
    new Quote(
      2,
      'The secret of getting ahead is getting started',
      'Mark Twaini',
      'washiko',
       new Date(2020, 7, 20)
    ),
    new Quote(
      3, 
      'The best time to plant a tree was 20 years ago. The second best time is now', 
      'Chinese Proverb', 
      'Washiko', 
       new Date(2020, 6, 23)),
    new Quote(
      4,
      'Only the paranoid survive',
      'Andy Grove',
      'Washiko',
       new Date(2020, 5, 23)),
    new Quote(
      5,
      'Don’t limit yourself. Many people limit themselves to what they think they can do. You can go as far as your mind lets you. What you believe, remember, you can achieve',
      'Mary Kay Ash',
      'Washiko',
      new Date(2020, 4, 24)), 
    new Quote(
      6,
      'Only the paranoid survive',
      'Andy Grove',
      'Washiko',
      new Date(2020, 7, 22)),    
    
  ];

  addUpVote(index) {
    this.quotes[index].upvote++;
  }

  addDownVote(index) {
    this.quotes[index].downvote++;
  }

  toggleDetails(index) {
    this.quotes[index].showDetails = !this.quotes[index].showDetails;
  }

  delete(deleteThis: boolean, index: number) {
    if (deleteThis) {
      let confirmDelete = confirm(
        'Are you sure you want to delete this quote?'
      );
      if (confirmDelete) {
        this.quotes.splice(index, 1);
      }
    }
  }

  highestUpVote(): Quote {
    let highestUpVoteQuote = new Quote(0, '', '', '', new Date());
    for (let i = 0; i < this.quotes.length; i++) {
      if (this.quotes[i].upvote > highestUpVoteQuote.upvote) {
        highestUpVoteQuote = this.quotes[i];
      }
    }
    if (highestUpVoteQuote.upvote > 0) {
      return highestUpVoteQuote;
    } else{
      return new Quote(0, '', '', '', new Date());
    }
  }

  addNewQuote(newQuote: Quote) {
    newQuote.id = this.quotes.length + 1;
    this.quotes.push(newQuote);
  }

  constructor() {}

  ngOnInit(): void {}
}