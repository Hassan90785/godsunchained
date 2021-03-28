import {Component, OnInit} from '@angular/core';
import * as fas from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  fas: any = fas;

  constructor() {
  }

  ngOnInit(): void {
  }

}
