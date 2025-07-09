
const { EmbedBuilder } = require('discord.js');

const { CHII_API_WALLET } = require('./index')
const Link = "https://gift.truemoney.com/campaign/?v=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx";
async function TOPUP_Wallet(code_vc) {
    try {
        const res = await CHII_API_WALLET(code_vc, 'เบอร์รับเงินวอเลท');
        if (res?.ok) {
            switch (res.ok) {
                case 'success':
                    const embeds_res1 = new EmbedBuilder()
                        .setColor(0xFF9933)
                        .setTitle('รับเงินสำเร็จแล้ว\`\`✅\`\`')
                        .setDescription(`ได้รับเงินจาก: ${res.name_owner}\nจำนวนเงิน: ${res.amount} บาท\nลิงค์อั่งเปา: ${res.code}`)
                    interaction.reply({ embeds: [embeds_res1], ephemeral: true });
                    break;
                default:
                    const embeds_error = new EmbedBuilder()
                        .setColor(0xFF0000)
                        .setTitle(`\`\`❌\`\` เกิดข้อผิดพลาดที่ไม่รู้จัก`)
                    interaction.reply({ embeds: [embeds_error], ephemeral: true });
                    break;
            }
        } else if (res?.errorData) {
            switch (res.errorData) {
                case 1000:
                    const embeds_res2 = new EmbedBuilder()
                        .setColor(0xFF0000)
                        .setTitle(`\`\`❌\`\` ${res.mes_err}`)
                    interaction.reply({ embeds: [embeds_res2], ephemeral: true });
                    // console.log(res.mes_err); // รับซองตัวเองไม่ได้ 
                    break;
                case 1001:
                    const embeds_res3 = new EmbedBuilder()
                        .setColor(0xFF0000)
                        .setTitle(`\`\`❌\`\` ${res.mes_err}`)
                    interaction.reply({ embeds: [embeds_res3], ephemeral: true });
                    //  console.log(res.mes_err); // ไม่พบเบอร์นี้ในระบบ
                    break;
                case 1002:
                    const embeds_res4 = new EmbedBuilder()
                        .setColor(0xFF0000)
                        .setTitle(`\`\`❌\`\` ${res.mes_err}`)
                    interaction.reply({ embeds: [embeds_res4], ephemeral: true });
                    //   console.log(res.mes_err); // ไม่พบซองนี้ในระบบ หรือ URL ผิด
                    break;
                case 1003:
                    const embeds_res5 = new EmbedBuilder()
                        .setColor(0xFF0000)
                        .setTitle(`\`\`❌\`\` ${res.mes_err}`)
                    interaction.reply({ embeds: [embeds_res5], ephemeral: true });
                    //  console.log(res.mes_err); // มีคนรับซองอั่งเปาไปแล้ว
                    break;
                case 1004:
                    const embeds_res6 = new EmbedBuilder()
                        .setColor(0xFF0000)
                        .setTitle(`\`\`❌\`\` ${res.mes_err}`)
                    interaction.reply({ embeds: [embeds_res6], ephemeral: true });
                    // console.log(res.mes_err); // ไม่พบซองอั่งเปาในระบบ
                    break;
                case 1005:
                    const embeds_res7 = new EmbedBuilder()
                        .setColor(0xFF0000)
                        .setTitle(`\`\`❌\`\` ${res.mes_err}`)
                    interaction.reply({ embeds: [embeds_res7], ephemeral: true });
                    //  console.log(res.mes_err); // ซองวอเลทนี้หมดอายุแล้ว
                    break;
                case 1006:
                    const embeds_res8 = new EmbedBuilder()
                        .setColor(0xFF0000)
                        .setTitle(`\`\`❌\`\` ${res.mes_err}`)
                    interaction.reply({ embeds: [embeds_res8], ephemeral: true });
                    //   console.log(res.mes_err); // เบอร์โทรศัพท์ผู้รับเงินไม่ถูกต้อง
                    break;
                default:
                    const embeds_error = new EmbedBuilder()
                        .setColor(0xFF0000)
                        .setTitle(`\`\`❌\`\` เกิดข้อผิดพลาดที่ไม่รู้จัก`)
                    interaction.reply({ embeds: [embeds_error], ephemeral: true });
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
