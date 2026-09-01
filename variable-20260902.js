(function(){
const FUNDS=[
['글로벌배당주식형','해외주식형','F015',3.33],
['글로벌ESG주식형','해외주식형','',1.75],
['글로벌자산배분형','자산배분형','',1.15],
['단기채권형','국내채권형','D008',0.59],
['단기채권형','국내채권형','',0.54],
['AI글로벌자산배분형','자산배분형','',0.54],
['미국주식혼합형50 Ⅱ','해외혼합형','F033',0.41],
['미국주식혼합형50 Ⅰ','해외혼합형','F032',0.41],
['MMF형','국내채권형','D004',0.26],
['글로벌금리연동채권형','해외채권형','',0.26],
['미국주식혼합형30 Ⅱ','해외혼합형','F031',0.18],
['글로벌주식형','해외주식형','',-0.24],
['글로벌멀티인컴형','해외혼합형','',-0.28],
['글로벌인덱스혼합형','해외혼합형','',-0.63],
['글로벌채권형','해외채권형','F011',-0.73]
];
function render(){
 const v=document.getElementById('variableSection'); if(!v)return;
 const rows=FUNDS.map((f,i)=>`<tr><td>${i+1}</td><td><b>${f[0]}</b>${f[2]?`<small>${f[2]}</small>`:''}</td><td>${f[1]}</td><td class="${f[3]>=0?'up':'down'}">${f[3]>=0?'+':''}${f[3].toFixed(2)}%</td></tr>`).join('');
 v.style.display='block';
 v.innerHTML=`<h2 class="title">교보생명 변액보험 기준가·수익률</h2><div class="kyobo-box"><div class="kyobo-head"><div><b>2026.09.02 공식 사이트 최신 조회</b><span>교보생명 변액보험 펀드서비스 · 3개월 수익률</span></div><a href="https://www.kyobo.com/dgt/web/product/insurance/variable_insurance_fund_service/findFundNameSearchList" target="_blank" rel="noopener">교보생명 공식 조회 ↗</a></div><div class="kyobo-alert"><b>기준가격 안내</b> 오늘 공식 공개 화면에서 펀드별 ‘기준가격’ 숫자는 외부 조회로 정확히 확보되지 않아 임의값을 넣지 않았습니다. 아래 수익률은 교보생명 공식 펀드리스트에서 현재 조회되는 값만 반영했습니다.</div><div class="kyobo-table-wrap"><table class="kyobo-table"><thead><tr><th>#</th><th>펀드명</th><th>유형</th><th>3개월 수익률</th></tr></thead><tbody>${rows}</tbody></table></div><div class="kyobo-foot">※ 수익률은 펀드운용보수 등 비용 차감 후 특별계정 운용수익률이며, 고객별 실제 수익률과 다를 수 있습니다. 정확한 기준가격은 교보생명 공식 공시실 원문을 우선합니다.</div></div>`;
 if(!document.getElementById('kyobo-0902-css')){const s=document.createElement('style');s.id='kyobo-0902-css';s.textContent=`.kyobo-box{border:1px solid #dce6f0;border-radius:18px;background:#fff;overflow:hidden}.kyobo-head{display:flex;justify-content:space-between;gap:12px;align-items:center;padding:18px 20px;background:linear-gradient(135deg,#eef6ff,#f9fbff)}.kyobo-head b{display:block;color:#153f77;font-size:17px}.kyobo-head span{display:block;margin-top:4px;font-size:12px;color:#6a7b8d}.kyobo-head a{font-size:12px;font-weight:900;color:#245b9e;text-decoration:none;white-space:nowrap}.kyobo-alert{margin:14px 18px;padding:12px 14px;border-radius:12px;background:#fff8e8;color:#6b5a2a;font-size:12px;line-height:1.65}.kyobo-table-wrap{overflow:auto;padding:0 18px 14px}.kyobo-table{width:100%;border-collapse:collapse;min-width:560px}.kyobo-table th,.kyobo-table td{padding:10px 8px;border-bottom:1px solid #edf1f5;text-align:left;font-size:12px}.kyobo-table th{color:#65778a;font-size:11px}.kyobo-table td:last-child,.kyobo-table th:last-child{text-align:right;font-weight:900}.kyobo-table small{display:block;color:#8a98a8;font-size:10px;margin-top:2px}.kyobo-table .up{color:#d64b45}.kyobo-table .down{color:#2870b8}.kyobo-foot{padding:0 18px 18px;color:#718093;font-size:11px;line-height:1.6}@media(max-width:620px){.kyobo-head{align-items:flex-start;flex-direction:column}}`;document.head.appendChild(s)}
}
function run(){setTimeout(render,2600)}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',run);else run();
})();