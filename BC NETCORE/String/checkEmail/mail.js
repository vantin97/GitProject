function checkMail(str) {
    regexp = /^[A-Za-z0-9]+[A-Za-z0-9]*@[A-Za-z0-9]+(\.[A-Za-z0-9]+)$/;
    if (regexp.test(str)){
        return true;
    }
    return false;
}
let a = "a@gmail.com"
document.write(checkMail(a) + "<br>");
a = "@gmal."
document.write(checkMail(a));