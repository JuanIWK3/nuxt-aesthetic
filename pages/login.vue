<template>
  <div class="container">
    <header></header>
    <main>
      <h1 id="title">Login to F02</h1>
      <button id="google">
        <img class="icon" src="../assets/white-google-logo.png" alt="" />
        Continue with google
      </button>
      <button id="github">
        <img class="icon" src="../assets/github-logo.png" alt="" />
        Continue with GitHub
      </button>
      <div class="divider"></div>
      <button id="email">Continue with email</button>
    </main>
    <footer>
      <NuxtLink to="/register">Don't have an account? Sign Up</NuxtLink>
    </footer>
  </div>
</template>

<script setup>
onMounted(async () => {
  const credentials = await googleSignIn();
  console.log(credentials);
});
</script>

<style scoped lang="scss">
.container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  height: 100%;

  #title {
    font-size: 32px;
    margin-bottom: 16px;
  }

  main {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: space-around;

    padding: 8px;
    height: 42px;
    width: 220px;

    color: white;
    font-weight: 700;
    border-radius: 5px;
    background: #24292e;
    margin: 4px 0;
    cursor: pointer;

    .icon {
      width: 20px;
      height: 20px;
    }

    &#google {
      background: rgb(255, 33, 33);
    }
  }

  footer {
    display: flex;
    height: 100px;
    align-items: center;
    justify-content: center;
    border-top: 1px solid #333;
    width: 100%;
    color: #3291ff;
    cursor: pointer;

    a {
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }

      &:visited {
        color: #3291ff;
      }
    }
  }

  .divider {
    height: 1px;
    width: 220px;
    background: #444;
    margin: 8px 0;
  }
}
</style>
