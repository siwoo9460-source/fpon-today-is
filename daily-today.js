(function(){
function annual(r){
  if(!r||r[4]==null||!r[3])return null;
  var p=String(r[3]).split('.'),now=new Date(2026,7,28),start=new Date(+p[0],+p[1]-1,+p[2]);
  var y=(now-start)/(365.25*86400000); if(y<1)return null;
  return ((Number(r[4])-1000)/1000*100)/y;
}
function moveMainSections(){
  var root=document.querySelector('.w'); if(!root)return;
  var weather=document.querySelector('section.sec.g2');
  var econ=document.querySelector('.econ')&&document.querySelector('.econ').closest('section');
  var market=document.querySelector('section.market');
  var news=document.querySelector('.news4')&&document.querySelector('.news4').closest('section');
  var vh=Array.from(document.querySelectorAll('section h2')).find(function(h){return h.textContent.indexOf('교보생명 변액보험 기준가 현황')>=0;});
  var variable=vh&&vh.closest('section');
  if(!weather||!econ||!market||!news||!variable)return;
  var anchor=weather;
  [econ,market,news,variable].forEach(function(sec){anchor.insertAdjacentElement('afterend',sec);anchor=sec;});
}
function buildAnnualTop10(){
  if(typeof FUNDS==='undefined')return;
  var vh=Array.from(document.querySelectorAll('section h2')).find(function(h){return h.textContent.indexOf('교보생명 변액보험 기준가 현황')>=0;});
  var variable=vh&&vh.closest('section'); if(!variable||document.getElementById('annualTop10'))return;
  var arr=FUNDS.map(function(r){return {r:r,a:annual(r)}}).filter(function(x){return x.a!=null;}).sort(function(a,b){return b.a-a.a;}).slice(0,10);
  var sec=document.createElement('section'); sec.className='sec'; sec.id='annualTop10';
  sec.innerHTML='<h2 class="title">연환산 수익률 TOP10 <span class="date-badge">설정 1년 이상만</span></h2><div class="mini"><ol style="margin:0;padding-left:24px">'+arr.map(function(x){return '<li style="padding:8px 0;border-bottom:1px solid #edf0f4"><b>'+x.r[1]+' · '+x.r[2]+'</b><strong style="float:right;font-size:18px">'+x.a.toFixed(2)+'%</strong></li>';}).join('')+'</ol><div class="formula-note">※ 기준가 1,000 대비 누적수익률을 펀드 설정 이후 운용연수로 나눈 단순 연환산 값입니다. 설정 1년 미만 신규 ETF 등은 순위에서 제외합니다.</div></div>';
  variable.insertAdjacentElement('afterend',sec);
}
function run(){
  document.title='FPON TODAY IS... | 2026.08.30';
  var d=document.querySelector('.date'); if(d)d.textContent='2026.08.30 (일) · 주말 브리핑';

  var topBadges=document.querySelectorAll('section .title > .date-badge');
  if(topBadges[0])topBadges[0].textContent='국내·미국 8/28 마감';
  if(topBadges[1])topBadges[1].textContent='주말 최신 확인';

  var stocks=document.querySelectorAll('.ec.stocks .m');
  var stockData=[['코스피','6,788.88','▼ -1.79%'],['코스닥','838.41','▲ +0.09%'],['다우지수','53,559.99','▼ -0.02%'],['S&P500','7,711.76','▼ -0.25%']];
  stocks.forEach(function(el,i){if(!stockData[i])return;var n=el.querySelector('.mn'),v=el.querySelector('.mv'),c=el.querySelector('.mc');if(n)n.textContent=stockData[i][0];if(v)v.textContent=stockData[i][1];if(c){c.textContent=stockData[i][2];c.className='mc '+(stockData[i][2].indexOf('▲')===0?'up':'down');}});
  var sb=document.querySelector('.ec.stocks .eh .date-badge'); if(sb)sb.textContent='8/28 마감';

  var fx=document.querySelectorAll('.ec.fx .m');
  if(fx[0]){var v0=fx[0].querySelector('.mv');if(v0)v0.textContent='1,377.32원';}
  if(fx[1]){var v1=fx[1].querySelector('.mv');if(v1)v1.textContent='852.75원';}
  var fb=document.querySelector('.ec.fx .eh .date-badge'); if(fb)fb.textContent='8/28 기준';

  var fuel=document.querySelectorAll('.ec.fuel .m');
  if(fuel[0]){var g=fuel[0].querySelector('.mv');if(g)g.textContent='1,861원/L';}
  if(fuel[1]){var k=fuel[1].querySelector('.mv');if(k)k.textContent='1,845원/L';}
  var ub=document.querySelector('.ec.fuel .eh .date-badge'); if(ub)ub.textContent='8/30 전국평균';

  var market=document.querySelector('.market p');
  if(market)market.innerHTML='<b>주가지수</b>는 국내 8월 28일 코스피 6,788.88(-1.79%), 코스닥 838.41(+0.09%), 미국 S&amp;P500 7,711.76(-0.25%), 다우 53,559.99(-0.02%)로 주말을 맞았습니다. <b>환율</b>은 8월 28일 기준 달러 1,377.32원, 100엔 852.75원 수준이며, <b>유가</b>는 8월 30일 전국 평균 휘발유 약 1,861원·경유 약 1,845원/L입니다. 주말에는 단기 등락보다 고객의 현금흐름·해외자산 비중·보험료 부담을 함께 점검해보세요.';

  var issue=document.querySelectorAll('.issues .issue b');
  var issues=['주말에는 지난주 입원·수술·검사·통원 고객의 미청구 보험금을 먼저 정리해보세요.','국내 증시는 코스피 급락과 코스닥 강보합이 엇갈려 종목별 체감 차이가 컸습니다.','미국 증시는 연준의 인플레이션 경계 발언 이후 금리 민감도가 다시 높아졌습니다.','교보생명 공식 펀드리스트는 8/30 조회 시 76개 고유 펀드를 표시하며, FPON 상품군 78개 전체 기준가 원자료는 오늘 자동 일괄 확보하지 못했습니다.'];
  issue.forEach(function(el,i){if(issues[i])el.textContent=issues[i];});

  var cards=document.querySelectorAll('.news4 .news');
  var news=[
    ['국내증시','8월 28일 코스피 1.79% 하락·코스닥 0.09% 상승. 지수보다 고객 보유자산의 실제 편입비중을 먼저 확인합니다.'],
    ['미국·금리','연준의 인플레이션 경계 발언에 S&P500 -0.25%, 다우 -0.02%. 장기 계약은 하루 등락보다 투자기간과 분산이 핵심입니다.'],
    ['유가·생활','전국 평균 휘발유 약 1,861원/L, 경유 약 1,845원/L. 생활비와 차량 유지비 변화를 고객 현금흐름 상담에 연결해보세요.'],
    ['변액보험 공시','교보생명 공식 펀드공시를 재확인했습니다. 전체 78개 상품군별 최신 기준가를 정확히 일괄 확보하지 못해 임의 갱신은 하지 않았습니다.']
  ];
  cards.forEach(function(el,i){if(!news[i])return;var b=el.querySelector('b'),s=el.querySelector('span');if(b)b.textContent=news[i][0];if(s)s.textContent=news[i][1];});

  var vh=Array.from(document.querySelectorAll('section h2')).find(function(h){return h.textContent.indexOf('교보생명 변액보험 기준가 현황')>=0;});
  if(vh){
    var sec=vh.closest('section'),badge=vh.querySelector('.date-badge');if(badge)badge.textContent='직전 검증본 8/28';
    var old=sec.querySelector('.official-check-note');if(old)old.remove();
    var note=document.createElement('div');note.className='info-box warn official-check-note';
    note.innerHTML='<strong>8/30 교보생명 공식 공시 재확인</strong><br>교보생명 공식 변액보험 펀드리스트와 공시 안내를 확인했습니다. 공식 펀드리스트는 현재 <b>총 76개 고유 펀드</b>를 표시하지만, FPON의 C/F/D/E 상품군 중복을 포함한 78개 행 전체에 대응하는 최신 기준가·전일대비·자산현황 원자료를 오늘 자동으로 정확히 일괄 확보하지 못했습니다. 따라서 <b>임의 수치를 사용하지 않고 직전 검증본인 2026.08.28 데이터를 유지</b>합니다.';
    vh.insertAdjacentElement('afterend',note);
    var tabs=sec.querySelector('.tabs');if(tabs){var bs=Array.from(tabs.querySelectorAll('.tab'));var dtab=bs.find(function(b){return b.dataset.g==='D'}),etab=bs.find(function(b){return b.dataset.g==='E'});if(dtab&&etab)tabs.insertBefore(dtab,etab);}
  }

  var pair=document.querySelector('.summ .pair');if(pair){pair.style.display='grid';pair.style.gridTemplateColumns='1fr';pair.style.gap='14px';}
  moveMainSections();
  buildAnnualTop10();
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',function(){setTimeout(run,450)});else setTimeout(run,450);
})();