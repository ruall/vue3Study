<template>
  <div>
    <ul>
      <li v-for="(stu, index) in state.stus" :key="index" @click="removeStu(index)">{{ stu }}</li>
    </ul>
    <form>
      <input type="text" v-model="state2.stu.id" />
      <input type="text" v-model="state2.stu.name" />
      <input type="text" v-model="state2.stu.age" />
      <input type="submit" @click="addStudent" />
    </form>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive } from 'vue'
import useAddStudent from './add'
import useRemoveStudent from './rem'

export default defineComponent({
  name: '',
  setup() {
    const { state, removeStu } = useRemoveStudent()
    const { state2, addStudent } = useAddStudent(state)
    return {
      state,
      state2,
      removeStu,
      addStudent
    }
  }
})

/* function useAddStudent(state: { stus: { id: string; name: string; age: string }[] }) {
  const state2 = reactive({
    stu: {
      id: '',
      name: '',
      age: ''
    }
  })
  function addStudent(e: { preventDefault: () => void }) {
    e.preventDefault()
    const stu = Object.assign({}, state2.stu)
    state.stus.push(stu)
    state2.stu.id = ''
    state2.stu.name = ''
    state2.stu.age = ''
  }
  return {
    state2,
    addStudent
  }
}

function useRemoveStudent() {
  const state = reactive({
    stus: [
      {
        id: 1,
        name: '张三',
        age: 18
      },
      {
        id: 2,
        name: '李四',
        age: 28
      },
      {
        id: 3,
        name: '王五',
        age: 38
      }
    ]
  })
  function removeStu(i: number) {
    state.stus.splice(i, 1)
  }
  return { state, removeStu }
} */
</script>
