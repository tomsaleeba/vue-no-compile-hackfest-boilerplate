const App = {
  name: 'App',
  template: `
    <div>
      <h1>{{blah}} World</h1>
    </div>
  `,
  data() {
    return {
      blah: 'Hello',
    }
  },
}

new Vue({
  render: h => h(App),
}).$mount(`#app`)
