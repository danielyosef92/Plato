import {Component, OnInit} from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {worker} from 'cluster';

interface Worker {
    firstName: String;
    lastName: String;
    roll: String;
    id?: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent implements OnInit {
  workersCollection: AngularFirestoreCollection<Worker>;
  workers: Observable<Worker[]>;

  constructor(private afs: AngularFirestore) {}

  ngOnInit() {
    this.workersCollection = this.afs.collection('Workers');
    this.workers = this.workersCollection.valueChanges();
    console.log('zibi');
  }


}
