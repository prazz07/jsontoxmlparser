import { Component } from "@angular/core";
import * as JsonToXML from "js2xmlparser";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title= "SVUXML";
  name = "Angular";

  obj = {
    firstName: "pranjal",
    lastName: "agarwal",
    dateOfBirth: new Date(1998, 7, 26),
    address: {
      "@": {
        type: "home"
      },
      streetAddress: "100 main St",
      city: "Chicago",
      state: "Illinois",
      zip: 10000
    },
    email: "john@smith.com"
  };
  FirstName: String = "pranjal";
  LastName: String = this.obj.lastName;
  BirthDate: Date = this.obj.dateOfBirth;
  StreetAddress: String=this.obj.address.streetAddress;
  City: String= this.obj.address.city;
  State: String=this.obj.address.state;
  Zip: number=this.obj.address.zip;
  Email: String= this.obj.email;
  constructor() {
    console.log(JsonToXML.parse("person", this.obj));
  }
}
