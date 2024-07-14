import { useRef } from 'react';
import { useJobOrder } from './context/JobContext';

export const processFormArray = [];

function ProcessForm({ onCloseModal }) {
  const { formData, setFormData } = useJobOrder();
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const prePressData = new FormData(e.target);
    const data = Object.fromEntries(prePressData);
    setFormData({
      ...formData,
      process: [...formData.process, data.process],
      machine: [...formData.machine, data.machine],
      processDate: [...formData.processDate, data.processDate],
      shift: [...formData.shift, data.shift],
      processTotalQnty: [...formData.processTotalQnty, data.processTotalQnty],
      finishedQnty: [...formData.finishedQnty, data.finishedQnty],
      wastage: [...formData.wastage, data.wastage],
      reason: [...formData.reason, data.reason],
      operator: [...formData.scheme, data.scheme],
    });
    processFormArray.push(data);
    formRef.current.reset();
    onCloseModal();
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit}>
      <label>Process</label>
      <select
        name="process"
        defaultValue="Priniting Back Side"
        className="flex w-full grow rounded-md p-2 outline-none"
      >
        {[
          'Printing Back Side',
          'Printing Front Side',
          'UV / Lamination',
          'Foiling',
          'Emboss / Deboss',
          'Die Cutting',
          'Erecting',
          'W.Pasting',
          'Glueing',
        ].map((item) => (
          <option value={item} key={item}>
            {item}
          </option>
        ))}
      </select>
      <label>Machine</label>
      <input
        className="mt-1 w-full rounded border border-gray-300 p-2"
        type="text"
        name="machine"
      />
      <label>Date</label>
      <input
        className="mt-1 w-full rounded border border-gray-300 p-2"
        type="date"
        name="processDate"
      />{' '}
      <label>Shift</label>
      <input
        className="mt-1 w-full rounded border border-gray-300 p-2"
        type="text"
        name="shift"
      />{' '}
      <label>Total Qnty</label>
      <input
        className="mt-1 w-full rounded border border-gray-300 p-2"
        type="text"
        name="processTotalQnty"
      />{' '}
      <label>Finished Qnty</label>
      <input
        className="mt-1 w-full rounded border border-gray-300 p-2"
        type="text"
        name="finishedQnty"
      />
      <label>Wastage</label>
      <input
        className="mt-1 w-full rounded border border-gray-300 p-2"
        type="text"
        name="wastage"
      />
      <label>Reason</label>
      <input
        className="mt-1 w-full rounded border border-gray-300 p-2"
        type="text"
        name="reason"
      />
      <label>Operator</label>
      <input
        className="mt-1 w-full rounded border border-gray-300 p-2"
        type="text"
        name="operator"
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

export default ProcessForm;
