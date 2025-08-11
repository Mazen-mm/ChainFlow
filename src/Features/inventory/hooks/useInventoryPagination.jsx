
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchInventory } from '../slice';

export function useInventoryPagination(rows = 9) {
  const dispatch = useDispatch();
  const { inventory, loading, error, pagination } = useSelector(state => state.inventory);
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(fetchInventory({ page, limit: rows }));
  }, [dispatch, page, rows]);

  const total = pagination?.total || 0;
  const totalPages = Math.ceil(total / rows);
  const startIndex = (page - 1) * rows;
  const currentData = inventory || [];

  return { currentData, page, totalPages, total, startIndex, setPage, loading, error };
}



