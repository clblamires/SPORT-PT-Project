import { LaunchNavigator, LaunchNavigatorOptions } from '@ionic-native/launch-navigator/ngx';
import { Component, OnInit } from '@angular/core';
import { CallNumber } from '@ionic-native/call-number/ngx'

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {

  constructor(
    public callNumber: CallNumber,
    public launchNavigator: LaunchNavigator
  ) { }

  ngOnInit() {
  }

  call( num ){
    this.callNumber.callNumber(num, true).then( response => {
      console.log(response);
    })
  }

  getDirections () {
    // let options: LaunchNavigatorOptions = {
    //   start: 'London, ON',
    //   app: LaunchNavigator.APPS.UBER
    // }
    
    this.launchNavigator.navigate('500 8th Ave. Lewiston Idaho 83501')
      .then(
        success => console.log('Launched navigator'),
        error => console.log('Error launching navigator', error)
      );
  }

  /*this.callNumber.callNumber("18001010101", true)
  .then(res => console.log('Launched dialer!', res))
  .catch(err => console.log('Error launching dialer', err));*/
}
