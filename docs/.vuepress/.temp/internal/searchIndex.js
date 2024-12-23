export const SEARCH_INDEX = [
  {
    "title": "首页",
    "headers": [],
    "path": "/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "虚拟主机",
    "headers": [
      {
        "level": 2,
        "title": "产品概述",
        "slug": "产品概述",
        "link": "#产品概述",
        "children": []
      },
      {
        "level": 2,
        "title": "购买指南",
        "slug": "购买指南",
        "link": "#购买指南",
        "children": []
      },
      {
        "level": 2,
        "title": "第三章",
        "slug": "第三章",
        "link": "#第三章",
        "children": []
      }
    ],
    "path": "/docs/web-hosting.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "",
    "headers": [],
    "path": "/404.html",
    "pathLocale": "/",
    "extraFields": []
  }
]

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSearchIndex) {
    __VUE_HMR_RUNTIME__.updateSearchIndex(searchIndex)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ searchIndex }) => {
    __VUE_HMR_RUNTIME__.updateSearchIndex(searchIndex)
  })
}
