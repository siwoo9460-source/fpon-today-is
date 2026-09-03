(function () {
  if (window.__fponTax0903Fixed) return;
  window.__fponTax0903Fixed = true;
  const style = document.createElement('style');
  style.textContent = `.tax-reform{background:linear-gradient(135deg,#fffaf0,#fff)!important;border-color:#ead8ae!important}.tax-head{display:flex;align-items:flex-start;justify-content:space-between;gap:12px;margin-bottom:14px}.tax-kicker{display:inline-flex;padding:5px 10px;border-radius:999px;background:#fff0cf;color:#8a6014;font-size:12px;font-weight:950;margin-bottom:8px}.tax-state{padding:6px 10px;border-radius:999px;background:#f6f1e7;color:#765d32;font-size:11px;font-weight:900;white-space:nowrap}.tax-intro{font-size:14px;line-height:1.75;color:#526477}.tax-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:10px;margin-top:14px}.tax-item{padding:16px;border:1px solid #eadfc9;border-radius:14px;background:rgba(255,255,255,.86)}.tax-item b{display:block;color:#664b1d;font-size:15px;margin-bottom:8px}.tax-item ul{margin:0;padding-left:18px;color:#5d6876;font-size:13px;line-height:1.7}.tax-item li+li{margin-top:4px}.tax-four{margin-top:13px;padding:15px;border-radius:14px;background:#fff4dc;color:#654d25;font-size:13px;line-height:1.75}.tax-four b{display:block;margin-bottom:5px;color:#5b4218}.tax-path{font-weight:900;color:#8a6014}.tax-source{margin-top:10px;color:#7a7469;font-size:11px;line-height:1.6}@media(max-width:800px){.tax-grid{grid-template-columns:1fr}.tax-head{display:block}.tax-state{display:inline-flex;margin-top:8px}}`;
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
      <div class="tax-head"><div><span class="tax-kicker">2026 세법개정안 핵심 요약</span><h2 class="title" style="margin:0">우리 가정과 자산에는 무엇이 달라질까요?</h2></div><span class="tax-state">정부안 · 국회 심사 전</span></div>
      <div class="tax-intro">2026년 세법개정안은 9월 1일 국무회의를 통과해 국회 심사를 앞두고 있습니다. 아직 최종 법률은 아니지만, 다음 네 가지는 미리 살펴볼 필요가 있습니다.</div>
      <div class="tax-grid">
        <div class="tax-item"><b>🏠 실거주 1주택 세제</b><ul><li>실거주 1주택자의 종부세 기본공제는 12억원에서 14억원으로 높이는 방안입니다.</li><li>10년 이상 거주한 1주택자의 장기거주 소득공제 기본공제는 연 250만원에서 2,500만원으로 확대하는 내용이 담겼습니다.</li><li>장기보유 공제는 단순 보유보다 실제 거주기간을 더 중요하게 보는 방향입니다.</li></ul></div>
        <div class="tax-item"><b>💳 ISA·퇴직연금</b><ul><li>생산적금융 ISA와 청년형 ISA 신설이 추진됩니다.</li><li>청년의 장기투자를 지원하는 비과세 금융투자계좌와 퇴직연금 납입액 세액공제 확대가 포함됐습니다.</li><li>계좌마다 대상과 혜택이 다르므로 확정 요건을 확인해야 합니다.</li></ul></div>
        <div class="tax-item"><b>🏢 가업승계·사업승계</b><ul><li>가업상속공제 제도를 전면 재설계하는 방향입니다.</li><li>경영기간 요건은 10년에서 30년, 공제 최고한도는 600억원에서 1,000억원으로 조정하는 방안이 제시됐습니다.</li><li>가족뿐 아니라 제3자에게 사업을 승계하는 경우의 세제지원도 신설할 예정입니다.</li></ul></div>
        <div class="tax-item"><b>🌿 은퇴 후 자산이전</b><ul><li>65세 이상 1주택자가 수도권 주택을 처분하고 지방으로 이전할 때 한시적 양도세 감면을 신설하는 방안입니다.</li><li>10년 이상 거주한 고령 1주택자의 종부세 납부유예 요건도 완화하는 방향입니다.</li><li>부동산과 상속·증여, 은퇴 현금흐름을 함께 점검해야 합니다.</li></ul></div>
      </div>
      <div class="tax-four"><b>오늘의 한 줄</b>세율만 보는 것보다 <span class="tax-path">실제 거주기간 · 금융계좌 · 사업승계 계획 · 은퇴 후 현금흐름</span>을 함께 확인하는 것이 중요합니다.</div>
      <div class="tax-source">※ 2026.09.03 기준 정부안 요약입니다. 국회 심사 과정에서 내용과 시행 시기가 달라질 수 있으므로 최종 확정 후 다시 확인해야 합니다.</div>` : `
      <div class="tax-head"><div><span class="tax-kicker">2026 세법개정안 · FP 고정 브리핑</span><h2 class="title" style="margin:0">고객 상담에 연결할 6대 변화</h2></div><span class="tax-state">정부안 · 국회 심사 전</span></div>
      <div class="tax-intro">2026년 세법개정안은 9월 1일 국무회의를 통과해 국회 심사를 앞두고 있습니다. 아직 최종 법률은 아니므로 고객에게는 정부안과 확정 법률을 구분해 안내해야 합니다.</div>
      <div class="tax-grid">
        <div class="tax-item"><b>1. 🏠 부동산 세제</b><ul><li>실거주 1주택 종부세 기본공제: 12억원 → 14억원</li><li>10년 이상 거주 1주택 장기거주 소득공제 기본공제: 연 250만원 → 2,500만원</li><li>장기보유특별공제는 단순 보유보다 실제 거주기간 중심으로 개편</li><li>비거주 1주택 기본공제를 4.9억원으로 낮추려던 최초안은 수정되어 12억원 유지</li></ul></div>
        <div class="tax-item"><b>2. 💳 ISA·자산형성 지원</b><ul><li>생산적금융 ISA 신설</li><li>청년형 생산적금융 ISA 도입</li><li>청년 비과세 금융투자계좌 도입 방향</li><li>가입 대상·한도·시행일은 확정안에서 재확인</li></ul></div>
        <div class="tax-item"><b>3. 👩‍❤️‍👨 청년·혼인·출산</b><ul><li>청년 월세 세액공제 확대</li><li>청년 퇴직연금 납입액 세액공제 확대</li><li>무주택 부부의 주택 임차차입금 상환액 소득공제 지원</li><li>출산·입양 및 혼인 지원은 기존 공제 수준 이상이 되도록 별도 재정지원 방안 마련</li></ul></div>
        <div class="tax-item"><b>4. 🏢 가업상속·법인고객</b><ul><li>가업상속공제 제도 전면 재설계</li><li>피상속인 경영기간 요건: 10년 → 30년</li><li>공제 최고한도: 600억원 → 1,000억원</li><li>업종 기준 조정 및 일부 업종 제외</li><li>제3자 사업승계 세제지원 신설</li></ul></div>
        <div class="tax-item"><b>5. 🌿 은퇴·고령자 자산관리</b><ul><li>65세 이상 1주택자의 수도권 주택 처분·지방 이전 시 한시적 양도세 감면 신설</li><li>10년 이상 거주 고령 1주택자의 종부세 납부유예 요건 완화</li><li>부동산 + 상속·증여 + 현금흐름을 연결한 상담 필요</li></ul></div>
        <div class="tax-item"><b>6. 🏭 기업·투자</b><ul><li>반도체·이차전지·AI·로봇 부품 및 핵심소재 국내생산세액공제 신설</li><li>국가전략기술·벤처투자 세제지원 확대</li><li>BDC 배당소득에 9% 전용 분리과세 특례 신설</li><li>지방 투자·R&amp;D 지역별 우대율 확대</li></ul></div>
      </div>
      <div class="tax-four"><b>FPON에서 가장 중요한 4대 주제</b><span class="tax-path">실거주 1주택 세제 → ISA·퇴직연금 → 가업승계·사업승계 → 은퇴 후 자산이전</span><br>고객의 현재 상황과 향후 1~2년 계획을 먼저 확인한 뒤 세무전문가와 협업하세요.</div>
      <div class="tax-source">※ 2026.09.03 기준 정부안 요약 · 국회 심사 과정에서 변경 가능 · 개별 세무 의사결정 전 세무전문가 확인 필요</div>`;
    news.insertAdjacentElement('afterend', section);
  }
  setTimeout(renderTax, 1800);
  setTimeout(renderTax, 3000);
})();
