<template>
  <div class="app-bar-top">
    <div class="wrapper">
      <div class="content container">
        <div class="address">
          <v-icon size="14" class="icon"> fas fa-location-dot</v-icon> Xóm 2,
          Thái Thượng, Thái Thụy, Thái Bình
        </div>
        <div class="email">
          <v-icon size="14" class="icon"> fas fa-envelope</v-icon
          >batcandoi1901@gmail.com
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppBarTop",
  data() {},
};
</script>
<style lang="scss" scoped>
.app-bar-top {
  > .wrapper {
    background-color: $color-background-gray;
    font-size: 13px;
  }

  > .wrapper > .content {
    padding: 5px 0;
    display: flex;
  }
  > .wrapper > .content > .address {
    color: $color-gray-600;
    max-width: 1185px;
  }

  > .wrapper > .content > .email {
    margin-left: 32px;
  }
  > .wrapper > .content > .email > .icon,
  > .wrapper > .content > .address > .icon {
    margin-right: 4px;
    margin-bottom: 2px;
  }
}
</style>
