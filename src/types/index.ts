// 接口响应通过格式
export interface HttpResponse {
  status: number
  statusText: string
  data: {
    code: number
    desc: string
    [key: string]: any
  }
}
