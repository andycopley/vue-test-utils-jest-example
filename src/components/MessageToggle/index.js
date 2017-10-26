import Message from '@/components/Message'

export default {
  name: 'MessageToggle',
  data: () => ({
    msg: null
  }),
  methods: {
    toggleMessage () {
      this.msg = this.msg === 'message' ? 'toggled message' : 'message'
    }
  },
  components: {
    Message
  },
  render () {
    return (
      <div>
        <message msg={this.msg}></message>
        <button id="toggle-message" onClick={this.toggleMessage}>
          Change message
        </button>
      </div>
    )
  }
}
