import React from 'react'
import type { DocsThemeConfig } from 'nextra-theme-docs'

/**
 * Google Tag Manager and the cookie banner, shared with gotowenaczas.pl: one
 * container, one consent cookie (gnc_consent on .gotowenaczas.pl). Setup:
 * Documentation/integrations/gtm-setup.md in the app repo. The script is a
 * copy of trackingBootstrap() in the app's src/lib/tracking.ts: change both
 * together. Empty GTM_ID keeps GTM and the banner off.
 */
const GTM_ID = ''
const TRACKED_HOSTS = ['gotowenaczas.pl', 'docs.gotowenaczas.pl']

function trackingBootstrap(gtmId: string): string {
  if (!/^GTM-[A-Z0-9]+$/.test(gtmId)) return ''
  const hosts = JSON.stringify(TRACKED_HOSTS)
  return `(function(w,d){
if(${hosts}.indexOf(w.location.hostname)<0)return;
w.dataLayer=w.dataLayer||[];
w.gtag=function(){w.dataLayer.push(arguments)};
var s=d.cookie.match(/(?:^|;)\\s*gnc_consent=v\\d+\\.p([01])\\.s([01])\\.m([01])\\./);
function on(i){return s&&s[i]==='1'?'granted':'denied'}
w.gtag('consent','default',{functionality_storage:on(1),personalization_storage:on(1),analytics_storage:on(2),ad_storage:on(3),ad_user_data:on(3),ad_personalization:on(3),security_storage:'granted',wait_for_update:500});
d.addEventListener('click',function(e){var t=e.target;if(t&&t.closest&&t.closest('[data-cookie-settings]'))w.dataLayer.push({event:'open_consent_modal'})});
w.dataLayer.push({'gtm.start':new Date().getTime(),event:'gtm.js'});
var j=d.createElement('script');j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id=${gtmId}';
d.head.appendChild(j);
})(window,document);`
}

const tracking = trackingBootstrap(GTM_ID)

const footerLink = { color: 'inherit', textDecoration: 'underline' } as const

const config: DocsThemeConfig = {
  logo: <b>Gotowe na czas</b>,
  // The navbar's project link defaults to a GitHub icon; show plain text instead.
  project: {
    link: 'https://app.gotowenaczas.pl',
    icon: <span style={{ fontWeight: 600 }}>Otwórz aplikację →</span>,
  },
  footer: {
    content: (
      <span style={{ display: 'flex', flexWrap: 'wrap', gap: '8px 20px' }}>
        <span>© 2026 Gotowe na czas. Wszystkie prawa zastrzeżone.</span>
        <a href="https://gotowenaczas.pl/polityka-prywatnosci" style={footerLink}>
          Polityka prywatności
        </a>
        <a href="https://gotowenaczas.pl/ustawienia-cookies" style={footerLink}>
          Ustawienia cookies
        </a>
      </span>
    ),
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta
        name="description"
        content="Dokumentacja aplikacji Gotowe na czas — system zarządzania budową domu"
      />
      {tracking ? <script dangerouslySetInnerHTML={{ __html: tracking }} /> : null}
    </>
  ),
  sidebar: {
    defaultMenuCollapseLevel: 2,
    toggleButton: true,
  },
  toc: {
    title: 'Na tej stronie',
  },
  // No "edit on GitHub" link, and feedback goes to e-mail instead of GitHub issues.
  editLink: {
    component: null,
  },
  feedback: {
    content: 'Masz pytanie? Napisz do nas →',
    useLink: () => 'mailto:kontakt@gotowenaczas.pl?subject=Pytanie%20o%20dokumentacj%C4%99',
  },
  navigation: {
    prev: true,
    next: true,
  },
  i18n: [],
  search: {
    placeholder: 'Szukaj w dokumentacji...',
  },
}

export default config
