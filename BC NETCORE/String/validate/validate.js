function valiDate (str) {
    regexp = /^[_a-z0-9]{6,}$/;
    if (regexp.test(str)) {
        return true;
    }
    return false;
}
let a = "_____";
document.write("_____ : " + valiDate(a) + "<br>");
a = "123ac_";
document.write("123ac_ : " + valiDate(a) + "<br>");
a = "asdAAAf____f";
document.write("asdAAAf____f : " + valiDate(a) + "<br>");
a = "123aa__45";
document.write("123aa__45 : " + valiDate(a) + "<br>");
a = ".@@@@@@";
document.write(".@@@@@@ : " + valiDate(a) + "<br>");





