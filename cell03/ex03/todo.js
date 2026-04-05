const ftList = document.getElementById('ft_list');
const newBtn = document.getElementById('newBtn');

// 1. โหลดข้อมูลจาก Cookie เมื่อเปิดหน้าเว็บ
window.onload = () => {
    const cookies = document.cookie.split('; ');
    const todoCookie = cookies.find(row => row.startsWith('todo='));
    if (todoCookie) {
        const data = JSON.parse(decodeURIComponent(todoCookie.split('=')[1]));
        // วนลูปสร้างรายการจากข้อมูลที่บันทึกไว้ (แสดงจากล่างขึ้นบนเพื่อให้ลำดับถูกต้อง)
        data.reverse().forEach(text => createTodoElement(text));
    }
};

// 2. ฟังก์ชันบันทึกข้อมูลลงใน Cookie
function saveToCookie() {
    const todos = [];
    const items = ftList.querySelectorAll('div');
    items.forEach(item => todos.push(item.innerText));
    
    // ตั้งค่าวันหมดอายุ 7 วัน
    const d = new Date();
    d.setTime(d.getTime() + (7*24*60*60*1000));
    document.cookie = `todo=${encodeURIComponent(JSON.stringify(todos))}; expires=${d.toUTCString()}; path=/`;
}

// 3. ฟังก์ชันสร้าง Element และจัดการการลบ
function createTodoElement(text) {
    const div = document.createElement('div');
    div.innerText = text;

    // เมื่อคลิกที่รายการเพื่อลบ
    div.onclick = () => {
        if (confirm("คุณต้องการลบรายการนี้ใช่หรือไม่?")) {
            div.remove(); // ลบออกจาก DOM
            saveToCookie(); // อัปเดต Cookie หลังจากลบ
        }
    };

    // นำไปวางไว้ด้านบนสุดของรายการเสมอ
    ftList.prepend(div);
}

// 4. เมื่อคลิกปุ่ม New
newBtn.onclick = () => {
    const todoText = prompt("ระบุรายการที่ต้องทำ:"); // รับค่าจากผู้ใช้
    if (todoText && todoText.trim() !== "") {
        createTodoElement(todoText);
        saveToCookie(); // อัปเดต Cookie หลังจากเพิ่ม
    }
};