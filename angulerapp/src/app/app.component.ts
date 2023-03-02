import { formatDate } from '@angular/common';
import { Component } from '@angular/core';
import { ThemePalette } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  color: ThemePalette = 'accent';
  checked = false;
  disabled = false;
  title = 'angulerapp';
  //  today :Date=new Date();
parentToChild: string="I am coming from parent";
post=[
  {
    title: '',
    content: 'i am upComing anguler developer'
  },
  {
    title: '',
    content: 'i am upComing anguler developer'
  },
  {
    title: '',
    content: 'i am upComing anguler developer'
  }
]
  today= new Date();
  jstoday = '';
  coutn: number=0;
  firstName:string='Rocky';
  username:string='';
  imageUrl='https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg';

  constructor() {
    this.jstoday = formatDate(this.today, 'dd/MM/yyyy  hh:mm:ss a', 'en-US', '+0530');
  }

 data={
  name:'sanket',
age:25

 }
  // constructor(){
  //   this.showDate();
  //   setTimeout(() => {
  //   let s=  this.title="new journey...";
  
      

  //   }, 3000);
 
  // }

  onbtnClick(){
    
   this.coutn +=1;
  }

  Onkeyup(value){
console.log(value);

  }
  onCheckText(){
    this.username=null;
  }

}
