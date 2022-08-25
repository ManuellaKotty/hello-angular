import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-face-snapped',
  templateUrl: './face-snapped.component.html',
  styleUrls: ['./face-snapped.component.scss']
})
export class FaceSnappedComponent implements OnInit {
  title!: string;
  description!: string;
  createdDate!: Date;
  snaps!: number;
  imageUrl!: string;
  buttonMessage!: string;

  ngOnInit(): void {
    this.title = "Bib's";
    this.description = "Mon bébé d'amour";
    this.createdDate = new Date();
    this.snaps = 10;
    this.imageUrl = "../../assets/images/20171212_112203.jpg";
    this.buttonMessage = "Oh Snap!"; // Default value
  }

  onSnapClick() {
    if (this.buttonMessage === "Oh Snap!") {
      this.snaps++;
      this.buttonMessage = "Oops, un snap!";
    } else {
      this.snaps--;
      this.buttonMessage = "Oh snap!";
    }
  }



}
