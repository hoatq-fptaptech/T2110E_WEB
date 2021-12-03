function TamGiac(){
    var x1,x2,x3;
    do{
        x1 = parseInt(prompt("Nhap canh thu nhat:"));
        console.log(x1);
        x2 = parseInt(prompt("Nhap canh thu hai:"));
        console.log(x2);
        x3 = parseInt(prompt("Nhap canh thu ba:"));
        console.log(x3);
    }while (isNaN(x1)|| isNaN(x2) || isNaN(x3) || x1<=0 || x2 <=0 || x3<=0 || !(x1+x2>x3 && x1+x3>x2 && x2+x3>x1));
    console.log("Chu vi:"+ ChuVi(x1,x2,x3));
    console.log("Dien Tich:"+DienTich(x1,x2,x3));
}
function ChuVi(a,b,c){
    return a+b+c;
}
function DienTich(a,b,c){
    var p = ChuVi(a,b,c)/2;
    return Math.sqrt(p*(p-a)*(p-b)*(p-c));
}

// Gia su: tạo 1 số nguyên ngẫu nhiên từ 0->100: parseInt(Math.random()*100)
// Cho người dùng nhập 1 số trong khoảng 0-100. Kiểm tra xem có trúng giải hay không và thông báo.
function Loto(){
    var  n;
    do{
        n= parseInt(prompt("Nhap so may man"));
        if(isNaN(n)|| n<0){
            alert("Nhap so khong chinh xac, vui long nhap lai");
        }
    }while (isNaN(n)|| n<0);
    var r = parseInt(Math.random()*100);
    if(r == n){
        alert("Chuc mung, ban da trung giai");
    }else {
        alert("Rat tiec, chuc ban may man lan sau.");
    }
}
Loto();

// viết phần mềm tạo trò chơi vietlot, mỗi người chơi 1 lần quay giải đc mua 5 vé.