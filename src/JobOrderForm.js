import ProcessDeliveryDetails from './ProcessDeliveryDetails';
import printBox from './assets/printBox_logo.jpg';
import { useJobOrder } from './context/JobContext';
import { useState } from 'react';
import Modal from './utils/Modal';
import PrePressForm from './PrePressForm';
import { prePressFormArray } from './PrePressForm';
import PressForm from './PressForm';
import { pressFormArray } from './PressForm';
// import axios from 'axios';
// import { showAlert } from './utils/alerts';

const JobOrderForm = () => {
  const { formData, setFormData, handleInputChange } = useJobOrder();
  const [prePressModal, setPrePressModal] = useState(false);
  const [pressModal, setPressModal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
    }
  };

  return (
    <>
      <form
        className="max-w-8xl mx-auto rounded-lg bg-white p-6 shadow-md"
        onSubmit={handleSubmit}
        onKeyDown={handleKeyDown}
      >
        <header className="flex justify-between">
          <img src={printBox} alt="logo" className="-mt-5 h-20"></img>
          <div className="flex h-10 w-1/5 items-center justify-end bg-black px-5 font-bold uppercase text-white clip-path-polygon">
            Job Order
          </div>
        </header>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <label className="block">
            Date:
            <input
              className="mt-1 w-full rounded border border-gray-300 p-2"
              type="date"
              name="date"
              value={formData.date}
              onChange={handleInputChange}
            />
          </label>
          <label className="block">
            LPO No:
            <input
              className="mt-1 w-full rounded border border-gray-300 p-2"
              type="text"
              name="lpoNo"
              value={formData.lpoNo}
              onChange={handleInputChange}
            />
          </label>
          <label className="block">
            Job No:
            <input
              className="mt-1 w-full rounded border border-gray-300 p-2"
              type="text"
              name="jobNo"
              value={formData.jobNo}
              onChange={handleInputChange}
            />
          </label>
        </div>
        <div className="mt-5 flex justify-center">
          New Job / Re-Order (with correction) (w/o correction)
        </div>

        <hr className="mb-5 mt-5"></hr>

        <div>
          <label className="block">
            Customer:
            <input
              className="mt-1 w-full rounded border border-gray-300 p-2"
              type="text"
              name="customer"
              value={formData.customer}
              onChange={handleInputChange}
            />
          </label>
          <label className="block">
            Tel/Mob:
            <input
              className="mt-1 w-full rounded border border-gray-300 p-2"
              type="text"
              name="telMob"
              value={formData.telMob}
              onChange={handleInputChange}
            />
          </label>
          <label className="block">
            Job Title:
            <input
              className="mt-1 w-full rounded border border-gray-300 p-2"
              type="text"
              name="jobTitle"
              value={formData.jobTitle}
              onChange={handleInputChange}
            />
          </label>
          <label className="block">
            Qty:
            <input
              className="mt-1 w-full rounded border border-gray-300 p-2"
              type="number"
              name="qty"
              value={formData.qty}
              onChange={handleInputChange}
            />
          </label>

          <div className="mt-5 flex gap-10">
            <div className="mr-7 flex h-20 items-center justify-center">
              Size:
            </div>
            <label className="block">
              Open:
              <input
                className="mt-1 w-full rounded border border-gray-300 p-2"
                type="text"
                name="openSize"
                value={formData.openSize}
                onChange={handleInputChange}
              />
            </label>
            <label className="block">
              Closed:
              <input
                className="mt-1 w-full rounded border border-gray-300 p-2"
                type="text"
                name="closedSize"
                value={formData.closedSize}
                onChange={handleInputChange}
              />
            </label>
          </div>

          <div className="mt-5 flex grow gap-10">
            <div className="flex h-20 items-center justify-center">
              Colours:
            </div>
            <label className="block">
              Process:
              <input
                className="mt-1 w-full rounded border border-gray-300 p-2"
                type="text"
                name="colourProcess"
                value={formData.colourProcess}
                onChange={handleInputChange}
              />
            </label>
            <label className="block">
              Spot:
              <input
                className="mt-1 w-full rounded border border-gray-300 p-2"
                type="text"
                name="colourSpot"
                value={formData.colourSpot}
                onChange={handleInputChange}
              />
            </label>
          </div>
        </div>

        <hr className="mt-8"></hr>

        <h3 className="mb-2 mt-6 text-lg font-bold">Materials</h3>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div>
            <label className="block">
              Box:
              <input
                className="mt-1 w-full rounded border border-gray-300 p-2"
                type="text"
                name="materialsBox"
                value={formData.materialsBox}
                onChange={handleInputChange}
              />
            </label>
            <label className="block">
              Material type:
              <input
                className="mt-1 w-full rounded border border-gray-300 p-2"
                type="text"
                name="materialsType"
                value={formData.materialsType}
                onChange={handleInputChange}
              />
            </label>
            <div className="flex justify-between gap-5">
              <label className="block">
                GSM:
                <input
                  className="mt-1 w-full rounded border border-gray-300 p-2"
                  type="text"
                  name="gsm"
                  value={formData.gsm}
                  onChange={handleInputChange}
                />
              </label>
              <label className="block">
                Size:
                <input
                  className="mt-1 w-full rounded border border-gray-300 p-2"
                  type="text"
                  name="materialSize"
                  value={formData.materialSize}
                  onChange={handleInputChange}
                />
              </label>
            </div>
          </div>
          <div>
            <label className="block">
              Artwork:
              <select
                className="mt-1 w-full rounded border border-gray-300 p-2"
                name="artwork"
                value={formData.artwork}
                onChange={handleInputChange}
              >
                <option value="Creation">Creation</option>
                <option value="Supplied">Supplied</option>
              </select>
            </label>
            <label className="block">
              Proof:
              <select
                className="mt-1 w-full rounded border border-gray-300 p-2"
                name="proof"
                value={formData.proof}
                onChange={handleInputChange}
              >
                <option value="Colour Sample">Colour Sample</option>
                <option value="Dummy">Dummy</option>
                <option value="Laser Proof">Laser Proof</option>
                <option value="Epson Proof">Epson Proof</option>
                <option value="Size Samples">Size Samples</option>
              </select>
            </label>
            <label className="block">
              Origination:
              <select
                className="mt-1 w-full rounded border border-gray-300 p-2"
                name="origination"
                value={formData.origination}
                onChange={handleInputChange}
              >
                <option value="CD">CD</option>
                <option value="USB">USB</option>
                <option value="Email">Email</option>
              </select>
            </label>
          </div>
        </div>

        <hr className="mt-10"></hr>

        <h3 className="mb-2 mt-6 text-lg font-bold">Pre-Press</h3>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <label className="block">
            Job Received On:
            <input
              className="mt-1 w-full rounded border border-gray-300 p-2"
              type="date"
              name="jobReceivedOn"
              value={formData.jobReceivedOn}
              onChange={handleInputChange}
            />
          </label>
          <label className="block">
            Process On:
            <input
              className="mt-1 w-full rounded border border-gray-300 p-2"
              type="date"
              name="processOn"
              value={formData.processOn}
              onChange={handleInputChange}
            />
          </label>
          <label className="block">
            Approved On:
            <input
              className="mt-1 w-full rounded border border-gray-300 p-2"
              type="date"
              name="approvedOn"
              value={formData.approvedOn}
              onChange={handleInputChange}
            />
          </label>
          <label className="block">
            Output:
            <input
              className="mt-1 w-full rounded border border-gray-300 p-2"
              name="output"
              value={formData.output}
              onChange={handleInputChange}
            />
          </label>
          <label className="block">
            Die:
            <select
              className="mt-1 w-full rounded border border-gray-300 p-2"
              name="die"
              value={formData.die}
              onChange={handleInputChange}
            >
              <option value="New">New</option>
              <option value="Old">Old</option>
            </select>
          </label>
          <label className="block">
            Spot UV File:
            <input
              className="mt-1 w-full rounded border border-gray-300 p-2"
              type="text"
              name="spotUVFile"
              value={formData.spotUVFile}
              onChange={handleInputChange}
            />
          </label>
          <label className="block">
            Foiling File:
            <input
              className="mt-1 w-full rounded border border-gray-300 p-2"
              type="text"
              name="foilingFile"
              value={formData.foilingFile}
              onChange={handleInputChange}
            />
          </label>
          <label className="block">
            Emboss/Deboss File:
            <input
              className="mt-1 w-full rounded border border-gray-300 p-2"
              type="text"
              name="embossDebossFile"
              value={formData.embossDebossFile}
              onChange={handleInputChange}
            />
          </label>

          <table className="col-span-2 mb-5 mt-5 w-full">
            <thead>
              <tr>
                <th className="border border-gray-300 p-2">Job Elements</th>
                <th className="border border-gray-300 p-2">Planning Size</th>
                <th className="border border-gray-300 p-2">No of UPS</th>
                <th className="border border-gray-300 p-2">Scheme</th>
                <th className="border border-gray-300 p-2">No of Plates</th>
              </tr>
            </thead>

            <tbody>
              {prePressFormArray.map((obj) => (
                <tr>
                  <td className="border border-gray-300 p-5 text-center">
                    {obj.jobElements}
                  </td>
                  <td className="border border-gray-300 p-5 text-center">
                    {obj.planningSize}
                  </td>
                  <td className="border border-gray-300 p-5 text-center">
                    {obj.noOfUps}
                  </td>
                  <td className="border border-gray-300 p-5 text-center">
                    {obj.scheme}
                  </td>
                  <td className="border border-gray-300 p-5 text-center">
                    {obj.noOfPlates}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div>
            <button
              className="justify-center rounded bg-blue-900 p-2 text-white"
              onClick={(e) => {
                e.preventDefault();
                setPrePressModal((show) => !show);
              }}
            >
              Add information
            </button>

            {prePressModal && (
              <Modal onClose={() => setPrePressModal(false)}>
                <PrePressForm onCloseModal={() => setPrePressModal(false)} />
              </Modal>
            )}
          </div>
        </div>

        <hr className="mt-8"></hr>

        <h3 className="mb-2 mt-6 text-lg font-bold">Press</h3>
        <div className="flex w-full">
          <div className="flex grow justify-center border border-gray-300 p-2 font-bold">
            KBA Rapida - 5 COLOUR
          </div>
          <div className="flex grow justify-center border border-gray-300 p-2 font-bold">
            KBA Rapida - 7 COLOUR
          </div>
        </div>

        <table className="mb-5 w-full">
          <thead>
            <tr>
              <th className="border border-gray-300 p-2">GSM & Type</th>
              <th className="border border-gray-300 p-2">Printing Size</th>
              <th className="border border-gray-300 p-2">No of Plates</th>
              <th className="border border-gray-300 p-2">Printing Qnty</th>
              <th className="border border-gray-300 p-2">Wastage Qnty</th>
              <th className="border border-gray-300 p-2">No of Ups</th>
            </tr>
          </thead>
          <tbody>
            {pressFormArray.map((obj) => (
              <tr>
                <td className="border border-gray-300 p-5 text-center">
                  {obj.pressGsmType}
                </td>
                <td className="border border-gray-300 p-5 text-center">
                  {obj.pressPrintingSize}
                </td>
                <td className="border border-gray-300 p-5 text-center">
                  {obj.pressNoOfPlates}
                </td>
                <td className="border border-gray-300 p-5 text-center">
                  {obj.pressPrintingQnty}
                </td>
                <td className="border border-gray-300 p-5 text-center">
                  {obj.pressWastageQnty}
                </td>
                <td className="border border-gray-300 p-5 text-center">
                  {obj.pressNoOfUps}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div>
          <button
            className="mt-2 justify-center rounded bg-blue-900 p-2 text-white"
            onClick={(e) => {
              e.preventDefault();
              setPressModal((show) => !show);
            }}
          >
            Add information
          </button>

          {pressModal && (
            <Modal onClose={() => setPressModal(false)}>
              <PressForm onCloseModal={() => setPressModal(false)} />
            </Modal>
          )}
        </div>

        <hr className="mt-8"></hr>

        <h3 className="mb-2 mt-6 text-lg font-bold">Post Press</h3>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {[
            'Gloss WB Varnish',
            'Matt WB Varnish',
            'Grease Barrier WB Varnish',
            'UV Varnish',
            'Matt Lamth',
            'Gloss Lamth',
            'Spot UV',
            'Embossing / Deboss',
            'Die Cut',
            'Window Pasting',
            'Plain',
            'Printed',
            'Glueing',
            'Erecting',
            'Flat Supply',
            'Foiling: Colour',
          ].map((item) => (
            <label className="flex items-center space-x-2" key={item}>
              <input
                className="h-5 w-5 text-blue-600"
                type="checkbox"
                name="postPress"
                value={item}
                onChange={(e) => {
                  const { checked, value } = e.target;
                  setFormData({
                    ...formData,
                    postPress: checked
                      ? [...formData.postPress, value]
                      : formData.postPress.filter((v) => v !== value),
                  });
                }}
              />
              <span>{item}</span>
            </label>
          ))}
        </div>

        <div className="mt-6">
          <label className="block">
            Other:
            <textarea
              className="mt-1 w-full rounded border border-gray-300 p-2"
              name="other"
              value={formData.other}
              onChange={handleInputChange}
            ></textarea>
          </label>
          <label className="block">
            Special Instructions:
            <textarea
              className="mt-1 w-full rounded border border-gray-300 p-2"
              name="specialInstructions"
              value={formData.specialInstructions}
              onChange={handleInputChange}
            ></textarea>
          </label>
          <label className="mt-4 block">
            Operation Manager:
            <input
              className="mt-1 w-full rounded border border-gray-300 p-2"
              type="text"
              name="operationManager"
              value={formData.operationManager}
              onChange={handleInputChange}
            />
          </label>
          <label className="mt-4 block">
            Remarks:
            <textarea
              className="mt-1 w-full rounded border border-gray-300 p-2"
              name="remarks"
              value={formData.remarks}
              onChange={handleInputChange}
            ></textarea>
          </label>
        </div>
      </form>

      <ProcessDeliveryDetails />
    </>
  );
};

export default JobOrderForm;
