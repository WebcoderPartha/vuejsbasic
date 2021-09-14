<template>
  <div class="online friend">
    <h2 style="text-align: center">Online Friends</h2>
       <table width="50%" border="1" style="margin: 0 auto">
        <thead>
           <tr>
             <th>SL</th>
             <th>Name</th>
             <th>Department</th>
             <th>University</th>
             <th>Gender</th>
             <th>Relation</th>
             <th>Join</th>
             <th>Action</th>
           </tr>
        </thead>
        <tbody v-for="(friend, index) in onlinefriends" :key="index">
          <tr v-if="friend.online">
            <td>{{ index + 1 }}</td>
            <td>{{ friend.name }}</td>
            <td>{{ friend.department }}</td>
            <td>{{ friend.university }}</td>
            <td>{{ friend.gender }}</td>
            <td>{{ friend.relation }}</td>
            <td>{{ friend.join }}</td>
            <td><button @click="Unfriend(friend.name)" style="background: orange">Unfriend</button></td>
          </tr>
        </tbody>
        </table>
  </div>
</template>

<script>
export default {
  name: "OnlineFriends",
  data(){
    return {

    }
  },
  props: ['onlinefriends'],
  methods:{
    Unfriend(name){
      return this.$emit('unfriend', {name})
    }
  }
}
</script>

<style scoped>

</style>