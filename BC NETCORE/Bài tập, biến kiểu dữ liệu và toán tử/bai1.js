var inputLy;
var inputHoa;
var inputSinh;

inputLy= prompt('điểm vật lý');
inputHoa= prompt('điểm hóa');
inputSinh= prompt('điểm sinh');
ly= parseInt(inputLy);
hoa= parseInt(inputHoa);
sinh= parseInt(inputSinh);
var diemtrungbinh= (ly + hoa + sinh)/3;
var diemtong= (ly + hoa + sinh);
document.write(' Điểm trung bình = ' + diemtrungbinh );
document.write('<br>');
document.write('Điểm tổng = ' + diemtong );
