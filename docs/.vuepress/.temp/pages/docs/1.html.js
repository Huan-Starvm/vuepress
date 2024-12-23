import comp from "/root/vuepress-starter/docs/.vuepress/.temp/pages/docs/1.html.vue"
const data = JSON.parse("{\"path\":\"/docs/1.html\",\"title\":\"云虚拟主机\",\"lang\":\"zh-CN\",\"frontmatter\":{\"lang\":\"zh-CN\",\"title\":\"云虚拟主机\"},\"headers\":[],\"git\":{},\"filePathRelative\":\"docs/1.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
