import {Component, OnInit, OnDestroy  } from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';

@Component({
  selector: 'hs-app',
  providers: [],
  templateUrl: 'dist/components/app/app.html',
  styleUrls: [],
  directives: [],
  pipes: []
})

export class HsApp implements OnInit  {

    title: string = "Hans from App Component";
    
    constructor() { }

    ngOnInit() { console.log('ngOnInit'); }
    ngOnDestroy() { console.log('ngOnDestroy'); }
}

bootstrap(HsApp);