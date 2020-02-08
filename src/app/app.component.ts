import { Component } from '@angular/core';
import Amplify , {Auth} from 'aws-amplify';
import awsconfig from '../aws-exports';
Amplify.configure(awsconfig);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isLogin:Boolean = false;
  constructor() {
    var that = this;
    Auth.currentSession()
    .then(data => {
      that.isLogin = true;
    })
    .catch(err => {
      that.isLogin = false;
    });

    Auth.currentCredentials()
    .then(data => {
      console.log("boom 21",data)
    })
    .catch(err => console.log(err));
  }

  signin(){
    Auth.federatedSignIn();
  }

  signout(){
    Auth.signOut()
      .then(data => console.log(data))
      .catch(err => console.log(err));
  }
}
