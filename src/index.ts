import mineflayer from 'mineflayer';

// إعدادات الاتصال بالسيرفر
const bot = mineflayer.createBot({
  host: 'ضع_هنا_رابط_او_IP_سيرفرك', // استبدله بـ IP السيرفر الخاص بك
  port: 19132,                     // البورت الافتراضي (تأكد منه إذا كان مختلفاً)
  username: 'AFK_Bot_Render',      // اسم البوت داخل اللعبة
  version: '1.26.13'                // بروتوكول البيدروك يدعم التحديثات تلقائياً من خلال الحزم المدمجة
});

// عند دخول البوت بنجاح
bot.on('spawn', () => {
  console.log('البوت دخل السيرفر بنجاح وهو الآن جاهز على منصة Render!');
  
  // حلقة تكرارية للتحرك كل 10 ثوانٍ لمنع الطرد
  setInterval(() => {
    console.log('البوت يتحرك الآن لمنع الطرد...');
    bot.setControlState('jump', true);
    setTimeout(() => {
      bot.setControlState('jump', false);
    }, 500);
  }, 10000);
});

// في حال حدوث خطأ أو طرد
bot.on('error', (err) => console.log('خطأ في البوت:', err));
bot.on('end', () => console.log('تم فصل البوت عن السيرفر.'));
