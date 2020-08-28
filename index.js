class RutValidator {

    constructor() {
    }

    format(rut) {

        const current = rut.replace(/^0+/, "");

        if (current != '' && current.length > 1) {

            const unformatRut = this.unformat(current);
            const cleanRut = unformatRut.substring(0, unformatRut.length - 1);

            // let rutNumberFormat = new Intl.NumberFormat('de-DE').format(cleanRut)

            let rutNumberFormat = "";

            let i = 0;
            let j = 1;

            for (i = cleanRut.length - 1; i >= 0; i--) {
                rutNumberFormat = cleanRut.charAt(i) + rutNumberFormat;
                if (j % 3 == 0 && j <= cleanRut.length - 1 ) {
                    rutNumberFormat = "." + rutNumberFormat;
                }
                j++;
            }

            let dv = unformatRut.substring(unformatRut.length - 1);
            rutNumberFormat = rutNumberFormat + "-" + dv;
            return rutNumberFormat;
        }
        return current;
    }


    unformat(rut) {
        return rut.replace(/\./g, "").replace(/-/g, "");
    }

    validate(rut) {
        const cleanRut = this.unformat(rut);

        let body = cleanRut.slice(0, -1);
        let dv = cleanRut.slice(-1).toUpperCase();

        if (body.length < 7) return false;

        let plus = 0;
        let multiple = 2;

        for (let i = 1; i <= body.length; i++) {
            plus = plus + (multiple * cleanRut.charAt(body.length - i));
            if (multiple < 7) {
                multiple = multiple + 1;
            } else {
                multiple = 2;
            }
        }

        let dvAwait = 11 - (plus % 11);

        dv = (dv == 'K') ? 10 : dv;
        dv = (dv == 0) ? 11 : dv;

        return dvAwait == dv;
    }

    isValid(rut){
        let clean = (rut).replace(/[^0-9Kk]/g, "")
        return clean.length < 10;
    }

}


export default new RutValidator();

