import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'UC1';
  imgurl="../assets/img.jpeg";
  userName:string="";
  nameError:string="";

  ngOnInit():  void{
    this.title = "Hello from BridgeLabz.";
  }
  url="https://www.bridgelabz.com"
  onClick($event:any){
    console.log("save button is clicked!",$event);
    window.open(this.url,"_blank");
  }
//  UC5
  onInput($event :any){
    console.log("Change Event Occurred !", $event.data);
    const nameRegex=RegExp('^[A-Z]{1}[a-zA-Z\\s]{2,}$');
    if(nameRegex.test(this.userName)){
      this.nameError="";
      return;
    }
    this.nameError="Name is Incorrect";
  }
}