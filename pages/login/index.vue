<template>
  <div class="container">
    <main>
      <h1 id="title">Login to Aesthetic</h1>

      <button id="google" @click="gSignIn()">
        <img class="icon" src="../../assets/white-google-logo.png" alt="" />
        <p class="button-text">Continue with google</p>
      </button>
      <button id="github">
        <img class="icon" src="../../assets/github-logo.png" alt="" />
        <p class="button-text">Continue with GitHub</p>
      </button>
      <div class="divider"></div>
      <input type="email" placeholder="Email Address" />
      <button id="email">
        <div class="icon">
          <svg
            data-testid="geist-icon"
            fill="none"
            height="24"
            shape-rendering="geometricPrecision"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
            viewBox="0 0 24 24"
            width="24"
          >
            <path
              d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
            ></path>
            <path d="M22 6l-10 7L2 6"></path>
          </svg>
        </div>
        <p class="button-text" @click="sendSignIn()">Continue with email</p>
      </button>
    </main>
    <footer>
      <NuxtLink to="/register">Don't have an account? Sign Up</NuxtLink>
    </footer>
  </div>
</template>

<script setup>
const $router = useRouter();

const gSignIn = async () => {
  try {
    await googleSignIn();
    $router.push("/");
  } catch (error) {
    error;
  }
};

const sendSignIn = async () => {
  const res = await sendSignLink("juaniwk3@gmail.com");
};
</script>

<style scoped lang="scss">
.container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  height: 100%;
  width: 100%;

  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    flex: 1;
    padding: 24px;
    max-width: 320px;

    #title {
      font-size: 28px;
      font-weight: bold;
      margin-bottom: 16px;
    }

    .divider {
      height: 1px;
      width: 100%;
      background: #444;
      margin: 8px 0;
    }
    input {
      width: 220px;
      outline: none;
      height: 42px;
      background: transparent;
      border: 1px solid #333;
      border-radius: 5px;
      margin: 4px 0;
      padding-left: 8px;
      font-size: 16px;
      transition: border-color 0.15s ease;
      color: #ddd;
      width: 100%;

      &:focus {
        border-color: #888;
      }
    }

    button {
      display: flex;
      align-items: center;
      justify-content: center;

      padding: 0 12px;
      height: 42px;

      width: 100%;
      min-width: none;
      max-width: 320px;

      color: white;
      font-weight: 700;
      border: none;
      border-radius: 5px;
      background: #24292e;
      margin: 4px 0;
      cursor: pointer;

      .button-text {
        margin: 0 auto;
      }

      .icon {
        width: 20px;
        height: 20px;
      }

      &#google {
        background: rgb(255, 33, 33);
      }
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
}
</style>
