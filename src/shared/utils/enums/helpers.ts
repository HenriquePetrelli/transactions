import { Injectable } from "@angular/core"

@Injectable({
    providedIn: 'root',
})
export class Helper {

    removeAccents(str: string | undefined) {
            return str?.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
    }
}