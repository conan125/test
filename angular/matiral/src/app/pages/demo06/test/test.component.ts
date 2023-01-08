import { TestService } from './../test.service';
import {
  ChangeDetectionStrategy,
  Component,
  Host,
  Input,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
  providers: [TestService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TestComponent implements OnInit {
  constructor(@Host() private testService: TestService) {}
  @Input() id: any;
  data: any;
  get pro() {
    return this.testService.save;
  }
  ngOnInit(): void {}
  save() {
    this.testService.setId(this.data);
    this.data = '';
  }
}
