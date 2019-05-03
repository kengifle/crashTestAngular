import { AppareilService } from './../services/appareil.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent implements OnInit {

  @Input() appareilName: string;
  @Input() appareilStatus: string;
  @Input() index: number;

  constructor(private AppareilService: AppareilService) { }

  ngOnInit() {
  }
getStatusNow() {
  return this.appareilStatus;
}
getColor(){
  if(this.appareilStatus==='complètement allumé'){
    return 'green';
  } else if (this.appareilStatus==='non allumé')
  return 'pink';
}

onSwitch(){
  if(this.appareilStatus === 'complètement allumé'){
    this.AppareilService.switchOffOne(this.index);
 } else if (this.appareilStatus === 'non allumé'){
this.AppareilService.switchOnOne(this.index);
 }


}
}
