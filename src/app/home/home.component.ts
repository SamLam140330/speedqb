import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  constructor(private _elementRef: ElementRef) { }

  ngOnInit(): void {
    this._elementRef.nativeElement.removeAttribute("ng-version");
  }
}
