let result = '';
let phone = '+71234567890';

function getTel() {
    for (let i = 0; i < phone.length; i++) {
        result += phone.charAt(i) + '';
        if (i === 1) {
            result +=   ' (';
        }
        if (i === 4) {
            result +=   ') ';
        }
        else if (i === 7) {
            result +=   '-';
        }
        if (i === 9) {
            result +=   '-';
        }
    }
}
getTel();
console.log(result);
