import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../../auth.service';
import { ActionSheet, ActionSheetOptions } from '@ionic-native/action-sheet/ngx';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { ModalController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { OnboardService } from '../onboard.service';

@Component({
  selector: 'app-owner',
  templateUrl: './owner.component.html',
  styleUrls: ['./owner.component.scss']
})
export class OwnerComponent implements OnInit {

  main_loading: boolean;
  error;
  profile = {};
  form: FormGroup;
  loading: boolean;
  started: boolean;
  img_loading: Boolean;
  newSrc;
  image;

  constructor(
    private fb: FormBuilder, 
    private as: AuthService, 
    private route: ActivatedRoute,
    private router: Router,
    private ts: ToastController,
    private os: OnboardService,
    public modalController: ModalController, private camera: Camera,
    private actionSheet: ActionSheet) {
    this.createForm()
  }

  ngOnInit() {
  }

  createForm() {
    this.form = this.fb.group({
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      email_address: ['', Validators.required],
      address: this.fb.group({
        number: ["", Validators.required],
        street: ["", Validators.required],
        postcode: ["", Validators.required],
        country: ["", Validators.required]
      })
    })
  }

  create() {
    if (!this.image) {
      this.presentToast('Image is required');
    } else {
      this.loading = true;
      let form = new FormData();
      form.set('image', this.image, 'ownerimage.jpg');
      form.set('form', JSON.stringify(this.form.value));
      this.os.createOwner(form).subscribe(
        data => {
          console.log(data);
          this.router.navigate(['/onboard/shop'])
        },
        error => {
          this.presentToast(error.message)
        }
      ).add(() => {this.loading = false})
    } 
  }

  getStarted(){
    this.started = true;
  }

  async presentToast(message) {
    const toast = await this.ts.create({
      message,
      showCloseButton: true,
      position: 'top',
      cssClass: 'ztoast'
    });
    toast.present();
  }

  takePhoto(source) {
    const options: CameraOptions = {
      quality: 70,
      sourceType: source,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      correctOrientation: true
    }


    this.img_loading = true;
    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      
      let base64Image = 'data:image/jpeg;base64,' + imageData;
      this.img_loading = false;
      this.newSrc = base64Image;
      this.image = this.dataURItoBlob(base64Image)
    }, (err) => {
      // Handle error
      // this.presentToast(err)
    });
  }

  dataURItoBlob(dataURI) {
    // convert base64/URLEncoded data component to raw binary data held in a string
    var byteString;
    if (dataURI.split(',')[0].indexOf('base64') >= 0)
      byteString = atob(dataURI.split(',')[1]);
    else
      byteString = unescape(dataURI.split(',')[1]);
    // separate out the mime component
    var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
    // write the bytes of the string to a typed array
    var ia = new Uint8Array(byteString.length);
    for (var i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }
    
    return new Blob([ia], { type: mimeString });
  }

  showActionSheet() {
    let buttonLabels = ['Photo Library'];

    const options: ActionSheetOptions = {
      // title: 'Upload a profile picture',
      // subtitle: 'Choose an action',
      buttonLabels: buttonLabels,
      addCancelButtonWithLabel: 'Cancel',
      // addDestructiveButtonWithLabel: 'Delete',
      // androidTheme: this.actionSheet.ANDROID_THEMES.THEME_HOLO_DARK,
      destructiveButtonLast: true
    }

    this.actionSheet.show(options).then((buttonIndex: number) => {
      // console.log('Button pressed: ' + buttonIndex);


      if (buttonIndex == 1) {
        this.takePhoto(this.camera.PictureSourceType.PHOTOLIBRARY);
      }

    });
  }

}
