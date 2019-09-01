import { EventEmitter } from '@angular/core';

export class NotificationService {

    notifier = new EventEmitter<any>()

    notify(message: string) {
        return this.notifier.emit(message)
    }

}