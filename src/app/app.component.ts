import { AppareilService } from './services/appareil.service';
import { Component, OnInit } from '@angular/core';
import { resolve } from 'q';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'oulala premier test  interface';
  clearance = false;
  appareils: any[];
  lastUpdate = new Promise((resolve, reject) => {
    const date = new Date();
    setTimeout(
      () => {

        resolve(date);
      }, 4000
      );
    });


    constructor(private appareilService: AppareilService) {
      setTimeout(
        () => {
          this.clearance = true;
        }, 4000
        );
      }
      ngOnInit() {
        this.appareils = this.appareilService.appareils;
      }
      onAllumer() {
        this.appareilService.switchOnAll();
      }
      onEteindre() {
        if(confirm('sûr? Vraiiiment Sûr? Sûr et certain?')){
          this.appareilService.switchOnOff();
        } else {
          return null;
        }
      }

    }
