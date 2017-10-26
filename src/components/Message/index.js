export default {
  name: 'Message',
  functional: true,
  props: ['msg'],
  render: (h, {props}) => h('h1', props.msg || 'default message')
}
