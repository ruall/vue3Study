import { reactive } from 'vue'
function useAddStudent(state: { stus: { id: string; name: string; age: string }[] }) {
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

export default useAddStudent
