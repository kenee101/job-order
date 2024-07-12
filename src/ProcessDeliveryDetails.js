import { useJobOrder } from './JobContext';

const ProcessDeliveryDetails = () => {
  const {formData, handleInputChange} = useJobOrder();

  return (
    <div className="mx-auto mt-6 max-w-4xl rounded border border-gray-300 bg-white p-6">
      <table className="mb-6 w-full">
        <thead>
          <tr>
            <th className="border border-gray-300 p-2">Process</th>
            <th className="border border-gray-300 p-2">Machine</th>
            <th className="border border-gray-300 p-2">Date</th>
            <th className="border border-gray-300 p-2">Shift</th>
            <th className="border border-gray-300 p-2">Total Qty</th>
            <th className="border border-gray-300 p-2">Finished Qty</th>
            <th className="border border-gray-300 p-2">Wastage</th>
            <th className="border border-gray-300 p-2">Reason</th>
            <th className="border border-gray-300 p-2">Operator</th>
          </tr>
        </thead>
        <tbody>
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
            <tr>
              <td className="border border-gray-300 p-2">{item}</td>
              <td className="border border-gray-300 p-2">
                <input
                  className="mt-1 w-full rounded border border-gray-300 p-2"
                  type="text"
                  name="machine"
                  value={formData.process.item}
                  onChange={handleInputChange}
                />
              </td>
              <td className="border border-gray-300 p-2">
                <input
                  className="mt-1 w-full rounded border border-gray-300 p-2"
                  type="date"
                  name="date"
                  value={formData.process.item}
                  onChange={handleInputChange}
                />
              </td>
              <td className="border border-gray-300 p-2">
                <input
                  className="mt-1 w-full rounded border border-gray-300 p-2"
                  type="text"
                  name="shift"
                  value={formData.process.item}
                  onChange={handleInputChange}
                />
              </td>
              <td className="border border-gray-300 p-2">
                <input
                  className="mt-1 w-full rounded border border-gray-300 p-2"
                  type="text"
                  name="totalQty"
                  value={formData.process.item}
                  onChange={handleInputChange}
                />
              </td>
              <td className="border border-gray-300 p-2">
                <input
                  className="mt-1 w-full rounded border border-gray-300 p-2"
                  type="text"
                  name="finishedQty"
                  value={formData.process.item}
                  onChange={handleInputChange}
                />
              </td>
              <td className="border border-gray-300 p-2">
                <input
                  className="mt-1 w-full rounded border border-gray-300 p-2"
                  type="text"
                  name="wastage"
                  value={formData.process.item}
                  onChange={handleInputChange}
                />
              </td>
              <td className="border border-gray-300 p-2">
                <input
                  className="mt-1 w-full rounded border border-gray-300 p-2"
                  type="text"
                  name="reason"
                  value={formData.process.item}
                  onChange={handleInputChange}
                />
              </td>
               <td className="border border-gray-300 p-2">
                <input
                  className="mt-1 w-full rounded border border-gray-300 p-2"
                  type="text"
                  name='operator'
                  value={formData.process.item}
                  onChange={handleInputChange}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <hr className="mb-10 mt-10"></hr>

      <div className="flex">
        <div className="flex h-[300px] items-center bg-black font-bold text-white">
          <span className="-rotate-90">Delivery</span>
        </div>
        <table className="mb-6 w-full ">
          <thead>
            <tr>
              <div className="grid grid-cols-3 grid-rows-2">
                <div className="col-span-3 grid items-center justify-center border border-gray-300">
                  Despatch
                </div>
                <div className="border border-gray-300 p-2">Date</div>
                <div className="border border-gray-300 p-2">Carton Qty</div>
                <div className="border border-gray-300 p-2">No of Boxes</div>
              </div>

              <th className="border border-gray-300 p-2">Total Qty</th>
              <th className="border border-gray-300 p-2">Excess Qty</th>
              <th className="border border-gray-300 p-2">Wastage Qty</th>
              <th className="border border-gray-300 p-2">Outer Carton Size</th>
              <th className="border border-gray-300 p-2">Remarks</th>
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: 9 }, (_, i) => i + 1).map((el) => (
              <tr>
                <div className="grid grid-cols-3">
                  <div className="border border-gray-300 p-2"><input
                  className="mt-1 w-full rounded border border-gray-300 p-2"
                  type="date"
                  name='despatchDate'
                  value={formData.despatch.date}
                  onChange={handleInputChange}
                /></div>
                  <div className="border border-gray-300 p-2"><input
                  className="mt-1 w-full rounded border border-gray-300 p-2"
                  type="text"
                  name='cartonQty'
                  value={formData.despatch.cartonQty}
                  onChange={handleInputChange}
                /></div>
                  <div className="border border-gray-300 p-2"><input
                  className="mt-1 w-full rounded border border-gray-300 p-2"
                  type="text"
                  name='noOfBoxes'
                  value={formData.despatch.noOfBoxes}
                  onChange={handleInputChange}
                /></div>
                </div>

                <td className="border border-gray-300 p-2"><input
                  className="mt-1 w-full rounded border border-gray-300 p-2"
                  type="text"
                  name='totalQty'
                  value={formData.despatch.totalQty}
                  onChange={handleInputChange}
                /></td>
                <td className="border border-gray-300 p-2"><input
                  className="mt-1 w-full rounded border border-gray-300 p-2"
                  type="text"
                  name='excessQty'
                  value={formData.despatch.excessQty}
                  onChange={handleInputChange}
                /></td>
                <td className="border border-gray-300 p-2"><input
                  className="mt-1 w-full rounded border border-gray-300 p-2"
                  type="text"
                  name='wastageQty'
                  value={formData.despatch.wastageQty}
                  onChange={handleInputChange}
                /></td>
                <td className="border border-gray-300 p-2"><input
                  className="mt-1 w-full rounded border border-gray-300 p-2"
                  type="text"
                  name='outerCartonSize'
                  value={formData.despatch.outerCartonSize}
                  onChange={handleInputChange}
                /></td>
                <td className="border border-gray-300 p-2"><input
                  className="mt-1 w-full rounded border border-gray-300 p-2"
                  type="text"
                  name='remarks'
                  value={formData.despatch.remarks}
                  onChange={handleInputChange}
                /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-around">
        <div className="mr-10 flex items-center bg-black p-1 font-bold text-white">
          <span className="-rotate-90">Invoice</span>
        </div>
        <h3 className="flex basis-1/2 items-center text-lg font-bold">
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
            {Array.from({ length: 3 }, (_, i) => i + 1).map((el) => (
              <tr>
                <td className="border border-gray-300 p-2">
                  <input
                    className="mt-1 w-full rounded border border-gray-300 p-2"
                    type="date"
                    name="deliveryDate"
                  />
                </td>
                <td className="border border-gray-300 p-2">
                  <input
                    className="mt-1 w-full rounded border border-gray-300 p-2"
                    type="text"
                    name="deliveryQty"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-between">
        <p>&copy; by Elijah. All rights reserved</p>
        <button
          className="mt-6 justify-center rounded bg-blue-900 p-2 text-white"
          type="submit"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default ProcessDeliveryDetails;