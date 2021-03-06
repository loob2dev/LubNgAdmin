import { Component, OnInit } from "@angular/core";

@Component({
  selector: "profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.scss"],
})
export class ProfileComponent implements OnInit {
  avatarImgSrc: string = "assets/images/avatar.jpg";
  userName: string = "Lub2code";
  userPost: string = "FrontEnd";

  constructor() {}

  ngOnInit() {}
}
