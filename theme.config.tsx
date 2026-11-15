import React from 'react'
import type { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <b>Gotowe na czas</b>,
  // The navbar's project link defaults to a GitHub icon; show plain text instead.
  project: {
    link: 'https://app.gotowenaczas.pl',
    icon: <span style={{ fontWeight: 600 }}>Otwórz aplikację →</span>,
  },
  footer: {
    content: '© 2026 Gotowe na czas. Wszystkie prawa zastrzeżone.',
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta
        name="description"
        content="Dokumentacja aplikacji Gotowe na czas — system zarządzania budową domu"
      />
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
