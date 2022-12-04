import { Component, OnInit } from '@angular/core';

import 'babylonjs-materials';
import { EngineService } from './engine.service';

@Component({
  selector: 'app-vr',
  templateUrl: './vr.component.html',
  styleUrls: ['./vr.component.scss'],
})
export class VrComponent implements OnInit {
  private canEleId = '#renderCanvas';

  constructor(private engServ: EngineService) {}
  ngOnInit() {
    this.engServ.createScene(this.canEleId);
    this.engServ.animate();
  }
}
