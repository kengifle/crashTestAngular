export class AppareilService{

  appareils = [
    {
      name : 'machine à découdre',
      status: 'non allumé'
    },
    {
      name : 'machine à frire',
      status: 'complètement allumé'
    },
    {
      name : 'machine à manger',
      status: 'non allumé'
    },
  ];
//   ngOnInit() {
//     this.appareils = this.appareilService.appareils;
// }
switchOnAll(){
  for(let appareil of this.appareils){
    appareil.status = 'complètement allumé';
  }
}
switchOnOff(){
  for(let appareil of this.appareils){
    appareil.status = 'non allumé';
  }
}
  switchOnOne(i: number){

    this.appareils[i].status = 'complètement allumé';}

  switchOffOne(i: number){
    this.appareils[i].status = 'non allumé';
  }
}

