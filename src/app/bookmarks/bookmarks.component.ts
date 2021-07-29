import { Component, Input, OnInit  } from '@angular/core';

@Component({
  selector: 'app-bookmarks',
  templateUrl: './bookmarks.component.html',
  styleUrls: ['./bookmarks.component.scss']
})
export class BookmarksComponent implements OnInit {
  // @Input() item : any;
  public savedCards:string[] = [];
  constructor() { }

  ngOnInit() {
    Object.keys(localStorage).map((id)=>{
      let url:any = localStorage.getItem(id)
      this.savedCards.push(url)
    });

  }

  removeCard(cardUrl: any) {
    Object.keys(localStorage).map((id)=>{
      let url:any = localStorage.getItem(id)
      if(cardUrl === url) {
        localStorage.removeItem(id)
      }
    });
    this.savedCards = this.savedCards.filter(el => {
      return el !== cardUrl
    })
  }
}
