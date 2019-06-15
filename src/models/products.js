export default {
  namespace:'lists',
  state: [{name:'王正',id:1001},{name:'曹伟',id:1002}],
  reducers: {
    delete (state,{payload: id}) {
      return state.filter( item => item.id !== id);
    },
  }
}