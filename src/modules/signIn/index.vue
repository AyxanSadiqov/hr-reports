<template>
  <div class="flex flex-col items-center relative">
    <img
      class="absolute left-1/2 -translate-x-1/2 selector z-0"
      src="@/assets/images/login-bg-pattern.svg"
      alt="pattern"
    />
    <div class="flex flex-col gap-8 w-full max-w-[360px] py-12">
      <div class="flex flex-col items-center justify-center gap-6 z-10">
        <img
          class="w-12 h-12 selector"
          src="@/assets/images/login-logo.png"
          alt="Login logo"
        />
        <div class="flex flex-col justify-center gap-3">
          <div class="text-3xl font-semibold">Log in to your account</div>
          <div class="text-base text-loginSubtitle">
            Welcome back! Please enter your details.
          </div>
        </div>
      </div>
      <div class="flex flex-col items-center justify-center gap-6 z-10">
        <messageBox :type="messageBoxType" :text="messageBoxText" />
        <textInput
          id="emailInputRef"
          @keyup.enter.native="loginFunc()"
          v-model="email"
          @input="validateEmail"
          :info="emailInfo"
          :label="'Email'"
          :placeholder="'Email'"
        />
        <textInput
          @keyup.enter.native="loginFunc()"
          v-model="password"
          :label="'Password'"
          :placeholder="'••••••••'"
          :passwordVisibilityButton="true"
        />
        <login-button
          @click="loginFunc()"
          text="Sign in"
          :loading="buttonLoading"
          :disabled="loginButtonDisabled"
        />
      </div>
    </div>
  </div>
</template>

<script>
import loginButton from "@/common/components/buttons/loginButton.vue";
import textInput from "@/common/components/form/textInput.vue";
import { accounts } from "@/common/helpers/user";
import messageBox from "@/common/components/form/messageBox.vue";

export default {
  data() {
    return {
      accounts,
      email: "",
      emailInfo: {},
      password: "",
      buttonLoading: false,
      messageBoxText: "",
      messageBoxType: "",
    };
  },
  components: {
    loginButton,
    textInput,
    messageBox,
  },
  mounted() {
    document.getElementById("emailInputRef").focus();
  },
  computed: {
    loginButtonDisabled() {
      if (this.email && !this.emailInfo?.show && this.password) {
        return false;
      } else {
        return true;
      }
    },
  },
  methods: {
    validateEmail() {
      if (
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
          this.email
        )
      ) {
        this.emailInfo = {};
      } else {
        this.emailInfo = {
          show: true,
          type: "error",
          message: "Enter valid email address",
        };
      }
    },
    loginFunc() {
      let containsEmail = false
      accounts.forEach(acc => {
        if (acc.email == this.email && String(acc.password) == String(this.password)) {
          containsEmail = true
          return
        }
      })
      if (containsEmail) {
        localStorage.setItem("hrEmail", this.email)
        this.$router.push({ name: "allReports" });
        this.messageBoxType = ""
        this.messageBoxText = ""
      } else {
        this.messageBoxType = "error"
        this.messageBoxText = "Email or password is incorrect"
      }
    },
  },
};
</script>

<style scoped>
.selector {
  user-drag: none;
  -webkit-user-drag: none;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
}
</style>