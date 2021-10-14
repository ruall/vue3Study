import { reactive } from 'vue'
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
}

export default useRemoveStudent
