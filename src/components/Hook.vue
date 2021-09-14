<template>
  <div>
    <input type="text" v-model="search" placeholder="Search Post">
     <table width="70%" style="margin: auto" border="1">
      <thead>
         <tr>
             <th>SL</th>
             <th>User ID</th>
             <th>Title</th>
             <th>Body</th>
         </tr>
      </thead>
      <tbody>
         <tr v-for="(post, index) in postsSearch" :key="index">
             <td>{{ index + 1 }}</td>
             <td>{{ post.userId }}</td>
             <td>{{ post.title }}</td>
             <td>{{ post.body | snipper }}</td>
         </tr>
      </tbody>
      </table>

  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: "Hook",
  data(){
    return {
      posts : [],
      search: ''

    }
  },
  computed:{
    postsSearch(){
      return this.posts.filter(post => {
        return post.title.match(this.search)
      })
    }
  },
  created() {
    this.allPosts()
 },
  methods:{
    allPosts(){
      axios.get('https://jsonplaceholder.typicode.com/posts')
          .then(res => {
            // console.log(res.data)
            return this.posts = res.data;
          }).catch(error => {
            console.log(error)
      })
    }
  }
}
</script>

<style scoped>

</style>