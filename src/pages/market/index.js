/**
 * title: 商城
 */
import {connect} from 'dva';
import ProductList from '@/components/ProductList';

const Products = function (props) {
  const {dispatch,lists} = props;

  function handleDalete(id) {
    dispatch({
      type:'lists/delete',
      payload: id,
    })
  };

  return (
    <div>
      <h2>List of Products</h2>
      <ProductList onDelete={handleDalete} products={lists} />
    </div>
  );
};

export default connect(({lists}) => ({
  lists,
}))(Products);