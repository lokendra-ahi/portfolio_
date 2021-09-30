import { ViewChild } from '@angular/core';
import { Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-profile-heading',
  templateUrl: './profile-heading.component.html',
  styleUrls: ['./profile-heading.component.scss']
})
export class ProfileHeadingComponent implements OnInit {

  

  i=0;
  constructor(private elRef:ElementRef) { }
  displayName='Welcome john doe';

  @ViewChild('name', { static: false })
  name: ElementRef<HTMLElement>; 
   

typewriter_text: string = "This is John doe ";
typewriter_text1: string = "i am a developer ";
 typewriter_display: string = "This is John doe  ";
 data = ["i am a developer ","i am a traveller "];
 typewriter_display1: string = "";

typingCallback(that?:any) {
  let total_length = that.typewriter_text.length;
  let current_length = that.typewriter_display.length;
  if (current_length < total_length) {
    that.typewriter_display += that.typewriter_text[current_length];
    setTimeout(that.typingCallback, 200, that);
  } else {
    that.typewriter_display = "";
    setTimeout(that.typingCallback, 200, that);
  }
}

typingCallback1(that?:any) {
  let total_length = that.data[that.i%that.data.length].length;
  let current_length = that.typewriter_display1.length;
  // console.log(that.data[0]);
  if (current_length < total_length) {
    that.typewriter_display1 += that.data[(that.i)%that.data.length][current_length];
    setTimeout(that.typingCallback1, 150, that);
  } else {
    that.typewriter_display1 = "";
    that.i++;
    setTimeout(that.typingCallback1, 150, that);
  }
}

  ngOnInit(): void {
    // this.typingCallback(this);
    console.log(this.data);
    this.typingCallback1(this);
    
  }

}
