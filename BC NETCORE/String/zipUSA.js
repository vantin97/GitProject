function zipUsa(str){
    regexp = /^[0-9]{5}(?:-[0-9]{4})?$/;
    if (regexp.test(str)) {
        return true;
    }
    return false;  
}
let a = "85465-5454";
document.write(zipUsa(a) + "<br>");
a = "7895";
document.write(zipUsa(a));