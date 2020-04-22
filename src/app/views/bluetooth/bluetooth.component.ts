import { Component, OnInit , NgZone } from '@angular/core';
import { BluetoothCore } from './bluetoothcore.service';
import { BatteryLevelService } from './batterylevel.service';

@Component({
  selector: 'ble-battery-level',
  templateUrl: './bluetooth.component.html',
  styleUrls: ['./bluetooth.component.css'],
  providers:[ BatteryLevelService]
})
export class BluetoothComponent implements OnInit {

  batteryLevel: string = '--';
    device: any = {};

  constructor(
    public _zone: NgZone
    ,
    public _batteryLevelService: BatteryLevelService
    
  ) {}
  
  ngOnInit() {
    this.getDeviceStatus();
    this.streamValues();
  }

  streamValues() {
    this._batteryLevelService.streamValues().subscribe(this.showBatteryLevel.bind(this));
  }
  

  getDeviceStatus() {
    this._batteryLevelService.getDevice().subscribe(
      (device) => {

        if(device) {
          this.device = device;
        }
        else {
          // device not connected or disconnected
          this.device = null;
          this.batteryLevel = '--';
        }
      }
    );
  }

  getFakeValue() {
    this._batteryLevelService.getFakeValue();
  }

  getBatteryLevel() {
    return this._batteryLevelService.getBatteryLevel().subscribe(this.showBatteryLevel.bind(this));
  }

  showBatteryLevel(value: number) {

    // force change detection
    this._zone.run( () =>  {
      console.log('Reading battery level %d', value);
      this.batteryLevel = ''+value;
    });
  }
  
}
