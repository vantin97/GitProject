let year = parseInt(prompt("Enter A Year"));
if (year % 4 == 0) {
    if (year % 100 == 0 ){
        if (year % 400 == 0){
            alert(year + " đây là năm nhuan ");
        }
        else {
            alert(year + " đây không phải là năm nhuận ");
        }        
    }
    else {
        alert(year + " Đây là năm nhuận ");        
    }
}
else {
    alert(year + " Đây không phải là năm nhuận ");
}