import { Injectable } from '@angular/core';
import { DemoService } from '../demo.service';

@Injectable()
export class TestService {
  constructor(private demoService: DemoService) {}
  public save: any;
  public setId(val: any) {
    this.save = val;
  }
}
