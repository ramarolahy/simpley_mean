import {Injectable} from '@angular/core';
import {ToastrService} from 'ngx-toastr';

@Injectable()
export class AlertService {
    // Inject ToastrService package that will provide alerts and messages
    constructor(private toastr: ToastrService) {
    }
    // Success message
    public showSuccess(message, title) {
        this.toastr.success(message, title);
    }
    // Warning alert
    public showWarning(message, title) {
        this.toastr.warning(message, title);
    }
    // Error alert
    public showError(message, title) {
        this.toastr.error(message, title);
    }
    // Info alert
    public showInfo(message, title) {
        this.toastr.info(message, title);
    }

}
