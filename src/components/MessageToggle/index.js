import Message from '@/components/Message'

export default {
  name: 'message-toggle',
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
        <Message msg={this.msg} />
        <button id="toggle-message" onClick={this.toggleMessage}>
          Change message
        </button>
      </div>
    )
  }
}
