import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

declare var UIkit: any;

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'scratchtest';



  ngOnInit() {

    UIkit.util.on(document, 'beforeshow', '.uk-tooltip', function(e: any) {
        e.preventDefault();
    });
  }


}
