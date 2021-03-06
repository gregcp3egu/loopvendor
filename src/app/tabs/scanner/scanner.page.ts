import { Component, OnInit } from '@angular/core';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner/ngx';

@Component({
  selector: 'app-scanner',
  templateUrl: './scanner.page.html',
  styleUrls: ['./scanner.page.scss'],
})
export class ScannerPage implements OnInit {
error;
  constructor(private qrScanner: QRScanner) { }

  ngOnInit() {// Optionally request the permission early
    console.log('on in it called', this.qrScanner);
    
    
    this.qrScanner.prepare()
      .then((status: QRScannerStatus) => {
        
        console.log('prepared');
        
         if (status.authorized) {console.log(status)
           // camera permission was granted
    
    
           // start scanning
           this.qrScanner.scan().subscribe((text: string) => {
             console.log('Scanned something', text);
    
            //  this.qrScanner.hide(); 
            //  scanSub.unsubscribe(); 
           });
           
    
         } else if (status.denied) {
           console.log(status)
           // camera permission was permanently denied
           // you must use QRScanner.openSettings() method to guide the user to the settings page
           // then they can grant the permission from there
         } else {
           // permission was denied, but not permanently. You can ask for permission again at a later time.
         }
      })
      .catch((e: any) => {
        console.log('Error is', e)
        this.error = e;

      });
    
  }
  
}
