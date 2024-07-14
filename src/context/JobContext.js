import { createContext, useContext, useState } from 'react';

const JobContext = createContext();

const initialState = {
  jobNo: '',
  lpoNo: '',
  date: '',
  customer: '',
  telMob: '',
  jobTitle: '',
  qty: '',
  openSize: '',
  closedSize: '',
  colourProcess: '',
  colourSpot: '',
  materialsBox: '',
  materialsType: '',
  gsm: '',
  materialSize: '',
  artwork: '',
  proof: '',
  origination: '',
  jobReceivedOn: '',
  processOn: '',
  approvedOn: '',
  output: '',
  die: '',
  foilingFile: '',
  spotUVFile: '',
  embossDebossFile: '',
  jobElements: [],
  planningSize: [],
  scheme: [],
  noOfUps: [],
  noOfPlates: [],
  pressGsmType: [],
  pressPrintingSize: [],
  pressNoOfPlates: [],
  pressPrintingQnty: [],
  pressWastageQnty: [],
  pressNoOfUps: [],
  postPress: [],
  other: '',
  specialInstructions: '',
  operationManager: '',
  remarks: '',
  process: [],
  machine: [],
  processDate: [],
  shift: [],
  processTotalQnty: [],
  finishedQnty: [],
  wastage: [],
  reason: [],
  operator: [],
  despatchDate: [],
  cartonQnty: [],
  noOfBoxes: [],
  deliveryTotalQnty: [],
  excessQnty: [],
  deliveryWastageQnty: [],
  outerCartonSize: [],
  deliveryRemarks: [],
  deliveryQnty: [],
  deliveryDate: [],
};

function JobProvider({ children }) {
  const [formData, setFormData] = useState(initialState);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <JobContext.Provider value={{ formData, setFormData, handleInputChange }}>
      {children}
    </JobContext.Provider>
  );
}

function useJobOrder() {
  const context = useContext(JobContext);
  if (context === undefined)
    throw new Error('Context was used outside the Job Context Provider.');
  return context;
}

export { JobProvider, useJobOrder };
