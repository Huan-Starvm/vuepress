import { viteBundler } from '@vuepress/bundler-vite';
import { defaultTheme } from '@vuepress/theme-default';
import { defineUserConfig } from 'vuepress';
import { searchPlugin } from '@vuepress/plugin-search';

export default defineUserConfig({
  bundler: viteBundler(),
  theme: defaultTheme(),

  head: [['link', { rel: 'icon', href: '/images/logo.png' }]],

  lang: 'zh-CN',
  title: '星空云の帮助文档',
  description: '这是一个乱搓的网页',

  plugins: [
    searchPlugin({
      locales: {
        '/': {
          placeholder: '搜索文档',
        },
      },
    }),
  ],
});
