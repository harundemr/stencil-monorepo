import { Component, Prop, State, h } from '@stencil/core';

@Component({
  tag: 'my-table',
  styleUrl: 'my-table.scss',
  shadow: true,
})
export class MyTable {
  @Prop() columns: any[];
  @Prop() data: any[];

  @State() sortedData: any[];
  @State() sortKey: string;
  @State() sortDirection: 'asc' | 'desc' = 'asc';
  @State() filters: { [key: string]: string } = {};

  componentWillLoad() {
    if (!Array.isArray(this.data)) {
      console.error('Data is not an array');
    } else {
      this.sortedData = [...this.data];
    }
  }

  sortData(key: string) {
    const direction = this.sortKey === key && this.sortDirection === 'asc' ? 'desc' : 'asc';
    this.sortKey = key;
    this.sortDirection = direction;

    this.applyFiltersAndSort();
  }

  handleFilterChange(event, key: string) {
    const value = event.target.value;
    this.filters = { ...this.filters, [key]: value };
    this.applyFiltersAndSort();
  }

  applyFiltersAndSort() {
    let filteredData = [...this.data];

    Object.keys(this.filters).forEach(key => {
      const value = this.filters[key].toLowerCase();
      if (value) {
        filteredData = filteredData?.filter(row => String(row[key]).toLowerCase().includes(value));
      }
    });

    if (this.sortKey) {
      filteredData?.sort((a, b) => {
        if (a[this.sortKey] < b[this.sortKey]) return this.sortDirection === 'asc' ? -1 : 1;
        if (a[this.sortKey] > b[this.sortKey]) return this.sortDirection === 'asc' ? 1 : -1;
        return 0;
      });
    }

    this.sortedData = filteredData;
  }

  render() {
    if (!Array.isArray(this.data) || this.data.length === 0) {
      return <div>No data available</div>;
    }

    return (
      <div class="table-container">
        <table>
          <thead>
            <tr class="hoverable">
              {this.columns?.map(column => (
                <th onClick={() => this.sortData(column?.key)}>
                  {column.label} {this.sortKey === column?.key ? (this.sortDirection === 'asc' ? '↑' : '↓') : ''}
                </th>
              ))}
            </tr>
            <tr>
              {this.columns?.map(column => (
                <th>
                  <input type="text" placeholder={`Filter by ${column?.label}`} onInput={event => this.handleFilterChange(event, column?.key)} />
                </th>
              ))}
            </tr>
          </thead>
          <tbody>{this.sortedData?.map(row => <tr>{this.columns?.map(column => <td>{row[column?.key]}</td>)}</tr>)}</tbody>
        </table>
      </div>
    );
  }
}
