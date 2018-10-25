import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Store } from '../store';

@Component({
  selector: 'app-page-one',
  templateUrl: './page-one.component.html',
  styleUrls: ['./page-one.component.css']
})
export class PageOneComponent implements OnInit {

  constructor(private store: Store) {
  }

  dev = "";
  qa = "";

  ngOnInit() {
    let dev$ = this.store.select<any[]>('dev');
    dev$.subscribe(item => { if (item) this.dev = item[0].fullName; });
    let qa$ = this.store.select<any[]>('qa');
    qa$.subscribe(item => { if (item) this.qa = item[0].fullName; });
  }

  saveDevState() {
    this.store.set('dev', [{ fullName: this.dev }])
  }

  saveQaState() {
    this.store.set('qa', [{ fullName: this.qa }])
  }

}
