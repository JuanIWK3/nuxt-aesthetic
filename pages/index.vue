<template>
  <div v-if="firebaseUser">
    <client-only>
      <pre>{{ firebaseUser }}</pre>
    </client-only>
    <button @click="signOutUser()">logout</button>
  </div>
  <div v-else>User signed out</div>
</template>

<script setup>
const firebaseUser = useFirebaseUser();
</script>
