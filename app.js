(function(){
  var LABELS={C:'변액종신',F:'변액유니버셜종신',D:'변액연금',E:'변액적립'};
  var active='ALL';
  function el(id){return document.getElementById(id);}
  function fmt(v,d){if(v===null||v===undefined||v==='')return '-';d=(d===undefined?2:d);return Number(v).toLocaleString('ko-KR',{minimumFractionDigits:d,maximumFractionDigits:d});}
  function signed(v){if(v===null||v===undefined)return '-';return (Number(v)>0?'+':'')+fmt(v,2);}
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
    var arr=getRows(), html='';
    for(var i=0;i<arr.length;i++){
      var r=arr[i];
      var chClass=(Number(r[5])>0?'up':(Number(r[5])<0?'down':''));
      html+='<tr>';
      if(active==='ALL')html+='<td><span class="chip '+r[0]+'">'+r[0]+'군 · '+LABELS[r[0]]+'</span></td>';
      html+='<td class="rank">'+(r[8]===null?'-':r[8])+'</td>';
      html+='<td class="code">'+r[1]+'</td>';
      html+='<td>'+r[2]+'</td>';
      html+='<td>'+r[3]+'</td>';
      html+='<td class="num">'+fmt(r[4],2)+'</td>';
      html+='<td class="num '+chClass+'">'+signed(r[5])+'</td>';
      html+='<td class="num">'+(r[6]===null?'-':fmt(r[6],2)+'%')+'</td>';
      html+='<td class="num">'+(r[7]===null?'-':fmt(r[7],2)+'억')+'</td>';
      html+='</tr>';
    }
    body.innerHTML=html||'<tr><td colspan="9" style="padding:24px;text-align:center">검색 결과가 없습니다.</td></tr>';
    el('barTitle').textContent=active==='ALL'?'전체 · C/F/D/E 펀드 Line-up':active+'군 · '+LABELS[active];
    el('count').textContent=arr.length+'개';
    el('groupHead').style.display=active==='ALL'?'table-cell':'none';
  }
  function sortedBy(idx,n,asc){
    return FUNDS.filter(function(r){return r[idx]!==null&&r[idx]!==undefined;}).sort(function(a,b){return asc?Number(a[idx])-Number(b[idx]):Number(b[idx])-Number(a[idx]);}).slice(0,n);
  }
  function renderList(id,arr,idx){
    var target=el(id), h='';
    for(var i=0;i<arr.length;i++){
      var r=arr[i], value=idx===6?fmt(r[idx],2)+'%':signed(r[idx]);
      var cls=idx===6||Number(r[5])>0?'up':'down';
      h+='<li><span>'+(i+1)+'</span><b>'+r[1]+'</b><span>'+r[2]+'</span><strong class="'+cls+'">'+value+'</strong></li>';
    }
    target.innerHTML=h;
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
    renderList('top',sortedBy(6,10,false),6);
    renderList('up',sortedBy(5,5,false),5);
    renderList('down',sortedBy(5,5,true),5);
    render();
  }
  window.copySummary=function(){navigator.clipboard.writeText('FPON TODAY IS... | 2026.08.21\n교보생명 변액보험 기준가·펀드 설정일·현재 자산현황 포함').then(function(){alert('오늘 요약을 복사했습니다.');});};
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
})();