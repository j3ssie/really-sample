import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
    name = 'Angular 7';
    title = 'angular-app';


    // This should cause an error
    // alert(3);

    eviltag = '<a href="javascript:alert(1)" class="badge badge-dark" onclick=alert(1)>clickme</a><script>console.log("XSS")</script>';
    msg = ' Hello Angular  <a href="javascript:alert(1)" class="badge badge-dark" onclick=alert(1)>clickme</a> ';

    rawjs = 'alert(1)';
    url = 'javascript:alert(1)';
    evt = 'alert(1)';
    raw = '{{msg}}';

    onClick(){
    console.log('clicked!');
    }

}
