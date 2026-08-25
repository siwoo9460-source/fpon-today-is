(function(){
var LABELS={C:'변액종신',F:'변액유니버셜종신',E:'변액적립',D:'변액연금'},GROUP_ORDER={C:0,F:1,E:2,D:3},active='ALL',sortKey='default',sortDir='asc';
function e(id){return document.getElementById(id)}
function fmt(v){return v==null?'-':Number(v).toLocaleString('ko-KR',{minimumFractionDigits:2,maximumFractionDigits:2})}
function pct(v){return v==null?'-':Number(v).toFixed(2)+'%'}
function dayret(r){if(r[4]==null||r[5]==null)return null;var prev=Number(r[4])-Number(r[5]);return prev?Number(r[5])/prev*100:null}
function rows(){
 var q=(e('search').value||'').trim().toLowerCase();
 var a=FUNDS.filter(function(r){return(active==='ALL'||r[0]===active)&&(!q||r[1].toLowerCase().includes(q)||r[2].toLowerCase().includes(q))});
 var ix={group:0,code:1,name:2,setting:3,nav:4,change:5,annual:6,aum:7,rank:8};
 a.sort(function(x,y){
   if(sortKey==='default'){
     var g=(GROUP_ORDER[x[0]]??99)-(GROUP_ORDER[y[0]]??99);
     if(g!==0)return g;
     var rx=x[8],ry=y[8];
     if(rx==null&&ry==null)return 0;if(rx==null)return 1;if(ry==null)return -1;
     return rx-ry;
   }
   var vx=sortKey==='dayret'?dayret(x):x[ix[sortKey]],vy=sortKey==='dayret'?dayret(y):y[ix[sortKey]];
   if(vx==null&&vy==null)return 0;if(vx==null)return 1;if(vy==null)return-1;
   var c=(typeof vx==='number'&&typeof vy==='number')?vx-vy:String(vx).localeCompare(String(vy),'ko');
   return sortDir==='asc'?c:-c
 });
 return a
}
function render(){
 var a=rows();e('barTitle').textContent=active==='ALL'?'전체 · C/F/E/D 펀드 Line-up':active+'군 · '+LABELS[active];e('count').textContent=a.length+'개';
 e('tbody').innerHTML=a.map(function(r){var dr=dayret(r),cc=r[5]>0?'up':r[5]<0?'down':'',dc=dr>0?'up':dr<0?'down':'';
 return'<tr><td><span class="chip '+r[0]+'">'+r[0]+'군 · '+LABELS[r[0]]+'</span></td><td class="rank">'+(r[8]??'-')+'</td><td class="code">'+r[1]+'</td><td>'+r[2]+'</td><td>'+r[3]+'</td><td class="num">'+fmt(r[4])+'</td><td class="num '+cc+'">'+(r[5]==null?'-':(r[5]>0?'+':'')+fmt(r[5]))+'</td><td class="num">'+(r[6]==null?'-':fmt(r[6])+'%')+'</td><td class="num '+dc+'">'+pct(dr)+'</td><td class="num">'+(r[7]==null?'-':fmt(r[7])+'억')+'</td></tr>'}).join('')
}
function sortedAnnual(n){return FUNDS.filter(r=>r[6]!=null).slice().sort((a,b)=>b[6]-a[6]).slice(0,n)}
function sortedDay(n,asc){return FUNDS.filter(r=>dayret(r)!=null).slice().sort((a,b)=>asc?dayret(a)-dayret(b):dayret(b)-dayret(a)).slice(0,n)}
function lists(){
 e('top').innerHTML=sortedAnnual(10).map((r,i)=>'<li><span>'+(i+1)+'</span><b>'+r[1]+'</b><span>'+r[2]+'</span><strong class="up">'+fmt(r[6])+'%</strong></li>').join('');
 e('up').innerHTML=sortedDay(5,false).map((r,i)=>'<tr><td>'+(i+1)+'</td><td>'+r[1]+'</td><td>'+r[2]+'</td><td class="up">'+pct(dayret(r))+'</td></tr>').join('');
 e('down').innerHTML=sortedDay(5,true).map((r,i)=>'<tr><td>'+(i+1)+'</td><td>'+r[1]+'</td><td>'+r[2]+'</td><td class="down">'+pct(dayret(r))+'</td></tr>').join('');
 var nav=FUNDS.filter(r=>r[4]!=null).slice().sort((a,b)=>b[4]-a[4])[0];
 var ann=sortedAnnual(1)[0];
 var aum=FUNDS.filter(r=>r[7]!=null).slice().sort((a,b)=>b[7]-a[7])[0];
 var old=FUNDS.filter(r=>r[3]).slice().sort((a,b)=>String(a[3]).localeCompare(String(b[3])))[0];
 if(e('topNav'))e('topNav').innerHTML=nav?'<span><b>기준가 TOP</b> '+nav[1]+' '+nav[2]+'</span><strong>'+fmt(nav[4])+'</strong>':'-';
 if(e('topAnn'))e('topAnn').innerHTML=ann?'<span><b>연환산 TOP</b> '+ann[1]+' '+ann[2]+'</span><strong>'+fmt(ann[6])+'%</strong>':'-';
 if(e('topAum'))e('topAum').innerHTML=aum?'<span><b>자산 TOP</b> '+aum[1]+' '+aum[2]+'</span><strong>'+fmt(aum[7])+'억</strong>':'-';
 if(e('topOld'))e('topOld').innerHTML=old?'<span><b>가장 오래된 펀드</b> '+old[1]+' '+old[2]+'</span><strong>'+old[3]+'</strong>':'-';
}
function syncDataNotice(){
 if(typeof DATA_META==='undefined')return;
 var section=[].slice.call(document.querySelectorAll('section.sec')).find(function(s){var h=s.querySelector('h2.title');return h&&h.textContent.indexOf('교보생명 변액보험')>=0});
 if(!section)return;
 var oldAlerts=[].slice.call(section.querySelectorAll('.alert'));
 oldAlerts.forEach(function(a){a.remove()});
 var controls=section.querySelector('.controls');if(!controls)return;
 var d=document.createElement('div');d.className='alert';d.style.marginBottom='12px';
 d.innerHTML='<b>교보생명 변액보험 기준가 · '+DATA_META.date+' 공식 공시 기준</b><br>오늘 업로드된 교보생명 공식 공시 화면에서 <b>'+DATA_META.verified+'개 / '+DATA_META.total+'개</b> 펀드의 기준가·전일대비·순자산을 확인해 반영했습니다. 확인되지 않은 '+(DATA_META.total-DATA_META.verified)+'개 펀드는 임의 수치를 사용하지 않고 <b>-</b>로 표시합니다. TOP10·상승/하락 TOP5·TOP OF TOP은 오늘 값이 확인된 펀드만 대상으로 자동 계산합니다.';
 controls.parentNode.insertBefore(d,controls);
 var footer=document.querySelector('footer');if(footer){footer.innerHTML='※ 교보생명 변액보험 데이터는 <b>'+DATA_META.date+' 공식 공시 화면 기준</b>입니다. 현재 '+DATA_META.verified+'/'+DATA_META.total+'개 펀드 확인 완료, 미확인 펀드는 임의 수치를 사용하지 않고 -로 표시합니다.<br>※ 전일대비 수익률은 (당일 기준가-전일 기준가) ÷ 전일 기준가 × 100 방식으로 계산합니다.'}
}
function addDailyActionCards(){
 var target=[].slice.call(document.querySelectorAll('section.sec')).find(function(s){var h=s.querySelector('h2.title');return h&&h.textContent.indexOf('교보생명 변액보험')>=0});
 if(!target||document.getElementById('daily-action-cards'))return;
 var sec=document.createElement('section');sec.className='sec';sec.id='daily-action-cards';
 sec.innerHTML='<h2 class="title">오늘의 고객 체크 & 생활금융</h2><div style="display:grid;grid-template-columns:repeat(3,1fr);gap:12px"><div class="card" style="background:#fff9f1;border:1px solid #f0dfc7"><div style="font-weight:900;color:#b76b18;margin-bottom:8px">🧾 오늘의 고객 체크포인트</div><b style="display:block;font-size:16px;margin-bottom:8px">보험금 청구 누락·숨은보험금 확인</b><p style="margin:0 0 10px;line-height:1.65;color:#596273;font-size:13px">최근 입원·수술·검사·통원 이력이 있는 고객은 청구 누락 여부를 한 번 점검해보세요.</p><div class="point"><b>오늘의 ACTION</b> 최근 병원 이용 고객 3명에게 청구 가능 여부 확인하기</div></div><div class="card" style="background:#f6fbf8;border:1px solid #d9ebe0"><div style="font-weight:900;color:#238258;margin-bottom:8px">💰 오늘의 세금·연금 한 줄</div><b style="display:block;font-size:16px;margin-bottom:8px">연금저축·IRP는 납입만큼 공제 적용 여부 점검</b><p style="margin:0 0 10px;line-height:1.65;color:#596273;font-size:13px">연말에 몰아서 보기보다 현재 납입액과 공제 적용 가능 금액을 미리 점검하는 것이 좋습니다.</p><div class="point"><b>FPON POINT</b> 납입액·공제율·향후 연금수령 시 과세까지 함께 보세요.</div></div><div class="card" style="background:#f5f8ff;border:1px solid #dce4f4"><div style="font-weight:900;color:#315da8;margin-bottom:8px">🏦 오늘의 생활금융</div><b style="display:block;font-size:16px;margin-bottom:8px">금리 결정 전 대출 조건 다시 보기</b><p style="margin:0 0 10px;line-height:1.65;color:#596273;font-size:13px">변동금리 대출이 있는 고객은 금리·만기·상환방식·중도상환 조건을 함께 점검해보세요.</p><div class="point"><b>오늘의 ACTION</b> 고금리·변동금리 대출 보유 고객 상담 후보 정리하기</div></div></div><style>@media(max-width:900px){#daily-action-cards>div{grid-template-columns:1fr!important}}</style>';
 target.parentNode.insertBefore(sec,target);
}
document.querySelectorAll('.tab').forEach(function(b){b.onclick=function(){document.querySelectorAll('.tab').forEach(x=>x.classList.remove('on'));b.classList.add('on');active=b.dataset.g;sortKey='default';sortDir='asc';render()}});
document.querySelectorAll('.sortable').forEach(function(th){th.onclick=function(){var k=th.dataset.k;if(sortKey===k)sortDir=sortDir==='asc'?'desc':'asc';else{sortKey=k;sortDir='asc'}render()}});
e('search').oninput=render;
window.copySummary=function(){var a=sortedAnnual(1)[0],b=FUNDS.filter(r=>r[4]!=null).slice().sort((x,y)=>y[4]-x[4])[0],c=FUNDS.filter(r=>r[7]!=null).slice().sort((x,y)=>y[7]-x[7])[0];navigator.clipboard.writeText('FPON TODAY IS... | 2026.08.26\n교보생명 변액보험: 2026.08.26 공식 공시 캡처 기준 '+DATA_META.verified+'/'+DATA_META.total+'개 확인\n오늘의 고객 체크: 보험금 청구 누락·숨은보험금 확인\n연환산 TOP(확인분): '+(a?a[1]+' '+a[2]+' '+fmt(a[6])+'%':'-')+'\n기준가 TOP(확인분): '+(b?b[1]+' '+b[2]+' '+fmt(b[4]):'-')+'\n자산 TOP(확인분): '+(c?c[1]+' '+c[2]+' '+fmt(c[7])+'억':'-')).then(()=>alert('오늘 요약을 복사했습니다.'))};
if(typeof FUNDS==='undefined'){e('tbody').innerHTML='<tr><td colspan="10" class="loading">변액보험 데이터 로딩 실패</td></tr>';return}
addDailyActionCards();syncDataNotice();render();lists()
})();