import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts, deleteProduct, createProduct, updateProduct } from '../slice';
import ProductTable from '../ui/organisms/ProductTable';
import ProductModal from '../ui/organisms/ProductModal';

export default function ProductsListPage() {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.products);
  const [showModal, setShowModal] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const [modalLoading, setModalLoading] = useState(false);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleAdd = () => {
    setEditingProduct(null);
    setShowModal(true);
  };

  const handleEdit = (product) => {
    setEditingProduct(product);
    setShowModal(true);
  };

  const handleDelete = (id) => {
    if (window.confirm('Delete this product?')) {
      dispatch(deleteProduct(id));
    }
  };

  const handleModalClose = () => {
    setShowModal(false);
    setEditingProduct(null);
    setModalLoading(false);
  };

  const handleModalSubmit = async (form) => {
    setModalLoading(true);
    if (editingProduct) {
      await dispatch(updateProduct({ id: editingProduct._id, data: form }));
    } else {
      await dispatch(createProduct(form));
    }
    setModalLoading(false);
    setShowModal(false);
    setEditingProduct(null);
  };

  if (loading) return <div className="p-8 text-center">Loading...</div>;
  if (error) return <div className="p-8 text-center text-red-600">{error}</div>;

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Products</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded" onClick={handleAdd}>Add Product</button>
      </div>
      <ProductTable products={products} onEdit={handleEdit} onDelete={handleDelete} />
      <ProductModal
        show={showModal}
        onClose={handleModalClose}
        onSubmit={handleModalSubmit}
        product={editingProduct}
        loading={modalLoading}
      />
    </div>
  );
}
