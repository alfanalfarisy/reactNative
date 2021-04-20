import React, {useEffect} from 'react';
import {DataTable} from 'react-native-paper';
const itemsPerPage = 1;

const items = [
  {
    key: 1,
    name: 'Page 1',
  },
  // {
  //   key: 2,
  //   name: 'Page 2',
  // },
  // {
  //   key: 3,
  //   name: 'Page 3',
  // },
];

class DataTableRNP extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSet: props.datas,
      page: 0,
    };
  }
  getSortOrder = (prop) => {
    return (a, b) => {
      if (a[prop] > b[prop]) {
        return 1;
      } else if (a[prop] < b[prop]) {
        return -1;
      }
      return 0;
    };
  };
  componentWillReceiveProps(nextProps) {
    this.setState({dataSet: nextProps.datas});
  }
  sortByOrder = (order) => {
    this.setState({dataSet: this.state.dataSet.sort(this.getSortOrder(order))});
    console.log(order);
    console.log(this.state.dataSet.sort(this.getSortOrder(order)));
  };
  render() {
    const {page, dataSet} = this.state;
    const from = page * itemsPerPage;
    const to = (page + 1) * itemsPerPage;

    return (
      <DataTable>
        <DataTable.Header>
          <DataTable.Title onPress={() => this.sortByOrder('material')}>
            Material
          </DataTable.Title>
          <DataTable.Title onPress={() => this.sortByOrder('color')}>
            Color
          </DataTable.Title>
          <DataTable.Title numeric onPress={() => this.sortByOrder('stok')}>
            Stok
          </DataTable.Title>
          <DataTable.Title numeric onPress={() => this.sortByOrder('sold')}>
            Sold
          </DataTable.Title>
          <DataTable.Title numeric onPress={() => this.sortByOrder('batch')}>
            Batch
          </DataTable.Title>
        </DataTable.Header>
        {dataSet.length > 0 &&
          dataSet.map((data) => {
            return (
              <DataTable.Row key={data._id} onPress={() => console.log('OK')}>
                <DataTable.Cell>{data.material}</DataTable.Cell>
                <DataTable.Cell>{data.color}</DataTable.Cell>
                <DataTable.Cell numeric>{data.stok}</DataTable.Cell>
                <DataTable.Cell numeric>{data.sold}</DataTable.Cell>
                <DataTable.Cell numeric>{data.batch}</DataTable.Cell>
              </DataTable.Row>
            );
          })}
        <DataTable.Pagination
          page={page}
          numberOfPages={Math.floor(items.length / itemsPerPage)}
          onPageChange={(page) => this.setState({page})}
          label={`${from + 1}-${to} of ${items.length}`}
        />
      </DataTable>
    );
  }
}
export default DataTableRNP;
