import { LaunchNavigator } from '@ionic-native/launch-navigator/ngx';
import { Component, OnInit } from '@angular/core';
import { CallNumber } from '@ionic-native/call-number/ngx';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {

  clinics: any = [];

  constructor(
    public callNumber: CallNumber,
    public launchNavigator: LaunchNavigator
  ) {
    this.clinics.push( {
      name: "S.P.O.R.T. Physical Therapy Clinic",
      address: "328 Warner Dr., Ste 8",
      city: "Lewiston",
      state: "ID",
      zip: "83501",
      phone: "2087467573"
    },{
      name: "Tri-State S.P.O.R.T. Physical Therapy Clinic",
      address: "1119 Highland Ave., Ste 2",
      city: "Clarkston",
      state: "WA",
      zip: "99403",
      phone: "5097589404"
    },{
      name: "Orchards S.P.O.R.T. Physical Therapy Clinic",
      address: "3506 12th St.",
      city: "Lewiston",
      state: "ID",
      zip: "83501",
      phone: "2087460214"
    })
  }

  ngOnInit() {
  }

  getPhone( num ){
    return num.substring(0,3) + "-" + num.substring(3,6) + "-" + num.substring(6,10);
  }

  call( num ){
    console.log("Calling " + num);
    this.callNumber.callNumber(num, true).then( response => {
      console.log(response);
    })
  }

  getDirections ( clinic ) { 
    let address = clinic.address + ' ' + clinic.city + ' ' + clinic.state + ' ' + clinic.zip;
    console.log(address);
    this.launchNavigator.navigate( address )
      .then(
        success => console.log('Launched navigator'),
        error => console.log('Error launching navigator', error)
      );
  }

}
