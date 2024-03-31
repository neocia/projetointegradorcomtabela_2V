import { Table } from 'rsuite';
import 'rsuite/Table/styles/index.css';
import { Table, Button } from 'rsuite';
import { mockUsers } from './mock';

const { Column, HeaderCell, Cell } = Table;
const data = mockUsers(20);

const App = () => {
  return (
    <Table
      height={400}
      data={data}
      onRowClick={rowData => {
        console.log(rowData);
      }}
    >
      <Column width={60} align="center" fixed>
        <HeaderCell>Id</HeaderCell>
        <Cell dataKey="id" />
      </Column>

      <Column width={150}>
        <HeaderCell>Nome Completo</HeaderCell>
        <Cell dataKey="NomeCompleto" />
      </Column>

      <Column width={150}>
        <HeaderCell>RG</HeaderCell>
        <Cell dataKey="RG" />
      </Column>

      <Column width={300}>
        <HeaderCell>Email</HeaderCell>
        <Cell dataKey="email" />
      </Column>

      <Column width={100}>
        <HeaderCell>Categoria</HeaderCell>
        <Cell dataKey="Categoria" />
      </Column>

      <Column width={150}>
        <HeaderCell>Cargo</HeaderCell>
        <Cell dataKey="cargo" />
      </Column>

      <Column width={80} fixed="right">
        <HeaderCell>...</HeaderCell>

        <Cell style={{ padding: '6px' }}>
          {rowData => (
            <Button appearance="link" onClick={() => alert(`id:${rowData.id}`)}>
              Edit
            </Button>
          )}
        </Cell>
      </Column>
    </Table>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));

