import { useState } from 'react';
import { inventoryData } from '../utils/inventoryData';

export function useInventoryPagination(rows = 9) {
  const [page, setPage] = useState(1);
  const total = inventoryData.length;
  const totalPages = Math.ceil(total / rows);
  const startIndex = (page - 1) * rows;
  const currentData = inventoryData.slice(startIndex, startIndex + rows);
  return { currentData , page, totalPages, total, startIndex, setPage };
}



