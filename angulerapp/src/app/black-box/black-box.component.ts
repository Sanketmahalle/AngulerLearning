import { Component, ElementRef, ViewChild,  OnInit } from '@angular/core';


@Component({
  selector: 'app-black-box',
  templateUrl: './black-box.component.html',
  styleUrls: ['./black-box.component.css']
})
export class BlackBoxComponent  implements OnInit  {
  ngOnInit() {
  }
constructor(){

}
@ViewChild('horizontalScroll', { static: true }) horizontalScroll!: ElementRef;

ngAfterViewInit(): void {
  const horizontalScrollContainers = this.horizontalScroll.nativeElement.children;
  for (let i = 0; i < horizontalScrollContainers.length; i++) {
    const horizontalScrollContainer = horizontalScrollContainers[i];
    horizontalScrollContainer.addEventListener('scroll', (event: any) => {
      if (event.target.scrollLeft === (event.target.scrollWidth - event.target.clientWidth)) {
        const nextVerticalScrollContainer = horizontalScrollContainer.parentElement.nextElementSibling;
        if (nextVerticalScrollContainer) {
          nextVerticalScrollContainer.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  }
}
}

