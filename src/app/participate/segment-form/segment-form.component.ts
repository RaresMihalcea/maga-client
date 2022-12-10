import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { NavController } from '@ionic/angular';
import { Course } from 'src/app/models/course';
import { Participant } from 'src/app/models/participant';
import { ActiveYearService } from 'src/app/services/active-year.service';
import { AuthService } from 'src/app/services/auth.service';
import { BreakpointsService } from 'src/app/services/breakpoints.service';

@Component({
  selector: 'app-segment-form',
  templateUrl: './segment-form.component.html',
  styleUrls: ['./segment-form.component.scss'],
})
export class SegmentFormComponent implements OnInit {

  isLoggedIn: boolean = false;

  mobile: boolean = true;
  tablet: boolean = true;

  courses: Course[] = [];
  occupations: string[] = ['Elev', 'Student', 'Angajat', 'Freelancer', 'Antreprenor']
  packages: string[] = ['8 zile cu masa inclusă - 600 RON', '8 zile fără masă - 250 RON', '2 zile (Weekend) cu masa inclusă - 270 RON', '2 zile (Weekend) fără masă - 150 RON']
  payMethods: string[] = ['Transfer Bancar', 'Cash la Insulă']
  findOutMethods: string[] = ['Prieteni', 'Facebook', 'Instagram', 'Presă']
  dietaryPreferences: string[] = ['Standard', 'Vegetarian', 'Alergii (se discută la față locului)']

  errors: string[] = []

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

  constructor(
    public auth: AuthService,
    public navCtrl: NavController,
    public activeYearService: ActiveYearService,
    public firestore: AngularFirestore,
    public breakpointObserver: BreakpointObserver,
		public breakpoints: BreakpointsService,
  ) { }

  ngOnInit() {
		this.breakpointObserver.observe(this.breakpoints.menuBreakpoint).subscribe(result => {
			this.mobile = (result.matches) ? true : false;
		});
		this.breakpointObserver.observe(this.breakpoints.tablet).subscribe(result => {
			this.tablet = (result.matches) ? true : false;
		});
  
    this.isLoggedIn = this.auth.isLoggedInStatus
    this.defaultYear = this.activeYearService.getDefaultActiveYear();
    this.fetchCourseData()
  }

  async fetchCourseData() {
    this.isLoading = true;
    const courseQuery = this.firestore.collection('courses').ref.where("years", 'array-contains', this.defaultYear)

    await courseQuery.get().then(data => { 
      console.log(data)
      data.forEach(doc => {
      const fetchedCourse: Course = doc.data() as Course;
      fetchedCourse.id = doc.id
        this.courses.push(fetchedCourse)
      })
      this.isLoading = false
    })
	} 

  submitForm() {
    if(this.validateForm()) {
      let participant: Participant = this.constructParticipant()
      this.firestore.collection('participants').add({...participant}).then(() => {
        console.log('added')
      })
    }
  }

  constructParticipant(): Participant {

    let dependant = this.dependant === undefined ? 'N/A' : this.dependant;
    let caretaker = this.caretaker === undefined ? 'N/A' : this.caretaker;
    let dietaryPreference = this.dietaryPreference === undefined ? 'N/A' : this.dietaryPreference;

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
      paid: false
    } as Participant
  }

  validateForm(): boolean {
    this.errors = []
    if(!this.auth.validateEmail(this.email)) {
      this.errors.push("E-mailul trebuie sa fie valid")
    }
    if(this.firstName === undefined || this.firstName.length == 0) {
      this.errors.push("Prenumele nu poate fi gol")
    }
    if(this.surname === undefined || this.surname.length == 0) {
      this.errors.push("Numele nu poate fi gol")
    }
    if(this.age === undefined) {
      this.errors.push("Varsta trebuie specificata")
    } else {
      if(this.age < 0) {
        this.errors.push("Varsta nu poate fi negativa")
      }
    } 
    if(this.occupation === undefined || this.occupation.length == 0) {
      this.errors.push("Ocupatia trebuie specificata")
    }
    if(this.cityOfResidence === undefined || this.cityOfResidence.length == 0) {
      this.errors.push("Locatia de resedinta trebuie specificata")
    }
    if(this.age < 18 && (this.occupation === undefined || this.caretaker.length == 0)) {
      this.errors.push("Persoana care te insoteste ca minor trebuie specificata")
    }
    if(this.age >= 18 && this.isCaretaker && (this.dependant === undefined || this.dependant.length == 0)) {
      this.errors.push("Daca sunteti insotitor, personele insotite trebuie specificate")
    }
    if(this.participatedBefore === undefined) {
      this.errors.push("Va rugam sa specificati daca ati mai participat in tabara")
    }
    if(this.findOutMethods === undefined) {
      this.errors.push("Va rugam sa specificati daca ati mai participat in tabara")
    }
    if(this.selectedCourses.length < 5) {
      this.errors.push("Trebuie sa alegeti 5 cursuri la care doriti sa participati, odata inceputa tabara, puteti participa la mai multe")
    }
    if(this.package === undefined) {
      this.errors.push("Trebuie sa alegeti un pachet durata-masa")
    }
    if(this.payMethod === undefined) {
      this.errors.push("Trebuie sa alegeti o metoda de plata")
    }
    if((this.package === this.packages[0] || this.package === this.packages[2]) && this.dietaryPreference === undefined) {
      this.errors.push("Pentru pachetele care includ masa, trebuie specificate preferintele alimentare")
    }
    return this.errors.length === 0;
  }

  onAgeChange(event) {
    if(event.target.value < 18) {
      this.isCaretaker = false
    }
  }

  onIsCaretakerChange(event) {
    this.isCaretaker = (event.target.value === 'true')
  }

  onCoursesChanged(event) {
    let course = event.target.value
    let checked = event.target.checked
    if(checked) {
      if(!this.selectedCourses.includes(course)) {
        this.selectedCourses.push(course)
      } 
    } else {
      this.selectedCourses = this.selectedCourses.filter(el => el != course)
    }
  }

  navigateToLogin(): void {
    this.navCtrl.navigateForward('/login', {animated: false});
  }
}

