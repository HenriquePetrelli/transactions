import { Injectable } from "@angular/core"
import { ToastComponent } from "../components/toast/toast.component";

@Injectable({
    providedIn: 'root',
})
export class Helper {

    constructor() { }

    removeAccents(str: string | undefined) {
        return str?.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
    }

    showToast(message: string, time: number) {
        // this.toast.showToast(message, time);
    }
}