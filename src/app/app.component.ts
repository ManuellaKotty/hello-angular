import { Component, Input, OnInit } from '@angular/core';
import { FaceSnapped } from './models/face-snapped.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  mySnap!: FaceSnapped;
  myOtherSnap!: FaceSnapped;
  myLastSnap!: FaceSnapped;

  ngOnInit() {
    this.mySnap = new FaceSnapped(
      "Bib's",
      "Mon bébé d'amour",
      new Date(),
      10,
      "../../assets/images/20171212_112203.jpg"
    );

    this.myOtherSnap = new FaceSnapped(
      "Loca Manuella",
      "Loooking good !",
      new Date(),
      6,
      "../../assets/images/20171212_112203.jpg"
    );
    this.myLastSnap = new FaceSnapped(
      "Babi",
      "Ma ville natale. <3",
      new Date(),
      7,
      "../../assets/images/20171212_112203.jpg"
    );

  }
}
