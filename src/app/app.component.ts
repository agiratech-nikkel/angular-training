import { Component, OnDestroy, OnInit } from '@angular/core';
import { MediaChange,MediaObserver } from '@angular/flex-layout';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit,OnDestroy {
  title = 'angular-Training';
  screenSub!:Subscription; 
  constructor(public mediaObserver:MediaObserver)
  {}
  ngOnInit(): void {
    this.screenSub  = this.mediaObserver.asObservable().subscribe((result)=>{
      console.log(result[1].mqAlias)
    })
  }
  ngOnDestroy(): void {
    this.screenSub.unsubscribe
  }
}
