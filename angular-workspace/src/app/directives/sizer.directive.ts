import { Directive, HostBinding, HostListener, Input } from "@angular/core";

@Directive({
  selector: "[appSizer]"
})
export class SizerDirective {

  @Input('appSizer')
  config : {}

  @HostBinding("style.width.px")
  width: number;

  @HostBinding("style.background-color")
  bkCl : string

  @HostBinding("style.color")
  fgCl : string

  @HostListener("mouseenter")
  mouseIn() {
    this.width = 500;
  }

  @HostListener("mouseleave")
  mouseOut() {
    this.width = 300;
  }

  ngOnInit(){
    this.width = this.config['wd']
    this.bkCl = this.config['bkCl']
    this.fgCl = this.config['fgCl']
  }
  constructor() {}
}
