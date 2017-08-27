import {Component, Pipe, PipeTransform, SecurityContext} from '@angular/core';
import {DomSanitizer, SafeHtml} from "@angular/platform-browser";


@Component({
  template: `
    <div class="jumbotron">
      <h1>Welcome to HealthApp</h1>
      <p>This is a platform bringing together Doctors and Patients and helping them communicate, collaborate.</p>
      <p><a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a></p>
    </div>
  `,
})
export class HomeComponent {
}


