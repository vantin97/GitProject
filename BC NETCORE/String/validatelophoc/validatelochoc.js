function lopHoc (str) {
    regexp = /^[CAP]{1}[0-9]{4}[GHIKLM]{1}/;
    if (regexp.test(str)){
        return true;
    }
    return false;
}
let a = "C02120M";
document.write("C02120M: " + lopHoc(a) + "<br>");
a = "C0210M";
document.write("C0210M: " + lopHoc(a) + "<br>");
a = "M01144G";
document.write("M01144G: " + lopHoc(a) + "<br>");
