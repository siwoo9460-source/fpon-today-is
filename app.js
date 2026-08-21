(function(){
  var LABELS={C:'변액종신',F:'변액유니버셜종신',D:'변액연금',E:'변액적립'};
  var active='ALL';
  function el(id){return document.getElementById(id);}
  function fmt(v,d){if(v===null||v===undefined||v==='')return '-';d=(d===undefined?2:d);return Number(v).toLocaleString('ko-KR',{minimumFractionDigits:d,maximumFractionDigits:d});}
  function signed(v){if(v===null||v===undefined)return '-';return (Number(v)>0?'+':'')+fmt(v,2);}
  function dailyReturn(r){
    if(r[4]===null||r[4]===undefined||r[5]===null||r[5]===undefined)return null;
    var prev=Number(r[4])-Number(r[5]);
    if(!isFinite(prev)||prev===0)return null;
    return Number(r[5])/prev*100;
  }
  function getRows(){
    var term=(el('search').value||'').trim().toLowerCase();
    return FUNDS.filter(function(r){
      var groupOk=active==='ALL'||r[0]===active;
      var textOk=!term||String(r[1]).toLowerCase().indexOf(term)>=0||String(r[2]).toLowerCase().indexOf(term)>=0;
      return groupOk&&textOk;
    });
  }
  function render(){
    var body=el('tbody');
    if(typeof FUNDS==='undefined'||!Array.isArray(FUNDS)){
      body.innerHTML='<tr><td colspan="9" style="padding:24px;text-align:center;color:#b42318;font-weight:800">변액보험 데이터 파일을 불러오지 못했습니다. 새로고침해 주세요.</td></tr>';
      return;
    }
    var arr=getRows(), h='';
    for(var i=0;i<arr.length;i++){
      var r=arr[i];
      var chClass=(Number(r[5])>0?'up':(Number(r[5])<0?'down':''));
      h+='<tr>';
      if(active==='ALL')h+='<td><span class="chip '+r[0]+'">'+r[0]+'군 · '+LABELS[r[0]]+'</span></td>';
      h+='<td class="rank">'+(r[8]===null?'-':r[8])+'</td>';
      h+='<td class="code">'+r[1]+'</td>';
      h+='<td>'+r[2]+'</td>';
      h+='<td>'+r[3]+'</td>';
      h+='<td class="num">'+fmt(r[4],2)+'</td>';
      h+='<td class="num '+chClass+'">'+signed(r[5])+'</td>';
      h+='<td class="num">'+(r[6]===null?'-':fmt(r[6],2)+'%')+'</td>';
      h+='<td class="num">'+(r[7]===null?'-':fmt(r[7],2)+'억')+'</td>';
      h+='</tr>';
    }
    body.innerHTML=h||'<tr><td colspan="9" style="padding:24px;text-align:center">검색 결과가 없습니다.</td></tr>';
    el('barTitle').textContent=active==='ALL'?'전체 · C/F/D/E 펀드 Line-up':active+'군 · '+LABELS[active];
    el('count').textContent=arr.length+'개';
    el('groupHead').style.display=active==='ALL'?'table-cell':'none';
  }
  function sortedByAnnual(n){
    return FUNDS.filter(function(r){return r[6]!==null&&r[6]!==undefined;}).sort(function(a,b){return Number(b[6])-Number(a[6]);}).slice(0,n);
  }
  function sortedByDailyReturn(n,asc){
    var a=[];
    for(var i=0;i<FUNDS.length;i++){
      var pct=dailyReturn(FUNDS[i]);
      if(pct!==null&&isFinite(pct))a.push({r:FUNDS[i],pct:pct});
    }
    a.sort(function(x,y){return asc?x.pct-y.pct:y.pct-x.pct;});
    return a.slice(0,n);
  }
  function renderAnnualList(id,arr){
    var target=el(id),h='';
    for(var i=0;i<arr.length;i++){
      var r=arr[i];
      h+='<li><span>'+(i+1)+'</span><b>'+r[1]+'</b><span>'+r[2]+'</span><strong class="up">'+fmt(r[6],2)+'%</strong></li>';
    }
    target.innerHTML=h;
  }
  function renderDailyReturnList(id,arr){
    var target=el(id),h='';
    for(var i=0;i<arr.length;i++){
      var r=arr[i].r,pct=arr[i].pct,cls=pct>=0?'up':'down';
      h+='<li><span>'+(i+1)+'</span><b>'+r[1]+'</b><span>'+r[2]+'</span><strong class="'+cls+'">'+(pct>0?'+':'')+fmt(pct,2)+'%</strong></li>';
    }
    target.innerHTML=h;
  }
  function addNews(){
    if(document.getElementById('todayNews'))return;
    var market=document.querySelector('.market');
    if(!market)return;
    var s=document.createElement('section');
    s.id='todayNews';s.className='sec card';
    s.innerHTML='<h2 class="title">오늘의 뉴스</h2><div class="news-grid">'+
      '<a class="news-item" href="https://www.reuters.com/world/asia-pacific/bank-korea-deputy-chief-says-monetary-policy-be-made-very-carefully-2026-08-21/" target="_blank" rel="noopener"><span class="news-tag">금융</span><b>한국은행, 향후 통화정책을 매우 신중하게 운용하겠다는 입장</b><small>성장·물가·금융안정·환율을 함께 보며 8월 27일 금통위 판단에 관심</small></a>'+
      '<a class="news-item" href="https://www.reuters.com/world/asia-pacific/samsung-elec-convene-board-meeting-friday-discuss-shareholder-return-plan-says-2026-08-21/" target="_blank" rel="noopener"><span class="news-tag">기업</span><b>삼성전자, 대규모 주주환원 방안 논의 예정</b><small>특별배당·자사주 매입 및 소각 가능성 등이 시장의 관심사</small></a>'+
      '<a class="news-item" href="https://www.reuters.com/business/world-at-work/hyundai-motors-union-stages-first-full-strike-10-years-over-wage-talks-2026-08-21/" target="_blank" rel="noopener"><span class="news-tag">산업</span><b>현대차 노조, 임금협상 난항 속 10년 만의 전면파업</b><small>생산 차질과 노사협상 진행 상황이 자동차 업종의 변수</small></a>'+
      '<a class="news-item" href="https://www.yna.co.kr/view/AKR20260820174500504" target="_blank" rel="noopener"><span class="news-tag">사회·외교</span><b>을지 자유의 방패(UFS) 연습 21일 조기 종료</b><small>한미 연합훈련 기간과 규모가 당초 계획보다 크게 축소</small></a>'+
    '</div>';
    market.parentNode.insertBefore(s,market.nextSibling);
    var st=document.createElement('style');
    st.textContent='.news-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:10px}.news-item{display:block;text-decoration:none;color:#172033;background:#fbfdff;border:1px solid #e4ebf4;border-radius:13px;padding:13px}.news-item:hover{background:#f4f8ff}.news-item b{display:block;font-size:13px;line-height:1.45;margin:7px 0 5px}.news-item small{display:block;color:#68778c;line-height:1.5}.news-tag{display:inline-block;background:#082b63;color:#fff;border-radius:999px;padding:4px 7px;font-size:10px;font-weight:900}@media(max-width:800px){.news-grid{grid-template-columns:1fr}}';
    document.head.appendChild(st);
  }
  function renameTop5Headings(){
    var hs=document.querySelectorAll('.mini h3');
    if(hs.length>=3){hs[1].textContent='↗ 전일대비 수익률 상승 TOP 5';hs[2].textContent='↘ 전일대비 수익률 하락 TOP 5';}
  }
  function init(){
    if(typeof FUNDS==='undefined'){
      el('tbody').innerHTML='<tr><td colspan="9" style="padding:24px;text-align:center;color:#b42318;font-weight:800">변액보험 원자료 로딩 실패</td></tr>';
      return;
    }
    var tabs=document.querySelectorAll('.tab');
    for(var i=0;i<tabs.length;i++)tabs[i].addEventListener('click',function(){
      for(var j=0;j<tabs.length;j++)tabs[j].classList.remove('on');
      this.classList.add('on');active=this.getAttribute('data-g');render();
    });
    el('search').addEventListener('input',render);
    renameTop5Headings();
    renderAnnualList('top',sortedByAnnual(10));
    renderDailyReturnList('up',sortedByDailyReturn(5,false));
    renderDailyReturnList('down',sortedByDailyReturn(5,true));
    render();
    addNews();
  }
  window.copySummary=function(){navigator.clipboard.writeText('FPON TODAY IS... | 2026.08.21\n전일대비 수익률 TOP5·오늘의 뉴스·교보생명 변액보험 기준가 포함').then(function(){alert('오늘 요약을 복사했습니다.');});};
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
})();