import { BreakpointObserver } from "@angular/cdk/layout";
import { Component, OnInit } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
import { NavController } from "@ionic/angular";
import { TranslateService } from "@ngx-translate/core";
import { Course } from "src/app/models/course";
import { Participant } from "src/app/models/participant";
import { ActiveYearService } from "src/app/services/active-year.service";
import { AuthService } from "src/app/services/auth.service";
import { BreakpointsService } from "src/app/services/breakpoints.service";
import { LocalizationService } from "src/app/services/localization.service";

@Component({
  selector: "app-segment-form",
  templateUrl: "./segment-form.component.html",
  styleUrls: ["./segment-form.component.scss"],
})
export class SegmentFormComponent implements OnInit {
  isLoggedIn: boolean = false;
  public language: string = this.localization.getLanguage();

  mobile: boolean = true;
  tablet: boolean = true;

  courses: Course[] = [];
  occupations: string[] = [
    "Elev",
    "Student",
    "Angajat",
    "Freelancer",
    "Antreprenor",
  ];
  packages: string[] = [
    "8 zile cu masa inclusă - 600 RON",
    "8 zile fără masă - 250 RON",
    "2 zile (Weekend) cu masa inclusă - 270 RON",
    "2 zile (Weekend) fără masă - 150 RON",
  ];
  payMethods: string[] = ["Transfer Bancar", "Cash la Insulă"];
  findOutMethods: string[] = ["Prieteni", "Facebook", "Instagram", "Presă"];
  dietaryPreferences: string[] = [
    "Standard",
    "Vegetarian",
    "Alergii (se discută la față locului)",
  ];

  errors: string[] = [];

  email: string;
  surname: string;
  firstName: string;
  age: number;
  dependant: string;
  caretaker: string;
  occupation: string;
  isCaretaker: boolean = false;
  cityOfResidence: string;
  participatedBefore: boolean;
  howDidYouFindOut: string;
  selectedCourses: string[] = [];
  package: string;
  payMethod: string;
  dietaryPreference: string;

  defaultYear: number;
  isLoading: boolean;

  success:boolean = false;

  constructor(
    public auth: AuthService,
    public navCtrl: NavController,
    public activeYearService: ActiveYearService,
    public firestore: AngularFirestore,
    public breakpointObserver: BreakpointObserver,
    public breakpoints: BreakpointsService,
    public translate: TranslateService,
    public localization: LocalizationService
  ) {}

  ngOnInit() {
    this.breakpointObserver
      .observe(this.breakpoints.menuBreakpoint)
      .subscribe((result) => {
        this.mobile = result.matches ? true : false;
      });
    this.breakpointObserver
      .observe(this.breakpoints.tablet)
      .subscribe((result) => {
        this.tablet = result.matches ? true : false;
      });

    this.isLoggedIn = this.auth.isLoggedInStatus;
    this.defaultYear = this.activeYearService.getDefaultActiveYear();
    this.fetchCourseData();

    this.localization.languageChange.subscribe((value) => {
      this.language = value;
      if (value == "en") {
        this.occupations = [
          "Pre-university student",
          "Student",
          "Employed",
          "Freelancer",
          "Entrepreneur",
        ];

        this.packages = [
          "8 days with meals included - 600 RON",
          "8 days without meals - 250 RON",
          "2 days (Weekend) with meals included - 270 RON",
          "2 days (Weekend) without meals - 150 RON",
        ];

        this.payMethods = ["Bank Transfer", "Cash on arrival"];
        this.findOutMethods = ["Friends", "Facebook", "Instagram", "Press"];
        this.dietaryPreferences = [
          "Standard",
          "Vegetarian",
          "Alergies (must be discussed on the spot)",
        ];
      } else {
        this.occupations = [
          "Elev",
          "Student",
          "Angajat",
          "Freelancer",
          "Antreprenor",
        ];
        this.packages = [
          "8 zile cu masa inclusă - 600 RON",
          "8 zile fără masă - 250 RON",
          "2 zile (Weekend) cu masa inclusă - 270 RON",
          "2 zile (Weekend) fără masă - 150 RON",
        ];
        this.payMethods = ["Transfer Bancar", "Cash la Insulă"];
        this.findOutMethods = ["Prieteni", "Facebook", "Instagram", "Presă"];
        this.dietaryPreferences = [
          "Standard",
          "Vegetarian",
          "Alergii (se discută la față locului)",
        ];
      }
    });
  }

  async fetchCourseData() {
    this.isLoading = true;
    const courseQuery = this.firestore
      .collection("courses")
      .ref.where("years", "array-contains", this.defaultYear);

    await courseQuery.get().then((data) => {
      console.log(data);
      data.forEach((doc) => {
        const fetchedCourse: Course = doc.data() as Course;
        fetchedCourse.id = doc.id;
        this.courses.push(fetchedCourse);
      });
      this.isLoading = false;
    });
  }

  submitForm() {
    if (this.validateForm()) {
      let participant: Participant = this.constructParticipant();
      this.firestore
        .collection("participants")
        .add({ ...participant })
        .then(() => {
          this.success = true;
          console.log("added");
        });
    }
  }

  constructParticipant(): Participant {
    let dependant = this.dependant === undefined ? "N/A" : this.dependant;
    let caretaker = this.caretaker === undefined ? "N/A" : this.caretaker;
    let dietaryPreference =
      this.dietaryPreference === undefined ? "N/A" : this.dietaryPreference;

    return {
      email: this.email,
      surname: this.surname,
      firstName: this.firstName,
      age: this.age,
      isCaretaker: this.isCaretaker,
      dependant: dependant,
      caretaker: caretaker,
      occupation: this.occupation,
      cityOfResidence: this.cityOfResidence,
      participatedBefore: this.participatedBefore,
      howDidYouFindOut: this.howDidYouFindOut,
      selectedCourses: this.selectedCourses,
      package: this.package,
      payMethod: this.payMethod,
      dietaryPreference: dietaryPreference,
      paid: false,
    } as Participant;
  }

  validateForm(): boolean {
    this.errors = [];
    if (!this.auth.validateEmail(this.email)) {
      this.addError("E-mailul trebuie sa fie valid");
    }
    if (this.firstName === undefined || this.firstName.length == 0) {
      this.addError("Prenumele nu poate fi gol");
    }
    if (this.surname === undefined || this.surname.length == 0) {
      this.addError("Numele nu poate fi gol");
    }
    if (this.age === undefined) {
      this.addError("Varsta trebuie specificata");
    } else {
      if (this.age < 0) {
        this.addError("Varsta nu poate fi negativa");
      }
    }
    if (this.occupation === undefined || this.occupation.length == 0) {
      this.addError("Ocupatia trebuie specificata");
    }
    if (
      this.cityOfResidence === undefined ||
      this.cityOfResidence.length == 0
    ) {
      this.addError("Locatia de resedinta trebuie specificata");
    }
    if (
      this.age < 18 &&
      (this.occupation === undefined || this.caretaker.length == 0)
    ) {
      this.addError(
        "Persoana care te insoteste ca minor trebuie specificata"
      );
    }
    if (
      this.age >= 18 &&
      this.isCaretaker &&
      (this.dependant === undefined || this.dependant.length == 0)
    ) {
      this.addError(
        "Daca sunteti insotitor, personele insotite trebuie specificate"
      );
    }
    if (this.participatedBefore === undefined) {
      this.addError(
        "Va rugam sa specificati daca ati mai participat in tabara"
      );
    }
    if (this.findOutMethods === undefined) {
      this.addError(
        "Va rugam sa specificati daca ati mai participat in tabara"
      );
    }
    if (this.selectedCourses.length < 5) {
      this.addError(
        "Trebuie sa alegeti 5 cursuri la care doriti sa participati, odata inceputa tabara, puteti participa la mai multe"
      );
    }
    if (this.package === undefined) {
      this.addError("Trebuie sa alegeti un pachet durata-masa");
    }
    if (this.payMethod === undefined) {
      this.addError("Trebuie sa alegeti o metoda de plata");
    }
    if (
      (this.package === this.packages[0] ||
        this.package === this.packages[2]) &&
      this.dietaryPreference === undefined
    ) {
      this.addError(
        "Pentru pachetele care includ masa, trebuie specificate preferintele alimentare"
      );
    }
    return this.errors.length === 0;
  }

  onAgeChange(event) {
    if (event.target.value < 18) {
      this.isCaretaker = false;
    }
  }

  onIsCaretakerChange(event) {
    this.isCaretaker = event.target.value === "true";
  }

  onCoursesChanged(event) {
    let course = event.target.value;
    let checked = event.target.checked;
    if (checked) {
      if (!this.selectedCourses.includes(course)) {
        this.selectedCourses.push(course);
      }
    } else {
      this.selectedCourses = this.selectedCourses.filter((el) => el != course);
    }
  }

  navigateToLogin(): void {
    this.navCtrl.navigateForward("/login", { animated: false });
  }

  addError(error: string) {
    if(this.language == "en") { 
      if(error === "E-mailul trebuie sa fie valid") {
        error = "E-mail must be valid";
      }
      if(error === "Prenumele nu poate fi gol") {
        error = "First name cannot be empty";
      }
      if(error === "Numele nu poate fi gol") {
        error = "Last name cannot be empty";
      }
      if(error === "Varsta trebuie specificata") {
        error = "Age must be specified";
      }
      if(error === "Varsta nu poate fi negativa") {
        error = "Age cannot be negative";
      }
      if(error === "Ocupatia trebuie specificata") {
        error = "Occupation must be specified";
      }
      if(error === "Locatia de resedinta trebuie specificata") {
        error = "City of residence must be specified";
      }
      if(error === "Persoana care te insoteste ca minor trebuie specificata") {
        error = "The person accompanying you as a minor must be specified";
      }
      if(error === "Daca sunteti insotitor, personele insotite trebuie specificate") {
        error = "If you are an accompanying person, the accompanied persons must be specified";
      }
      if(error === "Va rugam sa specificati daca ati mai participat in tabara") {
        error = "Please specify if you have participated in the camp before";
      }
      if(error === "Trebuie sa alegeti 5 cursuri la care doriti sa participati, odata inceputa tabara, puteti participa la mai multe") {
        error = "You must choose 5 courses you want to attend, once the camp has started, you can attend more";
      }
      if(error === "Trebuie sa alegeti un pachet durata-masa") {
        error = "You must choose a duration-meal package";
      }
      if(error === "Trebuie sa alegeti o metoda de plata") {
        error = "You must choose a payment method";
      }
      if(error === "Pentru pachetele care includ masa, trebuie specificate preferintele alimentare") {
        error = "For packages that include meals, dietary preferences must be specified";
      }
    } 
    this.errors.push(error);
  }
}
