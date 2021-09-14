<template>
  <div class="allfriends">
    <h2 style="text-align: center">All Friends</h2>
     <table class="table" width="50%" border="1" style="margin: auto">
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
      <tbody>
        <tr v-for="(friend, index) in friends" :key="index">
          <td>{{ index + 1 }}</td>
          <td>{{ friend.name }}</td>
          <td>{{ friend.department }}</td>
          <td>{{ friend.university }}</td>
          <td>{{ friend.gender }}</td>
          <td>{{ friend.relation }}</td>
          <td>{{ friend.join }}</td>
          <td><button @click="allUnfriend(friend.name)" style="background: orange">Delete</button></td>
        </tr>
      </tbody>
      </table>
  </div>
</template>

<script>
export default {
  name: "AllFriends",
  data(){
    return{

    }
  },
  props:[
      'friends'
  ],
  methods:{
    allUnfriend(name){
      return this.$emit('allUnfriend', {name});
    }
  }
}
</script>

<style scoped>

</style>