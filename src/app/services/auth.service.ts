import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestoreDocument } from "@angular/fire/firestore/document/document";
import { AngularFirestore } from "@angular/fire/firestore";
import { Router } from "@angular/router";
import firebase from "firebase/app";
import { BehaviorSubject, throwError } from "rxjs";
import { NavController } from "@ionic/angular";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  isLoggedIn: BehaviorSubject<boolean> = new BehaviorSubject(false);
  publishError: BehaviorSubject<boolean> = new BehaviorSubject(false);

  userData: any;

  constructor(
    public auth: AngularFireAuth,
    public firestore: AngularFirestore,
    public router: Router,
    public navCtrl: NavController
  ) {
    this.auth.authState.subscribe((user) => {
      if (user && user.emailVerified) {
        this.userData = user;
        localStorage.setItem("user", JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem("user")!);
        this.isLoggedIn.next(true);
      } else {
        localStorage.setItem("user", "null");
        JSON.parse(localStorage.getItem("user")!);
        this.isLoggedIn.next(false);
      }
    });
  }

  loginWithEmailAndPassword(email: string, password: string) {
    return this.auth
      .signInWithEmailAndPassword(email, password)
      .then((result) => {
        if(!result.user.emailVerified) {
          this.auth.signOut();
          window.alert("E-mailul nu a fost verificat. The e-mail has not been verified.")
        }
        else {
          this.setUserData(result.user);
          this.auth.authState.subscribe((user) => {
            this.publishError.next(false);
            if (user) {
              this.isLoggedIn.next(true);
              this.navCtrl.navigateForward("/home", { animated: false });
            }
          });
        }
      })
      .catch((error) => {
        if(error === "E-mailul nu a fost verificat. The e-mail has not been verified.") {
        }
        this.isLoggedIn.next(false);
        this.publishError.next(true);
        console.log(error);
      });
  }

  loginWithGoogle() {
    this.authLogin(new firebase.auth.GoogleAuthProvider());
  }

  loginWithFacebook() {
    this.authLogin(new firebase.auth.FacebookAuthProvider());
  }

  authLogin(provider: any) {
    return this.auth
      .signInWithPopup(provider)
      .then((result) => {
        this.setUserData(result.user);
        this.isLoggedIn.next(true);
        this.navCtrl.navigateForward("/home", { animated: false });
      })
      .catch((error) => {
        this.isLoggedIn.next(false);
        this.navCtrl.navigateForward("/login", { animated: false });
      });
  }

  logout() {
    this.auth.signOut().then(() => {
      localStorage.removeItem("user");
      this.isLoggedIn.next(false);
      this.navCtrl.navigateForward("/login", { animated: false });
    });
  }

  registerWithEmailAndPassword(email: string, password: string) {
    return this.auth
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {
        /* Call the SendVerificaitonMail() function when new user sign 
        up and returns promise */
        this.sendVerificationMail();
        this.auth.signOut()
        this.setUserData(result.user);
      })
      .catch((error) => {
        console.log(error);
        if(error.code === "auth/email-already-in-use") {
          window.alert("Există deja un cont cu acest e-mail. There is already an account with this e-mail.");
        }
      });
  }

  sendVerificationMail() {
    return this.auth.currentUser
      .then((u: any) => u.sendEmailVerification())
      .then(() => {
        this.navCtrl.navigateForward("/verify-email-address", {
          animated: false,
        });
      });
  }

  forgotPassword(passwordResetEmail: string) {
    return this.auth
      .sendPasswordResetEmail(passwordResetEmail)
      .then(() => {
        window.alert("E-mail trimis, verifică inbox-ul și folder-ul spam. E-mail sent, check your inbox and spam folder.");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  setUserData(user: any) {
    const userRef: AngularFirestoreDocument<any> = this.firestore.doc(
      `users/${user.uid}`
    );
    const userData = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      emailVerified: user.emailVerified,
    };
    return userRef.set(userData, {
      merge: true,
    });
  }

  isLoggedInStatus(): boolean {
    const user = JSON.parse(localStorage.getItem("user")!);
    return user !== null && user.emailVerified !== false ? true : false;
  }

  async getToken(): Promise<string> {
    const userToken = await firebase.auth().currentUser.getIdToken();

    return userToken;
  }

  getPublishError() {
    return this.publishError;
  }

  validateEmail(email: string) {
    if (email === undefined) {
      return false;
    }

    const re =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (email.toLowerCase().match(re)) {
      return true;
    }
    return false;
  }

  validateLoginInput(email: string, password: string): boolean {
    if (password == undefined) {
      return false;
    }

    if (this.validateEmail(email) && password.length >= 6) {
      return true;
    }
    return false;
  }

  validateRegistrationInput(
    email: string,
    password: string,
    confirmPassword: string
  ): boolean {
    if (password == undefined || confirmPassword == undefined) {
      return false;
    }

    if (
      !this.validateLoginInput(email, password) ||
      password !== confirmPassword
    ) {
      return false;
    }
    return true;
  }
}
