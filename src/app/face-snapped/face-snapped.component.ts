import { Component, Input, OnInit } from '@angular/core';
import { FaceSnapped } from '../models/face-snapped.model';

@Component({
  selector: 'app-face-snapped',
  templateUrl: './face-snapped.component.html',
  styleUrls: ['./face-snapped.component.scss']
})
export class FaceSnappedComponent implements OnInit {
  @Input() faceSnap!: FaceSnapped;
  buttonMessage!: string;

  ngOnInit(): void {

    this.buttonMessage = "Oh Snap!"; // Default value
  }

  onSnapClick() {
    if (this.buttonMessage === "Oh Snap!") {
      this.faceSnap.snaps++;
      this.buttonMessage = "Oops, un Snap!";
    } else {
      this.faceSnap.snaps--;
      this.buttonMessage = "Oh Snap!";
    }
  }



}
