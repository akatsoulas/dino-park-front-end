<template>
  <div class="meta-list">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'MetaList',
};
</script>

<style>
  .meta-list {
    margin: 1em 0;
    padding: 1em 0;
    border-top: 1px solid var(--gray-30);
    border-bottom: 1px solid var(--gray-30);
    overflow: hidden;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
</style>
