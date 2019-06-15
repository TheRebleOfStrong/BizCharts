import {Table,Popconfirm,Button} from 'antd';

const ProductList = function (props) {
  let {onDelete,products} = props;
  let columns = [
    {
      title:'Name',
      dataIndex:'name'
    },{
      title:'Actions',
      render: (text,record) => {
        return (
          <Popconfirm
            title='Delete?'
            onConfirm={() => onDelete(record.id)}
          >
            <Button>Delete</Button>
          </Popconfirm>
        )
      }
    }
  ];
  return <Table rowKey={record => record.id} columns={columns} dataSource={products} />;
};

export default ProductList;
