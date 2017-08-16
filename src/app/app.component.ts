import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  src ='http://img.dongman.fm/subject/4598b34167e500f140f2002bb126af24.jpeg';
  language:string[] = ['java','php','python','go','c','kotlin'];
}
