<template>
  <div>
    <el-form
      ref="ruleFormRef"
      :model="ruleForm"
      :rules="rules"
      label-width="120px"
      class="demo-ruleForm"
      :size="formSize"
      status-icon
    >
      <el-form-item label="Activity name" prop="name">
        <el-input v-model="ruleForm.name" />
      </el-form-item>
      <el-form-item label="团队" prop="org">
        <el-cascader v-model="ruleForm.org" :options="options" />
      </el-form-item>
      <el-form-item label="Activity zone" prop="region">
        <el-select v-model="ruleForm.region" placeholder="Activity zone">
          <!-- <el-option
            v-for="e in formsConfig[0]?.list"
            :label="e.label"
            :value="e.value"
          /> -->
          <Option :list="formsConfig[0]?.list" />
          <!-- <el-option label="Zone one" value="shanghai" /> -->
          <!-- <el-option label="Zone two" value="beijing" /> -->
        </el-select>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submitForm(ruleFormRef)">Create</el-button>
        <el-button @click="resetForm(ruleFormRef)">Reset</el-button>
      </el-form-item>
    </el-form>
    <div>23</div>
  </div>
</template>

<script setup>
import Option from './Option.vue'

const formSize = ref('default')
const ruleFormRef = ref()
const ruleForm = reactive({
  name: 'Hello',
  region: '',
  org: []
  // date2: "",
  // delivery: false,
  // type: [],
  // resource: "",
  // desc: "",
})

const formsConfig = ref([])

onMounted(() => {
  formsConfig.value = genFormsConfig()
  setTimeout(() => {
    reloadList(formsConfig.value)
  }, 3000)
})

const map = {
  time: [
    {
      value: 1,
      label: 'aa'
    },
    {
      value: 2,
      label: 'bb'
    }
  ]
}
function reloadList(config) {
  config.forEach((e) => {
    if (e.list && !e.list.length) {
      console.log(e, '======e')
      e.list = map[e.key]
      console.log('e.list: ', e.list)
    }
  })
}

function genFormsConfig() {
  return [
    {
      key: 'time',
      label: '时间',
      list: []
    }
  ]
}

const rules = reactive({
  name: [
    { required: true, message: 'Please input Activity name', trigger: 'blur' },
    { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' }
  ],
  region: [
    {
      required: true,
      message: 'Please select Activity zone',
      trigger: 'change'
    }
  ],
  org: [
    {
      type: 'array',
      required: true,
      message: 'Please select Activity count',
      trigger: 'change'
    }
  ]
})

const submitForm = async (formEl) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      console.log('submit!', ruleForm)
    } else {
      console.log('error submit!', fields)
    }
  })
}

const resetForm = (formEl) => {
  if (!formEl) return
  formEl.resetFields()
}

const options = [
  {
    value: 'guide',
    label: 'Guide',
    children: [
      {
        value: 'disciplines',
        label: 'Disciplines',
        children: [
          {
            value: 'consistency',
            label: 'Consistency'
          },
          {
            value: 'feedback',
            label: 'Feedback'
          },
          {
            value: 'efficiency',
            label: 'Efficiency'
          },
          {
            value: 'controllability',
            label: 'Controllability'
          }
        ]
      },
      {
        value: 'navigation',
        label: 'Navigation',
        children: [
          {
            value: 'side nav',
            label: 'Side Navigation'
          },
          {
            value: 'top nav',
            label: 'Top Navigation'
          }
        ]
      }
    ]
  }
]
</script>
