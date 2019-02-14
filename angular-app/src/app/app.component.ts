import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-app';

  // This should cause an error
  // alert(3);


  msg = ' Hello Angular  <a href="javascript:alert(1)" class="badge badge-dark" onclick=alert(1)>clickme</a> ';
  eviltag = " <svg/onload=alert(1)>";


  rawjs = 'alert(1)';
  url = 'javascript:alert(1)';
  evt = 'alert(1)';
  raw = '{{msg}}';

  onClick(){
    console.log('clicked!');
  }

}
