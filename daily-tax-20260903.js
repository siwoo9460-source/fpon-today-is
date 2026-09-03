(function () {
  if (window.__fponTax0903) return;
  window.__fponTax0903 = true;

  const style = document.createElement('style');
  style.textContent = `
    .tax-reform{background:linear-gradient(135deg,#fffaf0,#fff)!important;border-color:#eddcb7!important}
    .tax-head{display:flex;align-items:flex-start;justify-content:space-between;gap:12px;margin-bottom:14px}
    .tax-kicker{display:inline-flex;padding:5px 10px;border-radius:999px;background:#fff0cf;color:#8a6014;font-size:12px;font-weight:950;margin-bottom:8px}
    .tax-state{padding:6px 10px;border-radius:999px;background:#f6f1e7;color:#765d32;font-size:11px;font-weight:900;white-space:nowrap}
    .tax-intro{font-size:14px;line-height:1.75;color:#526477}
    .tax-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin-top:14px}
    .tax-item{padding:15px;border:1px solid #eadfc9;border-radius:14px;background:rgba(255,255,255,.82)}
    .tax-item b{display:block;color:#664b1d;font-size:14px;margin-bottom:7px}
    .tax-item span{display:block;color:#5d6876;font-size:13px;line-height:1.65}
    .tax-action{margin-top:12px;padding:13px 15px;border-radius:13px;background:#fff4dc;color:#654d25;font-size:13px;line-height:1.7}
    .tax-source{margin-top:10px;color:#7a7469;font-size:11px;line-height:1.6}
    @media(max-width:800px){.tax-grid{grid-template-columns:1fr}.tax-head{display:block}.tax-state{display:inline-flex;margin-top:8px}}
  `;
  document.head.appendChild(style);

  function renderTax() {
    document.querySelectorAll('.tax-reform').forEach((node) => node.remove());
    const news = [...document.querySelectorAll('section')].find((section) => {
      const title = section.querySelector('h2');
      return title && title.textContent.includes('오늘의 뉴스');
    });
    if (!news) return;

    const customer = window.parent.location.pathname.includes('/customer/');
    const section = document.createElement('section');
    section.className = 'sec card tax-reform';
    section.innerHTML = customer ? `
      <div class="tax-head"><div><span class="tax-kicker">2026 세법개정안 ①</span><h2 class="title" style="margin:0">내 생활에는 무엇이 달라질까요?</h2></div><span class="tax-state">정부안 · 국회 심사 전</span></div>
      <div class="tax-intro">정부가 8월 3일 발표한 세제개편안은 성장 지원과 함께 서민·중산층·청년 지원, 지역 균형, 과세 형평성 개선을 담고 있습니다. 오늘은 전체 방향을 먼저 살펴봅니다.</div>
      <div class="tax-grid">
        <div class="tax-item"><b>🏠 주택·부동산</b><span>종합부동산세와 양도소득세의 계산 기준이 달라질 수 있어 보유 주택 수, 가격, 실제 거주 여부를 함께 확인해야 합니다.</span></div>
        <div class="tax-item"><b>👨‍👩‍👧 생활·가계</b><span>근로장려금 등 서민·중산층 지원 확대 내용이 포함됐습니다. 세부 신청 대상과 시행 시기는 확정 뒤 다시 확인해야 합니다.</span></div>
        <div class="tax-item"><b>🏢 지역·기업</b><span>지방 투자와 중소기업을 지원하는 세제 혜택이 보강됩니다. 사업자라면 업종과 지역별 적용 요건을 살펴보세요.</span></div>
      </div>
      <div class="tax-action"><b>오늘의 한 줄</b> · 지금 당장 세금이 바뀌는 것은 아닙니다. 국회 심사 후 최종 내용과 시행일을 확인한 뒤 자산 계획에 반영하세요.</div>
      <div class="tax-source">자료: 재정경제부 「2026년 세제개편안」(2026.08.03) · 실제 적용은 국회 심사 결과에 따라 달라질 수 있습니다.</div>` : `
      <div class="tax-head"><div><span class="tax-kicker">2026 세법개정안 상담 브리핑 ①</span><h2 class="title" style="margin:0">FP가 먼저 확인할 세 가지 변화</h2></div><span class="tax-state">정부안 · 국회 심사 전</span></div>
      <div class="tax-intro">2026년 세제개편안의 큰 방향은 성장잠재력 확충, 서민·중산층·청년 민생지원, 지역 주도 성장, 공정하고 합리적인 과세입니다. 오늘은 고객 분류에 필요한 첫 점검 항목을 정리합니다.</div>
      <div class="tax-grid">
        <div class="tax-item"><b>① 부동산 보유 고객</b><span>종부세·양도세가 주택가액과 실거주 여부 중심으로 조정될 수 있습니다. 보유 수, 공시가격, 거주기간, 매도계획을 먼저 확인하세요.</span></div>
        <div class="tax-item"><b>② 개인·가계 고객</b><span>근로장려금 등 민생지원 확대 여부와 적용 요건을 점검합니다. 고객에게는 정부안과 확정 법률을 구분해 안내해야 합니다.</span></div>
        <div class="tax-item"><b>③ 기업·법인 고객</b><span>국내생산·지방투자·중소기업 관련 세액공제와 감면 변화를 확인합니다. 업종, 규모, 투자지역에 따라 적용 여부가 달라집니다.</span></div>
      </div>
      <div class="tax-action"><b>오늘의 상담 질문</b> · “보유 주택과 실제 거주기간, 1~2년 내 매도·증여 계획이 있으신가요?” 세율 설명보다 고객 현황 파악을 먼저 시작하세요.</div>
      <div class="tax-source">자료: 재정경제부 「2026년 세제개편안」(2026.08.03) · 세무 의사결정 전 세무전문가 확인 필요 · 국회 심사 과정에서 변경될 수 있습니다.</div>`;
    news.insertAdjacentElement('afterend', section);
  }

  setTimeout(renderTax, 1800);
  setTimeout(renderTax, 3000);
})();
