/**
 * @useRouter augments browser history and location
 * into a single source of truth
 */
export function useRouter() {
  const {
    location: { href, hostname, protocol, pathname, search, reload, replace, assign },
    history: { state: historyState, back, forward, go, pushState },
  } = window;

  /**
   * @push causes the browser to move into a specified url
   * @param {string | URL} url
   * @param {object} state
   */
  function push(url, state) {
    if (state) return pushState(state, '', url);

    return assign(url);
  }

  return {
    /**
     * returns the href (URL) of the current page
     */
    href,

    /**
     * A URL pathname, beginning with a /.
     */
    pathname,

    /**
     *  returns the domain name of the web host
     */
    hostname,

    /**
     * returns the web protocol used (http: or https:)
     */
    protocol,

    /**
     * Returns the Location object's URL's query (includes leading "?" if non-empty).
     * Can be set, to navigate to the same URL with a changed query (ignores leading "?").
     */
    search,

    /**
     * A value of arbitrary data associated with this location.
     */
    state: historyState,

    /**
     * causes the browser to move forward one page in the session history.
     * It has the same effect as calling history.go(1).
     */
    forward,

    /**
     * causes the browser to move back one page in the session history.
     * It has the same effect as calling history.go(-1).
     * If there is no previous page, this method call does nothing.
     */
    back,

    /**
     * loads a specific page from the session history.
     * You can use it to move forwards and backwards
     * through the history depending on the value of a parameter.
     */
    go,

    /**
     * replace
     */
    replace,

    /**
     * push
     */
    push,

    /**
     * reload
     */
    reload,
  };
}
