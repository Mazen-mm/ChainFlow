
import { StatusBadge } from '../atoms/StatusBadge';
import CheckBoxInput from './../../../../Shared/Components/Atoms/CheckBoxInput';
import { useState } from 'react';

export function InventoryTable({ data, onEdit, onDelete, onView }) {
  const [select, setSelect] = useState([]);

  const SelectItem = (itemId) => {
    setSelect(prev => prev.includes(itemId) ? prev.filter(id => id !== itemId) : [...prev, itemId]);
  };
  const SelectAll = () => {
    setSelect(prev => prev.length === data.length ? [] : data.map(item => item._id));
  };

  return (
    <div className="table-responsive rounded-3 overflow-auto border">
      <table className="table table-hover">
        <thead className="table-primary">
          <tr>
            <th>
              <CheckBoxInput change={SelectAll} checked={select.length === data.length && data.length > 0} />
            </th>
            <th>Product</th>
            <th>On Hand</th>
            <th>Reserved</th>
            <th>Min Threshold</th>
            <th>Status</th>
            <th>Location</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item._id}>
              <td>
                <CheckBoxInput change={() => SelectItem(item._id)} checked={select.includes(item._id)} />
              </td>
              <td>{item.product?.productName || ''}</td>
              <td>{item.onHand}</td>
              <td>{item.reserved}</td>
              <td>{item.minimumThreshold}</td>
              <td><StatusBadge status={item.status} /></td>
              <td>{item.location?.locationName || ''}</td>
              <td>
                <button className="btn btn-sm btn-outline-info me-2" onClick={() => onView(item)}>View</button>
                <button className="btn btn-sm btn-outline-primary me-2" onClick={() => onEdit(item)}>Edit</button>
                <button className="btn btn-sm btn-outline-danger" onClick={() => onDelete(item)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}


