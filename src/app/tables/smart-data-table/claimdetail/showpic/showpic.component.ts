import { Component, OnInit ,Input,Output, EventEmitter, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-showpic',
  templateUrl: './showpic.component.html',
  styleUrls: ['./showpic.component.scss'],
  
})
export class ShowpicComponent implements OnInit {
  @Input() picurl:string;

  public image="";
  @Output()
  onClose: EventEmitter<boolean> = new EventEmitter();

  closeModal() {
    this.onClose.emit(true);
  }

  constructor() { }

  ngOnInit() {
    this.image=this.picurl;
    
  }

}
