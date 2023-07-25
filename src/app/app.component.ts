import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'user-control-task';

  countryList = [
    "Algeria", "Bahrain","Chad", "Comoros","Egypt","Eritrea","Iraq","Jordan","Kuwait", "Lebanon","Libya","Mauritania","Morocco",
    "Oman","Palestine","Qatar" , "Saudi Arabia","Somalia","Sudan","Syria","Tunisia","United Arab Emirates", "Yemen"
  ];

  tabList:any[] = [];
  selectedOption:string = '';


  ngOnInit() {
    this.getData();
  }

  saveData(newCountry:any) {
    
    this.tabList.push(newCountry);
  
    localStorage.setItem('myData', JSON.stringify(this.tabList));
    this.getData();
  }

  getData() {
    const dataString = localStorage.getItem('myData');
    if (dataString) {
       this.tabList = JSON.parse(dataString); 
    }
}

 

}