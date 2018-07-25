import { Injectable } from '@angular/core';

@Injectable()
export class AccessLogService {
  logMessages: Array<Object>;
  person: String;
  message: String;
  date: Date;

  constructor() {
    this.logMessages = [];

  }
  addAccessItem(person, message) {
    this.person = person;
    this.message = message;
    this.date = new Date;
    this.logMessages.push({
      person: this.person,
      message: this.message,
      createdAt: this.date
    });
    console.log(this.logMessages);
  }

  getAccessLog() {
    console.log('kjdhlaikwsde');
    return this.logMessages;
  }

}
