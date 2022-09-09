import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

const ucwords = (str: string) => str.toLowerCase().replace(/\b[a-z]/g, (letter) => letter.toUpperCase());

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'risqinina';
  invitedTo = '';

  constructor(
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.queryParams
      .subscribe((params) => {
        console.log(params); // { orderby: "price" }
        this.invitedTo = ucwords(String(params['to'] || '-').replace('dan', '&'));
      }
    );
  }
}
