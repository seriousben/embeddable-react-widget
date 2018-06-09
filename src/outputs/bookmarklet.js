import EmbeddableWidget from './embeddable-widget';

export default function bookmarklet() {
  if (window.EmbeddableWidget) {
    return;
  }
  window.EmbeddableWidget = EmbeddableWidget;

  EmbeddableWidget.mount();
}

bookmarklet();
