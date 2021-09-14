<template>
  <div id="app">
    <hook></hook>
    <h2>{{ name }}</h2>
    <all-friends :friends="allfriends" @allUnfriend="allUnfriend"></all-friends>
    <OnlineFriends :onlinefriends="allfriends" @unfriend="unfriendOnline"></OnlineFriends>
  </div>
</template>

<script>

import AllFriends from "@/components/AllFriends";
import OnlineFriends from "@/components/OnlineFriends";
import Hook from "@/components/Hook";
export default {
  name: 'App',
  components: {OnlineFriends, AllFriends, Hook},
  data(){
    return {
      name            : 'Friend Management System',
      number          : 20,
      allfriends      : [
        {
          name        : 'Partha',
          gender      : 'Male',
          relation    : 'Single',
          university  : 'EUB',
          join        : '2018',
          department  : 'CSE',
          online      : true
        },
        {
          name        : 'John Abraham',
          gender      : 'Male',
          relation    : 'Single',
          university  : 'EUB',
          join        : '2018',
          department  : 'CSE',
          online      : false
        },
        {
          name        : 'Shah Rukh Khan',
          gender      : 'Male',
          relation    : 'Single',
          university  : 'EUB',
          join        : '2018',
          department  : 'CSE',
          online      : true
        },
        {
          name        : 'Ranveer Kappor',
          gender      : 'Male',
          relation    : 'Single',
          university  : 'EUB',
          join        : '2018',
          department  : 'CSE',
          online      : true
        },
        {
          name        : 'Hrittik Rashon',
          gender      : 'Male',
          relation    : 'Single',
          university  : 'EUB',
          join        : '2018',
          department  : 'CSE',
          online      : false
        },
        {
          name        : 'Amir Khan',
          gender      : 'Male',
          relation    : 'Single',
          university  : 'EUB',
          join        : '2018',
          department  : 'CSE',
          online      : true
        }
      ]
    }
  },
  methods:{
    allUnfriend(payload){
      this.allfriends = this.allfriends.filter(allfriend => {
        return allfriend.name !== payload.name;
      });
    },
    unfriendOnline(payload){
      // console.log(payload)
      this.allfriends = this.allfriends.filter(onlineFriend => {
        return onlineFriend.name !== payload.name;
      });
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
