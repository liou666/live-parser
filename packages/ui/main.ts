import { render } from '@temir/core'
import { h } from 'vue'
import App from './App.vue'

const start = async (roomId: string) => {
  const NewApp = {
    render() {
      return h(App, {
        roomId,
      })
    },
  }
  render(NewApp)
}

export default start
