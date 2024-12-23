<template>
    <div>
      <p>重定向中...</p>
    </div>
  </template>
  
  <script>
  export default {
    mounted() {
      const { redirect } = this.$page.frontmatter;
      if (redirect) {
        window.location.href = redirect;
      }
    },
  };
  </script>
  