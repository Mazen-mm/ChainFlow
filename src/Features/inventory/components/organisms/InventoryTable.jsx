import { StatusBadge } from '../atoms/StatusBadge';
import CheckBoxInput from './../../../../Shared/Components/Atoms/CheckBoxInput';
import { useState } from 'react';

export function InventoryTable({ data }) {

  const [select, setSelect] = useState([]);

  // Handle select item
  const SelectItem = (itemId) => {
    setSelect( prev => prev.includes(itemId) ? prev.filter(id => id !== itemId) : [...prev, itemId] );
  };

  // Handle select all items
  const SelectAll = () => {
    setSelect(prev => prev.length === data.length ? [] : data.map(item => item.id) );
  };


  return (
    <div className="table-responsive rounded-3 overflow-auto border">
      <table className="table table-hover">
        <thead className="table-primary">
          <tr>
            <th>
              <CheckBoxInput change={SelectAll} checked={select.length === data.length && data.length > 0} />
            </th>
            <th>Item code</th>
            <th>Item name</th>
            <th>Serial Number</th>
            <th>Category</th>
            <th>Stock</th>
            <th>Unit</th>
            <th>Unit Price</th>
            <th>Status</th>
            <th>Location</th>
            <th>Last updated</th>
          </tr>
        </thead>

        <tbody>
          {data.map((item) => <tr key={item.id}>
              <td>
                <CheckBoxInput change={() => SelectItem(item.id)} checked={select.includes(item.id)} />
              </td>
              <td>{item.code}</td>
              <td>{item.name}</td>
              <td>{item.serial}</td>
              <td>{item.category}</td>
              <td>{item.stock}</td>
              <td>{item.unit}</td>
              <td>{item.price}</td>
              <td><StatusBadge status={item.status} /></td>
              <td>{item.location}</td>
              <td>{item.updated}</td>
              </tr>
            )}
        </tbody>
      </table>
    </div>
  );
}


