import { Component } from '@angular/core';
import { PhotoViewer } from '@ionic-native/photo-viewer/ngx';
import { File } from '@ionic-native/file/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private photoViewer: PhotoViewer, private file: File) {}
  open() {
    this.photoViewer.show(this.file.applicationDirectory + 'www/assets/img/perennial-org-chart.jpg');
  }
}
