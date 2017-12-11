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

function calculany(anyo) {
    (anyo).charAt(2,3) + anyo.charAt((2,3)/4);
}