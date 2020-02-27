function checkPhone (str) {
    regexp = /\([0-9]{2}\)\-\([0]{1}[0-9]{9}\)/;
    if (regexp.test(str)) {
        return true;
    }
    return false;
}
let a = "(84)-(0978489648)"
document.write("(84)-(0978489648): " + checkPhone(a) + "<br>");
a = "(a4)-(0978489641312312312)"
document.write("(a4)-(0978489641312312312): " + checkPhone(a) + "<br>");