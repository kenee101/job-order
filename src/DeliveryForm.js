import { useRef } from 'react';
import { useJobOrder } from './context/JobContext';

export const deliveryFormArray = [];

function DeliveryForm({ onCloseModal }) {
  const { formData, setFormData } = useJobOrder();
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const deliveryData = new FormData(e.target);
    const data = Object.fromEntries(deliveryData);
    setFormData({
      ...formData,
      despatchDate: [...formData.despatchDate, data.despatchDate],
      cartonQnty: [...formData.cartonQnty, data.cartonQnty],
      noOfBoxes: [...formData.noOfBoxes, data.noOfBoxes],
      deliveryTotalQnty: [
        ...formData.deliveryTotalQnty,
        data.deliveryTotalQnty,
      ],
      excessQnty: [...formData.excessQnty, data.excessQnty],
      deliveryWastageQnty: [
        ...formData.deliveryWastageQnty,
        data.deliveryWastageQnty,
      ],
      outerCartonSize: [...formData.outerCartonSize, data.outerCartonSize],
      deliveryRemarks: [...formData.deliveryRemarks, data.deliveryRemarks],
    });
    deliveryFormArray.push(data);
    formRef.current.reset();
    onCloseModal();
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit}>
      <label>Date</label>
      <input
        className="mt-1 w-full rounded border border-gray-300 p-2"
        type="date"
        name="despatchDate"
      />
      <label>Carton Qnty</label>
      <input
        className="mt-1 w-full rounded border border-gray-300 p-2"
        type="text"
        name="cartonQnty"
      />{' '}
      <label>No. of Boxes</label>
      <input
        className="mt-1 w-full rounded border border-gray-300 p-2"
        type="text"
        name="noOfBoxes"
      />{' '}
      <label>Total Qnty</label>
      <input
        className="mt-1 w-full rounded border border-gray-300 p-2"
        type="text"
        name="deliveryTotalQnty"
      />{' '}
      <label>Excess Qnty</label>
      <input
        className="mt-1 w-full rounded border border-gray-300 p-2"
        type="text"
        name="excessQnty"
      />
      <label>Wastage Qnty</label>
      <input
        className="mt-1 w-full rounded border border-gray-300 p-2"
        type="text"
        name="deliveryWastageQnty"
      />
      <label>Outer Carton Size</label>
      <input
        className="mt-1 w-full rounded border border-gray-300 p-2"
        type="text"
        name="outerCartonSize"
      />
      <label>Remarks</label>
      <input
        className="mt-1 w-full rounded border border-gray-300 p-2"
        type="text"
        name="deliveryRemarks"
      />
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

export default DeliveryForm;
