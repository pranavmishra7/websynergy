import { Component, OnInit } from '@angular/core';
import { PumpDetails } from 'src/app/models/pump-details.model';
interface SortFields {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-pump-overview',
  templateUrl: './pump-overview.component.html',
  styleUrls: ['./pump-overview.component.scss'],
  providers: [PumpDetails]
})
export class PumpOverviewComponent implements OnInit {
  pumps: Array<PumpDetails> = [];
  baseImgPath:string="../../../assets/images/pump";
  okIcon:string="../../../assets/images/check.png";
  stopIcon:string="../../../assets/images/no-stopping.png"
  constructor(pumpDetails: PumpDetails) {
    for (let i = 0; i < 3; i++) {
      pumpDetails= new PumpDetails();
      pumpDetails.station= "Saint Mary Street Pump Station";
      pumpDetails.modelNumber="CNTRF"+ ((i+1)*10)
      pumpDetails.serialNumber="CNTRF"+Math.floor(Math.random() * (999999 - 100000)) + 100000;
      pumpDetails.description="Pump for station 798776576";
      pumpDetails.location="Needham MA";
      pumpDetails.imgPath=this.baseImgPath+(i+1)+".jpg";
      pumpDetails.status=true;
      this.pumps.push(pumpDetails);
      console.log(this.pumps);

    }
  }
  sortFields: SortFields[] = [
    { value: 'model', viewValue: 'Model' },
    { value: 'serial', viewValue: 'Serial' }
  ];
  ngOnInit(): void {
  }

}
