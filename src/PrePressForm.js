import { useRef } from 'react';
import { useJobOrder } from './context/JobContext';

export const prePressFormArray = [];

function PressForm({ onCloseModal }) {
  const { formData, setFormData } = useJobOrder();
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const prePressData = new FormData(e.target);
    const data = Object.fromEntries(prePressData);
    setFormData({
      ...formData,
      jobElements: [...formData.jobElements, data.jobElements],
      planningSize: [...formData.planningSize, data.planningSize],
      noOfUps: [...formData.noOfUps, data.noOfUps],
      scheme: [...formData.scheme, data.scheme],
      noOfPlates: [...formData.noOfPlates, data.noOfPlates],
    });
    prePressFormArray.push(data);
    formRef.current.reset();
    onCloseModal();
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit}>
      <label>Job Elements</label>
      <input
        className="mt-1 w-full rounded border border-gray-300 p-2"
        type="text"
        name="jobElements"
      />
      <label>Planning Size</label>
      <input
        className="mt-1 w-full rounded border border-gray-300 p-2"
        type="text"
        name="planningSize"
      />{' '}
      <label>No. of UPS</label>
      <input
        className="mt-1 w-full rounded border border-gray-300 p-2"
        type="text"
        name="noOfUps"
      />{' '}
      <label>Scheme</label>
      <input
        className="mt-1 w-full rounded border border-gray-300 p-2"
        type="text"
        name="scheme"
      />{' '}
      <label>No. of Plates</label>
      <input
        className="mt-1 w-full rounded border border-gray-300 p-2"
        type="text"
        name="noOfPlates"
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
