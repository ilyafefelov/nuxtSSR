<template>
  <div class="container">
    <div>
      <Logo />
      <h1 class="title">
        nuxt-on-vercel
      </h1>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          rel="noopener noreferrer"
          class="button--green"
        >
          Documentation
        </a>
        <a
          href="https://github.com/ilyafefelov/nuxtSSR/"
          target="_blank"
          rel="noopener noreferrer"
          class="button--grey"
        >
          GitHub Code
        </a>
        <div v-if="error">
          {{ error }}
        </div>
        <ul v-else>
          <li v-for="post in posts" :key="post.id">
            {{ post.title }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      posts: [],
      error: null
    }
  },
  async mounted () {
    // eslint-disable-next-line no-console
    // console.log('process.env = ', process.env)
    // eslint-disable-next-line no-console
    console.log('process.env = ', process.env.STRAPI_URL)
    try {
      this.posts = await this.$strapi.$posts.find()
    } catch (error) {
      this.error = error
    }
  }
}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
