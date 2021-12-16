function myDecorate(value: any) {
  return function (target: any, parmas: any) {
    // console.log(parmas,11) //属性实例
    // console.log(target,22) // 类实例的原型对象
    console.log(11111)
    debugger
    target[parmas] = value
  }
}

// @myDecorate('这是装饰器的参数11')
class myClass {
  @myDecorate('你好我好大家好')
  public name: string | undefined
  constructor() {}
  getData() {
    console.log(this.name)
  }
}
const xxx = new myClass()
xxx.getData()

export { myDecorate }
