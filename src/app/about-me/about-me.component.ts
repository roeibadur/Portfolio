import { Component } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent {

  constructor() { }

  onCV(file: string) {
    let url;
    if(file === 'doc') {
      url= '../../assets/Roei Badur CV.docx'
    }
    else {
      url = '../../assets/Roei Badur CV.pdf'
    }
    window.open(url,'_self');
    window.open(url);
  }

}
