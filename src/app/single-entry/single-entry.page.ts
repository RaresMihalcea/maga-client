import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-single-entry',
  templateUrl: './single-entry.page.html',
  styleUrls: ['./single-entry.page.scss'],
})
export class SingleEntryPage implements OnInit {

  @Input()
	image: string;
	@Input()
	title: string;
  @Input()
  description: string;
  @Input()
  instructors: string[];

  constructor() { }

  ngOnInit() {
    this.image = 'dummy'
    this.title = 'Centrul pentru Complexitate'
    this.description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent pellentesque sagittis nisi vitae fermentum. In feugiat, ante non cursus consequat, tortor risus viverra risus, a lobortis nisl sapien et nunc. Pellentesque quis elit erat. Donec est arcu, mattis at lacus at, efficitur lobortis tortor. Donec sed turpis ut augue bibendum dictum. Vivamus convallis, felis non varius scelerisque, purus ex pharetra lacus, eu posuere nisl ante quis nulla. Cras dolor tellus, vestibulum in sollicitudin nec, posuere posuere velit. Nunc convallis, sem eu consectetur rhoncus, neque ante laoreet diam, vitae ultricies odio ligula eget massa. Suspendisse elementum metus eros, vitae ultrices eros ultrices a. Integer consectetur, ipsum et dictum ornare, orci sapien tincidunt dolor, suscipit condimentum justo velit imperdiet ligula. Duis vel maximus elit, sit amet rhoncus sapien.\
    Nam hendrerit molestie porttitor. Duis pretium mi vitae nulla malesuada, quis volutpat mi ultricies. Vestibulum velit sapien, lacinia sed velit nec, pellentesque sagittis lorem. Sed at ante arcu. Praesent pulvinar, massa et pellentesque placerat, nunc mi ultrices ante, non consequat orci eros id tellus. Suspendisse venenatis sed libero nec aliquam. Etiam condimentum nisl lorem, quis egestas purus ullamcorper eu. Vivamus in ligula vel nisl gravida iaculis non ac est. Cras ornare suscipit viverra. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In congue sapien sollicitudin massa sagittis ultricies.\
    Aliquam sagittis ac ipsum id condimentum. Vestibulum feugiat ultrices interdum. Integer malesuada arcu condimentum ipsum finibus, ut vestibulum mi pharetra. Suspendisse in commodo purus, placerat maximus tellus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec vel tincidunt quam, vel varius velit. In a ex dolor. Duis non est metus. Nullam euismod erat at semper sodales. Praesent maximus enim sed eleifend lobortis. Aliquam iaculis enim ac lobortis maximus. Curabitur rhoncus at augue et tempor. Donec ac nisl felis. Vestibulum enim tortor, sodales in porttitor ut, posuere eget orci.";
  }

}
