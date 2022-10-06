<template>
  <div class="container">
    <p id="title">Awaiting Confirmation</p>
    <p>Do not close this window until opening the email link</p>
    <p>
      We just sent an email to <span>{{ email }}</span>
    </p>
  </div>
</template>

<script setup>
const email = ref();
onMounted(() => {
  email.value = localStorage.getItem("emailForSignIn");
});
</script>

<style lang="scss">
.container {
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  color: #888;

  #title {
    font-size: 48px;
    font-weight: 700;
    color: white;
  }

  span {
    color: white;
    font-weight: bold;
  }
}
</style>
