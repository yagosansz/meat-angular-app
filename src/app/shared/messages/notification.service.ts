import { EventEmitter } from '@angular/core';

export class NotificationService {

    notifier = new EventEmitter<string>()

    notify(message: string) {
        return this.notifier.emit(message)
    }

}