const solutions = {
  infrastructure: { icon: '⌘', label: 'INFRASTRUCTURE MODERNIZATION', title: 'Build a stronger foundation.', copy: 'Aging infrastructure and fragmented systems limit agility. TechPower helps organizations plan and modernize the technology that supports their operations.' },
  security: { icon: '◇', label: 'CYBERSECURITY', title: 'Strengthen your security posture.', copy: 'Disconnected security tools can create blind spots. TechPower helps teams evaluate risk, identify gaps, and coordinate security solutions that fit the business.' },
  cloud: { icon: '☁', label: 'CLOUD SOLUTIONS', title: 'Make cloud work for your business.', copy: 'Cloud environments can become costly and complex without a plan. TechPower helps organizations consider architecture, modernization, and operational needs.' }
};
const tabs = [...document.querySelectorAll('.service-tab')];
const panel = document.querySelector('#solution-panel');
function activate(tab) {
  if (!tab || !panel) return;
  const solution = solutions[tab.dataset.service];
  tabs.forEach(t => { const selected = t === tab; t.classList.toggle('selected', selected); t.setAttribute('aria-selected', String(selected)); t.tabIndex = selected ? 0 : -1; });
  document.querySelector('#panel-icon').textContent = solution.icon;
  document.querySelector('#panel-label').textContent = solution.label;
  document.querySelector('#panel-title').textContent = solution.title;
  document.querySelector('#panel-copy').textContent = solution.copy;
  panel.setAttribute('aria-labelledby', tab.id);
}
tabs.forEach((tab, index) => {
  tab.addEventListener('click', () => activate(tab));
  tab.addEventListener('keydown', e => { if (!['ArrowDown','ArrowRight','ArrowUp','ArrowLeft','Home','End'].includes(e.key)) return; e.preventDefault(); let next = index; if (e.key === 'ArrowDown' || e.key === 'ArrowRight') next = (index + 1) % tabs.length; else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') next = (index + tabs.length - 1) % tabs.length; else if (e.key === 'Home') next = 0; else next = tabs.length - 1; activate(tabs[next]); tabs[next].focus(); });
});
const video = document.querySelector('.hero-video');
if (video) { video.muted = true; video.defaultMuted = true; video.playsInline = true; video.addEventListener('canplay', () => { const p = video.play(); if (p && typeof p.catch === 'function') p.catch(() => {}); }, {once: true}); }
