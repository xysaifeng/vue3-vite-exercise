<template>
  <div>
    <p>child</p>
    <div>
      <el-button type='primary' @click="change">change</el-button>
    </div>
  </div>
</template>

<script setup name="Child">
  const props = defineProps({
    list: {
      type: Array,
      default: []
    }
  })

  const change = () => {
    // props.list.push({a: 1, b: 2})
    // props.list = []
    console.log('props.list: ', props.list);
  }
</script>

<style lang="scss" scoped>

</style>