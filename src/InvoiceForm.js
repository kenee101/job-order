import { useRef } from 'react';
import { useJobOrder } from './context/JobContext';

export const invoiceFormArray = [];

function InvoiceForm({ onCloseModal }) {
  const { formData, setFormData } = useJobOrder();
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const invoiceData = new FormData(e.target);
    const data = Object.fromEntries(invoiceData);
    setFormData({
      ...formData,
      deliveryDate: [...formData.deliveryDate, data.deliveryDate],
      deliveryQnty: [...formData.deliveryQnty, data.deliveryQnty],
    });
    invoiceFormArray.push(data);
    formRef.current.reset();
    onCloseModal();
  };

  return (
    <form id="invoice" ref={formRef} onSubmit={handleSubmit}>
      <label>Date</label>
      <input
        className="mt-1 w-full rounded border border-gray-300 p-2"
        type="date"
        name="deliveryDate"
      />
      <label>Quantity</label>
      <input
        className="mt-1 w-full rounded border border-gray-300 p-2"
        type="text"
        name="deliveryQnty"
      />{' '}
      <div className="mt-8 flex justify-end">
        <button
          type="reset"
          className="mr-5 justify-center rounded bg-blue-900 p-2 text-white"
          onClick={onCloseModal}
        >
          Cancel
        </button>
        <button className="justify-center rounded bg-blue-900 p-2 text-white">
          Add information
        </button>
      </div>
    </form>
  );
}

export default InvoiceForm;
