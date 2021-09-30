import { Component } from '@angular/core';
import { Actions } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { actions, selectors } from './store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'profile-template';
  loading = true;

  constructor(private store : Store<any>)
  {
    this.store.dispatch(actions.setScores({game: {
      home:1,
      away:1
    }}));

  this.store.select(selectors.selectHomeCount).subscribe(
    (data) =>{
    console.log(data);
  }
  );
  

  }
  // setTimeout(()=>
  // {
  //   this.loading=true;
  // }, 5000);

   timer: ReturnType<typeof setTimeout> = setTimeout(() => 
   this.loading=false, 2000);

}
