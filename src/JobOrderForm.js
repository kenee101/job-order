import ProcessDeliveryDetails from './ProcessDeliveryDetails';
import printBox from './assets/printBox_logo.jpg';
import { useJobOrder } from './JobContext';

const JobOrderForm = () => {
  const {formData, setFormData, handleInputChange} = useJobOrder()

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e)
  }

  return (
    <>
      <form className="mx-auto max-w-4xl rounded-lg bg-white p-6 shadow-md" onSubmit={handleSubmit}>
        <header className="flex justify-between">
          <img src={printBox} alt="logo" className="-mt-5 h-20"></img>
          <div className="clip-path-polygon flex h-10 w-1/5 items-center justify-end bg-black px-5 font-bold uppercase text-white">
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
              name="jobNo"
              value={formData.jobNo}
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
                name="colorsProcess"
                value={formData.size.open}
                onChange={handleInputChange}
              />
            </label>
            <label className="block">
              Closed:
              <input
                className="mt-1 w-full rounded border border-gray-300 p-2"
                type="text"
                name="colorsProcess"
                value={formData.size.closed}
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
                name="colorsProcess"
                value={formData.colours.process}
                onChange={handleInputChange}
              />
            </label>
            <label className="block">
              Spot:
              <input
                className="mt-1 w-full rounded border border-gray-300 p-2"
                type="text"
                name="colorsProcess"
                value={formData.colours.spot}
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
                name="materials.box"
                value={formData.materials.box}
                onChange={handleInputChange}
              />
            </label>
            <label className="block">
              Material type:
              <input
                className="mt-1 w-full rounded border border-gray-300 p-2"
                type="text"
                name="materials.gsm"
                value={formData.materials.materialType}
                onChange={handleInputChange}
              />
            </label>
            <div className="flex justify-between gap-5">
              <label className="block">
                GSM:
                <input
                  className="mt-1 w-full rounded border border-gray-300 p-2"
                  type="text"
                  name="materials.gsm"
                  value={formData.materials.gsm}
                  onChange={handleInputChange}
                />
              </label>
              <label className="block">
                Size:
                <input
                  className="mt-1 w-full rounded border border-gray-300 p-2"
                  type="text"
                  name="materials.size"
                  value={formData.materials.size}
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
                name="materials.artwork"
                value={formData.materials.artwork}
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
                name="materials.proof"
                value={formData.materials.proof}
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
                name="materials.origination"
                value={formData.materials.origination}
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
              name="prePress.jobReceivedOn"
              value={formData.prePress.jobReceivedOn}
              onChange={handleInputChange}
            />
          </label>
          <label className="block">
            Process On:
            <input
              className="mt-1 w-full rounded border border-gray-300 p-2"
              type="date"
              name="prePress.processOn"
              value={formData.prePress.processOn}
              onChange={handleInputChange}
            />
          </label>
          <label className="block">
            Approved On:
            <input
              className="mt-1 w-full rounded border border-gray-300 p-2"
              type="date"
              name="prePress.approvedOn"
              value={formData.prePress.approvedOn}
              onChange={handleInputChange}
            />
          </label>
          <label className="block">
            Output:
            <input
              className="mt-1 w-full rounded border border-gray-300 p-2"
              name="prePress.output"
              value={formData.prePress.output}
              onChange={handleInputChange}
            />
          </label>
          <label className="block">
            Die:
            <select
              className="mt-1 w-full rounded border border-gray-300 p-2"
              name="prePress.die"
              value={formData.prePress.die}
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
              name="prePress.spotUVFile"
              value={formData.prePress.spotUVFile}
              onChange={handleInputChange}
            />
          </label>
          <label className="block">
            Foiling File:
            <input
              className="mt-1 w-full rounded border border-gray-300 p-2"
              type="text"
              name="prePress.foilingFile"
              value={formData.prePress.foilingFile}
              onChange={handleInputChange}
            />
          </label>
          <label className="block">
            Emboss/Deboss File:
            <input
              className="mt-1 w-full rounded border border-gray-300 p-2"
              type="text"
              name="prePress.embossDebossFile"
              value={formData.prePress.embossDebossFile}
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
              {Array.from({ length: 5 }, (_, i) => i).map((el) => (
                <tr>
                  <td className="border border-gray-300 p-5">
                    <input
                      className="mt-1 w-full rounded border border-gray-300 p-2"
                      type="text"
                      name="prePress.jobElements"
                      value={formData.prePress.jobElements[i]}
                      onChange={handleInputChange}
                    />
                  </td>
                  <td className="border border-gray-300 p-5">
                    <input
                      className="mt-1 w-full rounded border border-gray-300 p-2"
                      type="text"
                      name="prePress.planningSize"
                      value={formData.prePress.planningSize[i]}
                      onChange={handleInputChange}
                    />
                  </td>
                  <td className="border border-gray-300 p-5">
                    <input
                      className="mt-1 w-full rounded border border-gray-300 p-2"
                      type="text"
                      name="prePress.planningSize"
                      value={formData.prePress.noOfUps[i]}
                      onChange={handleInputChange}
                    />
                  </td>
                  <td className="border border-gray-300 p-5">
                    <input
                      className="mt-1 w-full rounded border border-gray-300 p-2"
                      type="text"
                      name="prePress.scheme"
                      value={formData.prePress.scheme[i]}
                      onChange={handleInputChange}
                    />
                  </td>
                  <td className="border border-gray-300 p-5">
                    <input
                      className="mt-1 w-full rounded border border-gray-300 p-2"
                      type="text"
                      name="prePress.noOfPlates"
                      value={formData.prePress.noOfPlates[i]}
                      onChange={handleInputChange}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
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
            {Array.from({ length: 5 }, (_, i) => i + 1).map((el) => (
              <tr>
                <td className="border border-gray-300 p-5">
                  <input
                    className="mt-1 w-full rounded border border-gray-300 p-2"
                    type="text"
                    name="press.gsmType"
                    value={formData.press.gsmType[i]}
                    onChange={handleInputChange}
                  />
                </td>
                <td className="border border-gray-300 p-5">
                  <input
                    className="mt-1 w-full rounded border border-gray-300 p-2"
                    type="text"
                    name="prePress.printinggSize"
                    value={formData.press.printingSize[i]}
                    onChange={handleInputChange}
                  />
                </td>
                <td className="border border-gray-300 p-5">
                  <input
                    className="mt-1 w-full rounded border border-gray-300 p-2"
                    type="text"
                    name="prePress.noOfPlates"
                    value={formData.press.noOfPlates[i]}
                    onChange={handleInputChange}
                  />
                </td>
                <td className="border border-gray-300 p-5">
                  <input
                    className="mt-1 w-full rounded border border-gray-300 p-2"
                    type="text"
                    name="prePress.printingQnty"
                    value={formData.press.printingQnty[i]}
                    onChange={handleInputChange}
                  />
                </td>
                <td className="border border-gray-300 p-5">
                  <input
                    className="mt-1 w-full rounded border border-gray-300 p-2"
                    type="text"
                    name="press.wastageQnty"
                    value={formData.press.wastageQnty[i]}
                    onChange={handleInputChange}
                  />
                </td>
                <td className="border border-gray-300 p-5">
                  <input
                    className="mt-1 w-full rounded border border-gray-300 p-2"
                    type="text"
                    name="prePress.noOfUps"
                    value={formData.press.noOfUps[i]}
                    onChange={handleInputChange}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>

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
