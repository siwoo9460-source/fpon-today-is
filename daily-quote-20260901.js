(function(){
if(window.__fponDailyQuote0901)return;window.__fponDailyQuote0901=true;
function run(){
 const hero=document.querySelector('.hero'); if(!hero)return;
 if(document.getElementById('fpon-daily-quote'))return;
 const style=document.createElement('style');style.textContent=`
 #fpon-daily-quote{margin:10px 0 2px;padding:12px 16px;border-radius:14px;background:linear-gradient(135deg,#f6f9ff,#fffaf3);border:1px solid #e4e9f1;max-width:680px}
 #fpon-daily-quote .quote-label{font-size:11px;font-weight:900;letter-spacing:.03em;color:#7a5a18;margin-bottom:5px}
 #fpon-daily-quote .quote-text{font-size:17px;line-height:1.55;font-weight:800;color:#243c5a}
 @media(max-width:700px){#fpon-daily-quote{margin-top:8px;padding:11px 13px}#fpon-daily-quote .quote-text{font-size:15px}}
 `;document.head.appendChild(style);
 const left=hero.firstElementChild||hero;
 const quote=document.createElement('div');quote.id='fpon-daily-quote';quote.innerHTML='<div class="quote-label">오늘의 명언</div><div class="quote-text">“작은 일의 반복이 결국 큰 차이를 만듭니다.”</div>';
 left.appendChild(quote);
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',run);else run();
})();