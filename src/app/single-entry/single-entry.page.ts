import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-entry',
  templateUrl: './single-entry.page.html',
  styleUrls: ['./single-entry.page.scss'],
})
export class SingleEntryPage implements OnInit {

  private type: string;
  private id: string;
  public data: any = {
    title: ''
  };

  constructor(
    private route: ActivatedRoute,
    public firestore: AngularFirestore) { 
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.type = params['type']
      this.id = params['id']

      this.fetchSingleEntryData()
    });
  }

	async fetchSingleEntryData() {
		await this.firestore.collection(this.type).doc(this.id).valueChanges().subscribe(data => {
      this.data = data
    })
	} 

}
