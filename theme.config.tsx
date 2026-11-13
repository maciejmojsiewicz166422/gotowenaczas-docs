import React from 'react'
import type { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <b>Gotowe na czas</b>,
  project: {
    link: 'https://app.gotowenaczas.pl',
  },
  docsRepositoryBase:
    'https://github.com/maciejmojsiewicz166422/gotowenaczas-docs/tree/main',
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
  editLink: {
    content: 'Edytuj tę stronę →',
  },
  feedback: {
    content: 'Masz pytanie? Napisz do nas →',
    labels: 'feedback',
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
