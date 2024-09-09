# TrueMoneyWallet - Voucher_Code - NodeJS-Module

+ API True Money Wallet Red Envelope
+ The System Automatically Receives Money Into Our Number.

+ API ทรูมันนี่วอเลตซองอั่งเปา
+ ระบบเปิดซองอั่งเปารับเงินเข้าเบอร์เราอัตโนมัติ

## install modules
+ ติดตั้งโมดูล
```sh
npm i chii_wallet
```
## Run Code
+ รันโค้ด Node fileName.js
```sh
Node index.js
```

## การใช้งาน API Usage
+ เบอร์โทร กรอกเบอร์รับเงินทรูวอเลทของเรา
+ Phone Number: Enter Our True Wallet Money Receiving Number

```js
const CHII_API_WALLET = require('chii_wallet')
function TOPUP_Wallet(code) {
      const res = await CHII_API_WALLET(code, 'เบอร์โทร') // เบอร์โทร Number Phone
      console.log(res)
}
TOPUP_Wallet()
```

## รายละเอียดแสดงผล Display Details

+ แสดงชื่อเจ้าของซอง
```js
res.name_owner
```
+ แสดงจำนวนเงินที่ได้รับ
```js
res.amount
```
+ แสดงลิงค์อั่งเปา
```js
res.code
```
+ แสดงเบอร์เจ้าของซองอั่งงเปา
```js
res.my_phone
```

## รวบรวมผลลัพท์แล้วจะได้แบบนี้ Collect Results
```js
console.log(`ได้รับเงินจาก: ${res.name_owner}\nจำนวนเงิน: ${res.amount} บาท\nลิงค์อั่งเปา: ${res.code}`);
```
## การเชื่อมโยงลิงค์ได้ 2 แบบ
+ แบบที่ 1
```js
const Link_VC = "https://gift.truemoney.com/campaign/?v=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx";
TOPUP_Wallet(Link_VC); 
```
```js
+ แบบที่ 2
TOPUP_Wallet("https://gift.truemoney.com/campaign/?v=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"); 
```

## ตัวอย่างโค้ด Example Code
```js
const CHII_API_WALLET = require('chii_wallet')
const Link_VC = "https://gift.truemoney.com/campaign/?v=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx";
async function TOPUP_Wallet(code_vc) {
    try {
        const res = await CHII_API_WALLET(code_vc, 'เบอร์รับเงินวอเลท');
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
                    console.log(res.mes_err);
                    // console.log('รับซองตัวเองไม่ได้');
                    break;
                case 1003:
                    console.log(res.mes_err);
                     // console.log('ไม่พบเบอร์นี้ในระบบ');
                    break;
                case 1004:
                    console.log(res.mes_err);
                    // console.log('ไม่พบซองนี้ในระบบ หรือ URL ผิด');
                    break;
                case 1005:
                    console.log(res.mes_err);
                   // console.log('มีคนรับซองอั่งเปาไปแล้ว');
                    break;
                case 1006:
                    console.log(res.mes_err); 
                  // console.log('ไม่พบซองอั่งเปาในระบบ');
                    break;
                case 1007:
                    console.log(res.mes_err);
                  // console.log('ซองวอเลทนี้หมดอายุแล้ว');
                    break;
                case 1008:
                    console.log(res.mes_err);
                    // console.log('เบอร์โทรศัพท์ผู้รับเงินไม่ถูกต้อง');
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
TOPUP_Wallet(Link_VC);  
// เชื่อมโยงลิงค์รับเงิน 
// TOPUP_Wallet('กรอกลิงค์ซองอังเปาใส่');
```

# ผู้พัฒนาโค้ด By Developer : CHII แอดมินซี
+ เซิร์ฟเวอร์ Discord https://discord.gg/5gAsw4Pawq
