import { chapters } from '../content/story.js';

const chapterHost = document.querySelector('#chapters');
const navHost = document.querySelector('#chapter-nav');
const progressBar = document.querySelector('#rail-progress');

function motifMarkup(type) {
  const motifs = {
    ledger: '<span class="motif-ledger"><i></i><i></i><i></i><i></i></span>',
    practice: '<span class="motif-practice"><i></i><i></i><i></i></span>',
    network: '<span class="motif-network"><i></i><i></i><i></i><i></i><b></b><b></b><b></b></span>',
    builder: '<span class="motif-builder"><i></i><i></i><i></i></span>',
    models: '<span class="motif-models"><i></i><i></i><i></i><i></i><i></i></span>',
    agents: '<span class="motif-agents"><i></i><i></i><i></i><i></i><b></b><b></b><b></b></span>'
  };
  return motifs[type] || '';
}

chapters.forEach((chapter) => {
  const nav = document.createElement('li');
  nav.innerHTML = `<a href="#${chapter.id}" data-chapter="${chapter.id}"><span>${chapter.number}</span>${chapter.title}</a>`;
  navHost.append(nav);

  const section = document.createElement('article');
  section.className = `chapter chapter-${chapter.motif}`;
  section.id = chapter.id;
  section.dataset.chapter = chapter.id;
  section.innerHTML = `
    <div class="chapter-art" aria-hidden="true">${motifMarkup(chapter.motif)}</div>
    <div class="chapter-copy">
      <div class="chapter-meta"><span>${chapter.number}</span><span>${chapter.era}</span></div>
      <h2>${chapter.title}</h2>
      <p class="chapter-lede">${chapter.lede}</p>
      <p>${chapter.body}</p>
      <blockquote>${chapter.note}</blockquote>
    </div>`;
  chapterHost.append(section);
});

const chapterEls = [...document.querySelectorAll('.chapter')];
const navLinks = [...document.querySelectorAll('[data-chapter]')];

const observer = new IntersectionObserver((entries) => {
  const visible = entries
    .filter((entry) => entry.isIntersecting)
    .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

  if (!visible) return;
  const id = visible.target.dataset.chapter;
  document.body.dataset.activeChapter = id;
  navLinks.forEach((link) => link.classList.toggle('active', link.dataset.chapter === id));
}, { threshold: [0.2, 0.45, 0.7], rootMargin: '-12% 0px -35% 0px' });

chapterEls.forEach((chapter) => observer.observe(chapter));

function updateProgress() {
  const shell = document.querySelector('.story-shell');
  if (!shell) return;
  const rect = shell.getBoundingClientRect();
  const available = Math.max(1, shell.offsetHeight - window.innerHeight);
  const travelled = Math.min(available, Math.max(0, -rect.top));
  const pct = Math.max(0, Math.min(100, travelled / available * 100));
  progressBar.style.height = `${pct}%`;
  document.documentElement.style.setProperty('--journey-progress', `${pct / 100}`);
}

window.addEventListener('scroll', updateProgress, { passive: true });
window.addEventListener('resize', updateProgress);
updateProgress();

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    document.querySelector(`#${link.dataset.chapter}`)?.focus({ preventScroll: true });
  });
});

if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  document.documentElement.classList.add('reduced-motion');
}
