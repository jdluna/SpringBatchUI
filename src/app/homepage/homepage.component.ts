import { Component, OnInit } from '@angular/core';
import { ToasterModule, ToasterService, ToasterConfig, Toast } from 'angular2-toaster/angular2-toaster';
import { Services } from '../app.services';
import { Homepage } from './homepage';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  public homepage: NgForm;
  public homepageObject: Homepage;
  public mask = ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
  public firstName: any;
  public middleName: any;
  public lastName: any;
  public suffix: any;
  public phoneNumber: any;
  private toasterService: ToasterService;
  public toasterconfig: ToasterConfig = new ToasterConfig({
    positionClass: 'toast-top-center'
  });

  constructor(
    toasterService: ToasterService,
    public serviceLayer: Services
  ) {
    this.homepageObject = new Homepage();
    this.toasterService = toasterService;
  }

  ngOnInit() {
  }

  popToast() {
    const toast: Toast = {
      type: 'info',
      body: 'Record Saved !'
    };
    this.toasterService.pop(toast);
  }

  popToastError() {
    const toast: Toast = {
      type: 'error',
      body: 'Record saving Failed !'
    };
    this.toasterService.pop(toast);
  }


  save() {
  }
  public saveTrack() {

    this.serviceLayer.save(this.homepageObject)
      .subscribe(
        resp => {
          this.popToast();
          this.homepageObject = new Homepage();
        },
        err => {
          this.popToastError();
          console.log(err);
        }
      );
  }
}

