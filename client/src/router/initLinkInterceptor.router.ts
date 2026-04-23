import { navigate } from './navigate.router.js';

export function initLinkInterceptor() {
  document.addEventListener('click', (e) => {
    e.preventDefault();
    const anchorLink = (e.target as HTMLInputElement).closest('a');
    if (!anchorLink) return;
    history.pushState({}, '', `${anchorLink.href}`);
    navigate();
  });
}
