import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { NavController } from '@ionic/angular';
import { Course } from 'src/app/models/course';
import { ActiveYearService } from 'src/app/services/active-year.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-segment-form',
  templateUrl: './segment-form.component.html',
  styleUrls: ['./segment-form.component.scss'],
})
export class SegmentFormComponent implements OnInit {

  isLoggedIn: boolean;

  courses: Course[] = [];
  occupations: string[] = ['Elev', 'Student', 'Angajat', 'Freelancer', 'Antreprenor']
  packages: string[] = ['8 zile cu masa inclusă - 600 RON', '8 zile fără masă - 250 RON', '2 zile (Weekend) cu masa inclusă - 270 RON', '2 zile (Weekend) fără masă - 150 RON']
  payMethods: string[] = ['Transfer Bancar', 'Cash la Insulă']
  findOutMethods: string[] = ['Prieteni', 'Facebook', 'Instagram', 'Presă']
  dietaryPreferences: string[] = ['Standard', 'Vegetarian', 'Alergii (se discută la față locului)']

  email: string;
  surname: string;
  firstName: string;
  age: number;
  isCaretaker: boolean;
  dependant: string;
  caretaker: string;
  occupation: string;
  cityOfResidence: string;
  participatedBefore: boolean;
  howDidYouFindOut: string;
  selectedCourses: string[];
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
  ) { }

  ngOnInit() {
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

  navigateToLogin(): void {
    this.navCtrl.navigateForward('/login', {animated: false});
  }

  validateForm(): boolean {
    return false;
  }
}
