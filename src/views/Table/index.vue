<template>
  <div>
    <el-table ref="tref" border stripe :data="tableData" height="250" style="width: 40%">
      <el-table-column prop="date" label="Date" />
      <el-table-column prop="name" label="Name" />
      <el-table-column prop="address" label="Address" />
    </el-table>
  </div>
</template>

<!-- https://juejin.cn/post/7105241798934528007?searchId=20230824172026C3F5429ADEE487E5E6D9 -->
<script setup name="Table">
const tableData = [
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 178, Grove St, Los Angeles'
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 179, Grove St, Los Angeles'
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 180, Grove St, Los Angeles'
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 181, Grove St, Los Angeles'
  },
  {
    date: '2016-05-08',
    name: 'Tom',
    address: 'No. 182, Grove St, Los Angeles'
  },
  {
    date: '2016-05-06',
    name: 'Tom',
    address: 'No. 183, Grove St, Los Angeles'
  },
  {
    date: '2016-05-07',
    name: 'Tom',
    address: 'No. 184, Grove St, Los Angeles'
  },
  {
    date: '2016-05-17',
    name: 'Tom',
    address: 'No. 185, Grove St, Los Angeles'
  },
  {
    date: '2016-05-27',
    name: 'Tom',
    address: 'No. 186, Grove St, Los Angeles'
  },
  {
    date: '2016-05-37',
    name: 'Tom',
    address: 'No. 187, Grove St, Los Angeles'
  },
  {
    date: '2016-05-47',
    name: 'Tom',
    address: 'No. 188, Grove St, Los Angeles'
  },
  {
    date: '2016-05-57',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
  },
  {
    date: '2016-05-57',
    name: 'Tom',
    address: 'No. 190'
  },
  {
    date: '2016-05-57',
    name: 'Tom',
    address: 'No. 191'
  },
  {
    date: '2016-05-57',
    name: 'Tom',
    address: 'No. 192'
  },
  {
    date: '2016-05-57',
    name: 'Tom',
    address: 'No. 193'
  },
  {
    date: '2016-05-57',
    name: 'Tom',
    address: 'No. 194'
  },
  {
    date: '2016-05-57',
    name: 'Tom',
    address: 'No. 195'
  },
  {
    date: '2016-05-57',
    name: 'Tom',
    address: 'No. 196'
  },
  {
    date: '2016-05-57',
    name: 'Tom',
    address: 'No. 197'
  },
  {
    date: '2016-05-57',
    name: 'Tom',
    address: 'No. 198'
  },
  {
    date: '2016-05-57',
    name: 'Tom',
    address: 'No. 199'
  },
  {
    date: '2016-05-57',
    name: 'Tom',
    address: 'No. 200'
  },
  {
    date: '2016-05-57',
    name: 'Tom',
    address: 'No. 201'
  },
  {
    date: '2016-05-57',
    name: 'Tom',
    address: 'No. 202'
  }
]

const tref = ref()
const RAF = window.requestAnimationFrame
const CAF = window.cancelAnimationFrame
let rafId = null
let step = 0

onMounted(async () => {
  const scrollEl = tref.value.scrollBarRef.wrapRef
  scrollFn(scrollEl)

  scrollEl.addEventListener('mouseenter', () => {
    CAF(rafId)
  })
  scrollEl.addEventListener('mouseleave', () => {
    rafId = RAF(scrollFn.bind(null, scrollEl))
  })
})

const scrollFn = async (el) => {
  step += 2
  el.scrollTo({
    top: step
  })
  await nextTick()
  if (Math.ceil(el.clientHeight + el.scrollTop) >= el.scrollHeight) {
    step = 0

    CAF(rafId)
    setTimeout(() => {
      el.scrollTo({
        top: step,
        behavior: 'smooth'
      })
      setTimeout(() => {
        rafId = RAF(scrollFn.bind(null, el))
      }, 2000)
    }, 2000)
    return
  }
  rafId = RAF(scrollFn.bind(null, el))
}
</script>

<style lang="scss" scoped></style>
