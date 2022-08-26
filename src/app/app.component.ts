import { Component, Input, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { FaceSnapped } from './models/face-snapped.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  faceSnaps!: FaceSnapped[];

  ngOnInit() {
    this.faceSnaps = [
      {
        title: "Bib's",
        description: "Mon bébé d'amour",
        createdDate: new Date(),
        snaps: 18,
        imageUrl: "../../assets/images/20171212_112203.jpg",
        location: "Home"
      },
      {
        title: "Loca Manuella",
        description: "Loooking good !",
        createdDate: new Date(),
        snaps: 6,
        imageUrl: "../../assets/images/20171212_112203.jpg",
        location: "Chez MamanManue"
      },
      {
        title: "Babi",
        description: "Ma ville natale. <3",
        createdDate: new Date(),
        snaps: 7,
        imageUrl: "../../assets/images/20171212_112203.jpg"
      }
    ]

  }
}
