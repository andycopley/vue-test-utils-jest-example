export default {
  name: 'List',
  props: [
    'items'
  ],
  methods: {
    renderList () {
      return this.items.map((item) => {
        return <li>{item}</li>
      })
    }
  },
  render () {
    return (
      <ul>
        { this.renderList() }
      </ul>
    )
  }
}
