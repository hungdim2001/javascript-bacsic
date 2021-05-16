/**
 * ClassList property
 *add: thêm class vào element
 *contains: kiểm tra class có trong element hay không
 *remove:xoá bỏ class trong element
 *toggle:nếu gọi phương thức này thì có class thì sẽ xoá class khỏi element không có thì sẽ thêm class vào element
 * 
 */
setInterval(function(){
document.querySelector('.box').classList.toggle('background2');
},10000)
