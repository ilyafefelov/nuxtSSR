<template>
  <div class="container">
    <div>
      <!-- <Logo /> -->
      <h1 class="title">
        Full-Iron with Nuxt
      </h1>
      <div class="links">
        <!-- <a
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
        </a> -->
        <div v-if="error">
          {{ console.warn("error in tem", error) }}
        </div>
        <ul v-else>
          <h2 class="subtitle">
            There are {{ posts.length }} posts in total:
          </h2>
        </ul>
        <div v-if="error">
          {{ error }}
        </div>
        <ul v-else>
          <!-- {{ allPosts }} -->
          <li
            v-for="post in posts"
            :key="post._id"
            class="post p-6 items-start flex flex-col"
          >
            <p class="font-semibold text-xl mb-2">
              {{ post.title }}
            </p>
            <p class="text-xs mb-4">
              id: {{ post._id }}
            </p>
            <p class="leading-6 text-left mb-2">
              {{ post.body.slice(0, 424) }}
            </p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import {
  // mapMutations,
  mapGetters
} from 'vuex'
export default {
  // async asyncData ({ $strapi, store, error }) {
  //   try {
  //     const response = await $strapi.$posts.find()
  //     store.commit('setPosts', response)
  //   } catch (e) {
  //     const err = error(e)
  //     error = err.message
  //     return error
  //   }
  // },
  data () {
    return {
      // posts: [],
      error: null
    }
  },
  async fetch ({ $strapi, store, error }) {
    try {
      const res = await $strapi.$posts.find()
      // const { posts: res } = await $strapi.graphql({
      //   query: `
      //     query {
      //       posts {
      //         _id
      //         title
      //         body
      //       }
      //     }
      //   `
      // })
      // eslint-disable-next-line no-console
      console.log('response = ', res)
      store.commit('setPosts', res)
    } catch (error) {
      this.error = await error
      return this.error
    }
  },
  computed: {
    ...mapGetters({
      posts: 'allPosts'
    })
  },
  async mounted () {
    try {
      // eslint-disable-next-line no-console
      console.log(await this.$strapi.$posts.find())
    } catch (error) {
      this.error = error
    }
  },
  fetchOnServer: true,
  // fetchKey: 'post'
  fetchKey (getCounter) {
    // getCounter is a method that can be called to get the next number in a sequence
    // as part of generating a unique fetchKey.
    return ('post' + getCounter('post'))
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
  justify-content: flex-start;
  justify-content: flex-start;
  align-items: stretch;
  text-align: center;
  align-content: center;
  flex-wrap: wrap;
  flex-direction: column;
}

.post {
  background: rgba( 255, 255, 255, 0.25 );
  box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
  backdrop-filter: blur( 4px );
  -webkit-backdrop-filter: blur( 4px );
  border-radius: 10px;
  border: 1px solid rgba( 255, 255, 255, 0.18 );
  margin: 2em;
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
