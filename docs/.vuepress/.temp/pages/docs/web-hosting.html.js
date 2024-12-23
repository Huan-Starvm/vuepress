import comp from "/root/vuepress-starter/docs/.vuepress/.temp/pages/docs/web-hosting.html.vue"
const data = JSON.parse("{\"path\":\"/docs/web-hosting.html\",\"title\":\"虚拟主机\",\"lang\":\"zh-CN\",\"frontmatter\":{\"lang\":\"zh-CN\",\"title\":\"虚拟主机\"},\"headers\":[{\"level\":2,\"title\":\"产品概述\",\"slug\":\"产品概述\",\"link\":\"#产品概述\",\"children\":[]},{\"level\":2,\"title\":\"购买指南\",\"slug\":\"购买指南\",\"link\":\"#购买指南\",\"children\":[]},{\"level\":2,\"title\":\"第三章\",\"slug\":\"第三章\",\"link\":\"#第三章\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"docs/web-hosting.md\"}")
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
