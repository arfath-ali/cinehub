import { initLinkInterceptor } from './router/initLinkInterceptor.router.js';
import { navigate } from './router/navigate.router.js';

function bootstrap() {
  initLinkInterceptor();
  navigate();
  window.addEventListener('popstate', navigate);
}

window.addEventListener('DOMContentLoaded', bootstrap);
