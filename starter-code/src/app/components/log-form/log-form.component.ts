import { Component, OnInit } from '@angular/core';
import { AccessLogService } from '../../services/access-log.service';

@Component({
  selector: 'app-log-form',
  templateUrl: './log-form.component.html',
  styleUrls: ['./log-form.component.css']
})
export class LogFormComponent implements OnInit {
  accessLogService: any;

  constructor() {
    this.accessLogService = new AccessLogService;
    this.accessLogService.getAccessLog();
  }

  ngOnInit() {

  }

}

