(function(){
function run(){
  document.title='FPON TODAY IS... | 2026.08.29';
  var d=document.querySelector('.date'); if(d)d.textContent='2026.08.29 (토) · 주말 브리핑';

  var stocks=document.querySelectorAll('.ec.stocks .m');
  var stockData=[['코스피','6,788.88','▼ -1.79%'],['코스닥','838.41','▲ +0.09%'],['다우지수','53,559.99','▼ -0.02%'],['S&P500','7,711.76','▼ -0.25%']];
  stocks.forEach(function(el,i){if(!stockData[i])return; var n=el.querySelector('.mn'),v=el.querySelector('.mv'),c=el.querySelector('.mc'); if(n)n.textContent=stockData[i][0]; if(v)v.textContent=stockData[i][1]; if(c){c.textContent=stockData[i][2]; c.className='mc '+(stockData[i][2].indexOf('▲')===0?'up':'down');}});
  var sb=document.querySelector('.ec.stocks .eh .date-badge'); if(sb)sb.textContent='8/28 마감';

  var fx=document.querySelectorAll('.ec.fx .m');
  if(fx[0]){var v0=fx[0].querySelector('.mv'); if(v0)v0.textContent='1,381.22원';}
  if(fx[1]){var v1=fx[1].querySelector('.mv'); if(v1)v1.textContent='약 867원';}
  var fb=document.querySelector('.ec.fx .eh .date-badge'); if(fb)fb.textContent='8/28 확인값';

  var fuel=document.querySelectorAll('.ec.fuel .m');
  if(fuel[0]){var g=fuel[0].querySelector('.mv'); if(g)g.textContent='1,860.72원/L';}
  if(fuel[1]){var k=fuel[1].querySelector('.mv'); if(k)k.textContent='1,844.56원/L';}
  var ub=document.querySelector('.ec.fuel .eh .date-badge'); if(ub)ub.textContent='8/29 전국평균';

  var market=document.querySelector('.market p');
  if(market)market.innerHTML='<b>국내 증시</b>는 28일 코스피가 1.79% 하락한 반면 코스닥은 0.09% 상승했습니다. <b>미국 증시</b>는 연준의 인플레이션 경계 발언 이후 다우 -0.02%, S&amp;P500 -0.25%로 약보합 마감했습니다. <b>환율·유가</b>는 원·달러 약 1,381원대, 전국 평균 휘발유 1,860.72원·경유 1,844.56원 수준을 함께 보며 고객의 현금흐름과 해외자산 변동성을 설명해보세요.';

  var issue=document.querySelectorAll('.issues .issue b');
  var issues=['주말 전 최근 병원 이용 고객의 보험금 청구 누락을 점검해보세요.','28일 코스피 1.79% 하락 · 반도체 대형주 변동성 확대','미국 증시 약보합 · 연준의 인플레이션 경계 발언에 금리 민감도 상승','29일 전국 대부분 지역 강한 비 예상 · 외부 일정 고객 안전 안내'];
  issue.forEach(function(el,i){if(issues[i])el.textContent=issues[i];});

  var cards=document.querySelectorAll('.news4 .news');
  var news=[
    ['국내증시','삼성전자·SK하이닉스 약세로 코스피 1.79% 하락…고객의 국내주식 비중과 변액펀드 편중을 확인하세요.'],
    ['미국증시','연준의 물가 경계가 이어지며 S&P500 -0.25%…단기 수익률보다 투자기간과 분산 여부를 먼저 봅니다.'],
    ['주말날씨','8월 마지막 토요일 전국 대부분 지역 강한 비…방문 일정과 차량 이동이 있는 고객에게 안전 안내를 전하세요.'],
    ['보험금청구','주말에는 최근 진료 고객의 미청구 건을 정리해 다음 주 접수 준비를 해두면 고객관리 효율이 높아집니다.']
  ];
  cards.forEach(function(el,i){if(!news[i])return; var b=el.querySelector('b'),s=el.querySelector('span'); if(b)b.textContent=news[i][0]; if(s)s.textContent=news[i][1];});

  var vh=Array.from(document.querySelectorAll('section h2')).find(function(h){return h.textContent.indexOf('교보생명 변액보험 기준가 현황')>=0;});
  if(vh){
    var sec=vh.closest('section');
    var badge=vh.querySelector('.date-badge'); if(badge)badge.textContent='직전 확보본 8/28';
    if(sec&&!sec.querySelector('.official-check-note')){
      var note=document.createElement('div'); note.className='info-box warn official-check-note';
      note.innerHTML='<strong>8/29 공식 공시 확인</strong><br>교보생명 공식 변액보험 펀드공시 페이지와 운용현황 페이지는 확인했습니다. 다만 오늘 자동 조회에서는 전체 78개 상품군별 기준가·전일대비·자산현황 원자료를 정확히 추출하지 못해 <b>임의 수치로 갱신하지 않았습니다.</b> 현재 표는 직전 확보본인 2026.08.28 데이터를 유지합니다.';
      vh.insertAdjacentElement('afterend',note);
    }
  }
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',function(){setTimeout(run,350)});else setTimeout(run,350);
})();