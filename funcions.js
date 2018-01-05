function calcularsegle(any) {
    if (any>=1700 && any<=1799) {
        return +5;
    } else if (any >=1800 && any<=1899) {
        return +3;
    } else if (any >=1900 && any<=1999) {
        return +1;
    } else if (any >=2000 && any<=2099) {
        return 0;
    } else if (any >=2100 && any<=2199) {
        return -2;
    } else if (any >=2200 && any<=2299) {
        return -4;
    }
        

    }

function calcularany(any) {
    
    var calculA = any.charAt(2)+any.charAt(3);
    calculA = parseInt(calculA);
    var quart = calculA / 4;

    var B = calculA+quart;
    return Math.trunc(B);
}

function anydetraspas(any, mes) {
    var calculB = any.charAt(2)+any.charAt(3);
    var traspas;
    mes=parseInt(mes);

    if ((parseInt(calculB)%4==0 && parseInt(calculB)%100!=0) || (parseInt(calculB)%400==0)) {
        traspas=true;
    } else {
        traspas=false;
    }

    if (traspas==true && (mes==1 || mes==2)) {
        return -1;
    } else {
        return 0;
    }

    function calculMes(mes) {
        if (mes == 1) {
            return 6;
        } else if (mes == 2) {
            return 2;
        } else if (mes == 3) {
            return 2;
        } else if (mes == 4) {
            return 5;
        } else if (mes == 5) {
            return 0;
        } else if (mes == 6) {
            return 3;
        } else if (mes == 7) {
            return 5;
        } else if (mes == 8) {
            return 1;
        } else if (mes == 9) {
            return 4;
        } else if (mes == 10) {
            return 6;
        } else if (mes == 11) {
            return 2;
        } else if (mes == 12) {
            return 4;
        }
    }

    function calculDia(dia) {
        dia=parseInt(dia);
        return dia;
    }
    
    function algoritme(A,B,C,D,E) {
        var R=A+B+C+D+E;
    
        while (R>6) {
            var R = (R)-7;
        }
        return R;
    }
    
    function resultado(R) {
        if (R == 1) {
            var resultado= "Lunes";
            return resultado;
        } else if (R == 2) {
            var resultado= "Martes";
            return resultado;
        } else if (R == 3) {
            var resultado= "Miércoles";
            return resultado;
        } else if (R == 4) {
            var resultado= "Jueves";
            return resultado;
        } else if (R == 5) {
            var resultado= "Viernes";
            return resultado;
        } else if (R == 6) {
            var resultado= "Sábado";
            return resultado;
        } else if (R == 0) {
            var resultado= "Domingo";
            return resultado;
        }
}
