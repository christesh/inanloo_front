import { Component, OnInit, ViewChild,Input } from '@angular/core';
import { CountdownComponent } from 'ngx-countdown';
import { range } from "rxjs";
import { map, filter } from "rxjs/operators";

@Component({
  selector: 'app-cdown',
  templateUrl: './cdown.component.html',
  styleUrls: ['./cdown.component.scss']
})
export class CdownComponent implements OnInit {
  @Input() sectopay: any;
  @ViewChild('countdown', { static: false }) private counter: CountdownComponent;
  constructor() { }
  public days: number;
  public config: any;
  public ngOnInit() {


    var timeremain = 20
    this.days = Math.floor(timeremain / 86400)
    var sec = timeremain % 86400

    this.config = { leftTime: sec, demand: false }
  }

  status = 'start';

  timesUp(event) {
    if (event.action == "done") {
      if (this.days > 0) {
        this.days--;
        this.config = { leftTime: '86400' }
        this.counter.restart();
      }
    }
  }




  resetTimer() {
    this.counter.restart();
  }
}
