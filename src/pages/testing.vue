<template>
  <div>
    <XyzTransitionGroup class="item-group" xyz="duration-6 short-100% wide-25%">
      <div class="square"></div>
      <div class="square"></div>
      <div class="square"></div>
    </XyzTransitionGroup>
  </div>
</template>

<style lang="postcss">
.square {
  @apply w-full h-8 bg-black;
}
</style>