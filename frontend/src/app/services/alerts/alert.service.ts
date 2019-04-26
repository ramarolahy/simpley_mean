import {Injectable} from '@angular/core';
import {ToastrService} from 'ngx-toastr';

@Injectable()
export class AlertService {

    constructor(private toastr: ToastrService) {
    }

    public showSuccess(message, title) {
        this.toastr.success(message, title);
    }

    public showWarning(message, title) {
        this.toastr.warning(message, title);
    }

    public showError(message, title) {
        this.toastr.error(message, title);
    }

    public showInfo(message, title) {
        this.toastr.info(message, title);
    }

}
