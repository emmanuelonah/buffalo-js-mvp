import { useRouter } from '../hooks';
import { Home, Contact } from '../pages';

/**
 * Manages which page to render
 */
export class RoutingEngine {
  static ROUTES = {
    '/': () => new Home(),
    '/contact': () => new Contact(),
  };

  static render() {
    const router = useRouter();
    const handleRouteChange = RoutingEngine.ROUTES[router.pathname] ?? (() => {});

    /**
     * When the document is loaded for the first time
     */
    window.addEventListener('load', () => {
      console.log('RoutingEngine STARTED ✅');

      handleRouteChange();
    });

    /**
     * When a pop state event is triggered(window.history.popState)
     */
    window.addEventListener('popstate', handleRouteChange);

    /**
     * Listing to navigation
     */
    Object.keys(RoutingEngine.ROUTES).forEach((route) => {
      const node = document.querySelector(`[href="${route}"]`);

      console.log('NODE', node);

      if (node) {
        node.addEventListener('click', (ev) => {
          ev.preventDefault();

          console.log('HELLO', { router, route, node });

          handleRouteChange();
        });
      }
    });
  }
}
