import { Component, OnInit } from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef, OnDestroy} from '@angular/core';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent  {
  mobileQuery: MediaQueryList;

  fillerContent = Array.from({length: 2}, () =>
      ``);
       private _mobileQueryListener: () => void;

       constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
         this.mobileQuery = media.matchMedia('(max-width: 700px)');
         this._mobileQueryListener = () => changeDetectorRef.detectChanges();
         this.mobileQuery.addListener(this._mobileQueryListener);
       }
       ngOnDestroy(): void {
        this.mobileQuery.removeListener(this._mobileQueryListener);
      }
    
     
       shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test(window.location.host));



}
