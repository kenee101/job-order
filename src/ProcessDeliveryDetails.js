import { useState } from 'react';
import DeliveryForm, { deliveryFormArray } from './DeliveryForm';
import InvoiceForm, { invoiceFormArray } from './InvoiceForm.js';
import Modal from './utils/Modal.js';
import ProcessForm, { processFormArray } from './ProcessForm.js';
import { useJobOrder } from './context/JobContext';
import axios from 'axios';
import { showAlert } from './utils/alerts';

const ProcessDeliveryDetails = () => {
  const [deliveryModal, setDeliveryModal] = useState(false);
  const [invoiceModal, setInvoiceModal] = useState(false);
  const [processModal, setProcessModal] = useState(false);
  const { formData } = useJobOrder();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const data = Object.fromEntries(form);
    const completeData = { ...formData, ...data };
    console.log(completeData);
    const res = await axios({
      method: 'POST',
      url: 'http://127.0.0.1:5000', //login endpoint
      data: completeData,
    });

    if (res.data.status === 'success') {
      showAlert('success', 'Your data was submitted successfully');
      window.location.reload();
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-8xl mx-auto mt-6 rounded border border-gray-300 bg-white p-6"
    >
      <table className="mb-6 w-full">
        <thead>
          <tr>
            <th className="border border-gray-300 p-2">Process</th>
            <th className="border border-gray-300 p-2">Machine</th>
            <th className="border border-gray-300 p-2">Date</th>
            <th className="border border-gray-300 p-2">Shift</th>
            <th className="border border-gray-300 p-2">Total Qnty</th>
            <th className="border border-gray-300 p-2">Finished Qnty</th>
            <th className="border border-gray-300 p-2">Wastage</th>
            <th className="border border-gray-300 p-2">Reason</th>
            <th className="border border-gray-300 p-2">Operator</th>
          </tr>
        </thead>
        <tbody>
          {processFormArray.map((obj) => (
            <tr>
              <td className="border border-gray-300 p-2 text-center">
                {obj.process}
              </td>
              <td className="border border-gray-300 p-2 text-center">
                {obj.machine}
              </td>
              <td className="border border-gray-300 p-2 text-center">
                {obj.processDate}
              </td>
              <td className="border border-gray-300 p-2 text-center">
                {obj.shift}
              </td>
              <td className="border border-gray-300 p-2 text-center">
                {obj.processTotalQnty}
              </td>
              <td className="border border-gray-300 p-2 text-center">
                {obj.finishedQnty}
              </td>
              <td className="border border-gray-300 p-2 text-center">
                {obj.wastage}
              </td>
              <td className="border border-gray-300 p-2 text-center">
                {obj.reason}
              </td>
              <td className="border border-gray-300 p-2 text-center">
                {obj.operator}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div>
        <button
          className="mt-2 justify-center rounded bg-blue-900 p-2 text-white"
          onClick={() => setProcessModal((show) => !show)}
        >
          Add information
        </button>

        {processModal && (
          <Modal onClose={() => setProcessModal(false)}>
            <ProcessForm onCloseModal={() => setProcessModal(false)} />
          </Modal>
        )}
      </div>

      <hr className="mb-10 mt-10"></hr>

      <div className="flex">
        <div className="flex grow items-center bg-black font-bold text-white">
          <span className="-rotate-90">Delivery</span>
        </div>
        <div className="mb-6 table w-full">
          <div className="table-header-group">
            <div className="grid grid-cols-3 grid-rows-2">
              <div className="col-span-3 grid items-center justify-center border border-gray-300">
                Despatch
              </div>
              <div className="table-cell border border-gray-300 p-2 text-center">
                Date
              </div>
              <div className="table-cell border border-gray-300 p-2 text-center">
                Carton Qnty
              </div>
              <div className="table-cell border border-gray-300 p-2 text-center">
                No of Boxes
              </div>
            </div>

            <div className="table-cell border border-gray-300 p-2 text-center">
              Total Qnty
            </div>
            <div className="table-cell border border-gray-300 p-2 text-center">
              Excess Qnty
            </div>
            <div className="table-cell border border-gray-300 p-2 text-center">
              Wastage Qnty
            </div>
            <div className="table-cell border border-gray-300 p-2 text-center">
              Outer Carton Size
            </div>
            <div className="table-cell border border-gray-300 p-2 text-center">
              Remarks
            </div>
          </div>
          <div className="table-row-group">
            {deliveryFormArray.map((obj) => (
              <div className="table-row">
                <div className="grid grid-cols-3">
                  <div className="table-cell border border-gray-300 p-2 text-center">
                    {obj.despatchDate}
                  </div>
                  <div className="table-cell border border-gray-300 p-2 text-center">
                    {obj.cartonQnty}
                  </div>
                  <div className="table-cell border border-gray-300 p-2 text-center">
                    {obj.noOfBoxes}
                  </div>
                </div>

                <div className="table-cell border border-gray-300 p-2 text-center">
                  {obj.deliveryTotalQnty}
                </div>
                <div className="table-cell border border-gray-300 p-2 text-center">
                  {obj.excessQnty}
                </div>
                <div className="table-cell border border-gray-300 p-2 text-center">
                  {obj.deliveryWastageQnty}
                </div>
                <div className="table-cell border border-gray-300 p-2 text-center">
                  {obj.outerCartonSize}
                </div>
                <div className="table-cell border border-gray-300 p-2 text-center">
                  {obj.deliveryRemarks}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div>
        <button
          className="mt-6 justify-center rounded bg-blue-900 p-2 text-white"
          onClick={() => setDeliveryModal((show) => !show)}
        >
          Add information
        </button>

        {deliveryModal && (
          <Modal onClose={() => setDeliveryModal(false)}>
            <DeliveryForm onCloseModal={() => setDeliveryModal(false)} />
          </Modal>
        )}
      </div>

      <hr className="mb-10 mt-10"></hr>

      <div className="flex justify-around">
        <div className="mr-10 flex grow items-center bg-black p-1 font-bold text-white">
          <span className="-rotate-90">Invoice</span>
        </div>
        <h3 className="-ml-16 flex basis-1/2 items-center justify-center text-lg font-bold">
          Delivery Details
        </h3>

        <table className="-ml-10 mb-5 w-full">
          <thead>
            <tr>
              <th className="border border-gray-300 p-2">Date</th>
              <th className="border border-gray-300 p-2"> Quantity</th>
            </tr>
          </thead>
          <tbody>
            {invoiceFormArray.map((obj) => (
              <tr>
                <td className="border border-gray-300 p-2 text-center">
                  {obj.deliveryDate}
                </td>
                <td className="border border-gray-300 p-2 text-center">
                  {obj.deliveryQnty}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div>
        <button
          className="mt-6 justify-center rounded bg-blue-900 p-2 text-white"
          onClick={() => setInvoiceModal((show) => !show)}
        >
          Add information
        </button>

        {invoiceModal && (
          <Modal onClose={() => setInvoiceModal(false)}>
            <InvoiceForm onCloseModal={() => setInvoiceModal(false)} />
          </Modal>
        )}
      </div>

      <div className="mt-5 flex items-center justify-between">
        <p>&copy; by Elijah. All rights reserved</p>
        <button
          className="mt-6 justify-center rounded bg-blue-900 p-2 text-white"
          type="submit"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default ProcessDeliveryDetails;
