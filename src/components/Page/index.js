import MessageToggle from '@/components/MessageToggle'
import List from '@/components/List'

export default {
  name: 'Page',
  components: {
    MessageToggle,
    List
  },
  methods: {
    renderList () {
      return <list items={['list item 1', 'listen item 2']} />
    }
  },
  render (h) {
    return (
      <div>
        <MessageToggle />
        { this.renderList() }
      </div>
    )
  }
}
