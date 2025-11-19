function addToCart(item){alert(item + " ถูกเพิ่มลงในตะกร้าแล้ว!");}
function sendMessage(e){e.preventDefault();let n=document.getElementById("name").value;
document.getElementById("result").innerHTML="ขอบคุณ "+n+" ทางร้านจะติดต่อกลับเร็วที่สุด";}