
export const dva = {
  config: {
    onError(err) {
      err.preventDefault();
      console.error(err.message);
    },
    initialState: {
      // products: [{name:'dva',id:1},{name:'antd',id:2}],
      // lists:[{name:'王正',id:1001},{name:'曹伟',id:1002}]
    },
  },
};
