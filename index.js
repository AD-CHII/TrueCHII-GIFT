const CHII_API_WALLET = require('chii_wallet')
const Link = "https://gift.truemoney.com/campaign/?v=0191d5fe17da7281880ac5417b098fd09dk";
async function TOPUP_Wallet(code_vc) {
    try {
        const res = await CHII_API_WALLET(code_vc, '0821015438');
        if (res?.ok) {
            switch (res.ok) {
                case 1001:
                    console.log(`ได้รับเงินจาก: ${res.name_owner}\nจำนวนเงิน: ${res.amount} บาท\nลิงค์อั่งเปา: ${res.code}`);
                    break;
                default:
                    console.log('เกิดข้อผิดพลาดที่ไม่รู้จัก');
                    break;
            }
        } else if (res?.errorData) {
            switch (res.errorData) {
                case 1002:
                    console.log(res.mes_err); // รับซองตัวเองไม่ได้ 
                    break;
                case 1003:
                    console.log(res.mes_err); // ไม่พบเบอร์นี้ในระบบ
                    break;
                case 1004:
                    console.log(res.mes_err); // ไม่พบซองนี้ในระบบ หรือ URL ผิด
                    break;
                case 1005:
                    console.log(res.mes_err); // มีคนรับซองอั่งเปาไปแล้ว
                    break;
                case 1006:
                    console.log(res.mes_err); // ไม่พบซองอั่งเปาในระบบ
                    break;
                case 1007:
                    console.log(res.mes_err); // ซองวอเลทนี้หมดอายุแล้ว
                    break;
                case 1008:
                    console.log(res.mes_err); // เบอร์โทรศัพท์ผู้รับเงินไม่ถูกต้อง
                    break;
                default:
                    console.log('เกิดข้อผิดพลาดที่ไม่รู้จัก');
                    break;
            }
        }
        // ดึงสถานะ res.mes_err มาแจ้งเตือนข้อผิดพลาด หรือ ตั้งชื่อเองได้ ด้วยการลบ res.mes_err ออก
    } catch (error) {
        console.error('Error during TOPUP_Wallet execution:', error.message);
    }
}
TOPUP_Wallet(Link);  
// เชื่อมโยงลิงค์รับเงิน 
// TOPUP_Wallet('กรอกลิงค์ซองอังเปาใส่');
