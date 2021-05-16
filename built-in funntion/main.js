/**
 * một số hàm built-in  được xây dựng sẵn
 * alert
 * console
 * confirm
 * Prompt
 * Set timeout
 * Set Interval
 */
var fullName = "Nguyen Van Hùng";
console.log(fullName); // hàm in ra màn hình console
console.log("Hùng đẹp trai");
confirm("xac nhan ban du tuoi?"); // hàm xác nhận
prompt("xác nhận bạn đủ tuổi?"); // hàm xác nhận có ô nhập input
setTimeout(function() {
    alert(" Hùng đẹp trai");
}, 10000); //  set khoảng thời gian thực hiện một hàm sau khoảng thời gian bao nhiều ms
setInterval(function() {
    console.log("xin chao hung dep trai");
}, 1000); // thực hiện một hàm trong khoảng thời gian định kỳ ms liên tục lặp đi lặp lại