import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {
  Table,
  TableWrapper,
  Row,
  Rows,
  Col,
} from 'react-native-table-component';

export default class TeamsTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHead: ['', 'Azul', 'Vermelho', 'Total'],
      tableTitle: ['Passa ou Repassa', 'Torta na Cara', 'Imagem e ação'],
      tableData: [
        ['7', '13', '20'],
        ['15', '5', '20'],
        ['3', '5', '8'],
      ],
    };
  }

  render() {
    const state = this.state;
    return (
      <View style={styles.container}>
        <Text style={styles.header}> Montande dos Times</Text>
        <Table borderStyle={{borderWidth: 1}}>
          <Row
            data={state.tableHead}
            flexArr={[2, 1, 1, 1]}
            style={styles.head}
            textStyle={styles.text}
          />
          <TableWrapper style={styles.wrapper}>
            <Col
              data={state.tableTitle}
              style={styles.title}
              heightArr={[28, 28]}
              textStyle={styles.text}
            />
            <Rows
              data={state.tableData}
              flexArr={[1, 1, 1]}
              style={styles.row}
              textStyle={styles.text}
            />
          </TableWrapper>
        </Table>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    fontSize: 30,
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  container: {
    flex: 3,
    padding: 16,
    marginHorizontal: 5,
    marginTop: 5,
    backgroundColor: '#fff',
    borderWidth: 3,
    borderRadius: 9,
    justifyContent: 'center',
  },
  head: {height: 40, backgroundColor: '#f1f8ff'},
  wrapper: {flexDirection: 'row'},
  title: {flex: 2, backgroundColor: '#f6f8fa'},
  row: {height: 28},
  text: {textAlign: 'center'},
});
