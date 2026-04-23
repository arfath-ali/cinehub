import type { AppState } from '../types/app-state.types.js';
import { getElement } from '../utils/dom.utils.js';
import { updatePageTitle } from '../utils/meta-data.utils.js';

const body = getElement<HTMLBodyElement>('body');

export function setAppState(state: AppState) {
  body.dataset.state = state;
  updatePageTitle(state);
}
