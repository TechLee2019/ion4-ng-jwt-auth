import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { async } from '@angular/core/testing';

@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
    credentials = {
        email: 'ali@david.com',
        pwd: '123'
    };

    constructor(
        private auth: AuthService,
        private router: Router,
        private alertCtrl: AlertController
    ) { }

    ngOnInit() {
    }

    login()
    {
        this.auth.login(this.credentials).subscribe(async res => {
            if (res) {
                this.router.navigateByUrl('/members');
            } else {
                const alert = await this.alertCtrl.create({
                    header: 'Login Failed',
                    message: 'Wrong credentials',
                    buttons: ['OK']
                });
                alert.present();
            }
        });
    }

}
