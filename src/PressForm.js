import { useRef } from 'react';
import { useJobOrder } from './context/JobContext';

export const pressFormArray = [];

function PressForm({ onCloseModal }) {
  const { formData, setFormData } = useJobOrder();
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const pressData = new FormData(e.target);
    const data = Object.fromEntries(pressData);
    setFormData({
      ...formData,
      pressGsmType: [...formData.pressGsmType, data.pressGsmType],
      pressPrintingSize: [
        ...formData.pressPrintingSize,
        data.pressPrintingSize,
      ],
      pressNoOfPlates: [...formData.pressNoOfPlates, data.pressNoOfPlates],
      pressPrintingQnty: [
        ...formData.pressPrintingQnty,
        data.pressPrintingQnty,
      ],
      pressWastageQnty: [...formData.pressWastageQnty, data.pressWastageQnty],
      pressNoOfUps: [...formData.pressNoOfUps, data.pressNoOfUps],
    });
    pressFormArray.push(data);
    formRef.current.reset();
    onCloseModal();
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit}>
      <label>GSM & Type</label>
      <input
        className="mt-1 w-full rounded border border-gray-300 p-2"
        type="text"
        name="pressGsmType"
      />
      <label>Printing Size</label>
      <input
        className="mt-1 w-full rounded border border-gray-300 p-2"
        type="text"
        name="pressPrintingSize"
      />{' '}
      <label>No. of Plates</label>
      <input
        className="mt-1 w-full rounded border border-gray-300 p-2"
        type="text"
        name="pressNoOfPlates"
      />{' '}
      <label>Printing Qnty</label>
      <input
        className="mt-1 w-full rounded border border-gray-300 p-2"
        type="text"
        name="pressPrintingQnty"
      />{' '}
      <label>Wastage Qnty</label>
      <input
        className="mt-1 w-full rounded border border-gray-300 p-2"
        type="text"
        name="pressWastageQnty"
      />
      <label>No. of UPS</label>
      <input
        className="mt-1 w-full rounded border border-gray-300 p-2"
        type="text"
        name="pressNoOfUps"
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

export default PressForm;
