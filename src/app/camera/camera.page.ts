import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Plugins, CameraResultType, CameraSource } from '@capacitor/core';
const { Camera } = Plugins;

@Component({
  selector: 'app-camera',
  templateUrl: './camera.page.html',
  styleUrls: ['./camera.page.scss'],
})
export class CameraPage implements OnInit {
  public myImage: any;
  constructor(public sanitizer: DomSanitizer) { }

  async takePicture(){
    const image = await Camera.getPhoto({
      quality: 90,
      resultType:  CameraResultType.DataUrl,
      source: CameraSource.Camera  
    })

    let imageData = image.dataUrl;
    this.myImage = this.sanitizer.bypassSecurityTrustUrl(imageData);
  }

  ngOnInit() {
  }

}
