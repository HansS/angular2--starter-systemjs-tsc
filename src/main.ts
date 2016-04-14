import {Component, OnInit, OnDestroy  } from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';

@Component({
  selector: 'hs-app',
  providers: [],
  template: '<div>{{title}}</div>',
  styleUrls: [],
  directives: [],
  pipes: []
})

export class HsApp implements OnInit  {

    title: string = "Hans im Glück!!!!"
    
    constructor() { }

    ngOnInit() { console.log('ngOnInit'); }
    ngOnDestroy() { console.log('ngOnDestroy'); }
}

bootstrap(HsApp);