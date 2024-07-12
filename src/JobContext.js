import { createContext, useContext, useState } from "react";

const JobContext = createContext();

const initialState = {
    jobNo: '',
    lpoNo: '',
    date: '',
    customer: '',
    telMob: '',
    jobTitle: '',
    qty: '',
    size: { open: '', closed: '' },
    colours: { process: '', spot: '' },
    materials: {
      box: '',
      materialType: '',
      gsm: '',
      size: '',
      artwork: '',
      proof: '',
      origination: '',
    },
    prePress: {
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
    },
    press: {
      gsmType: [],
      printingSize: [],
      noOfPlates: [],
      printingQnty: [],
      wastageQnty: [],
      noOfUps: [],
    },
    postPress: [],
    other: '',
    specialInstructions: '',
    operaionManager: '',
    remarks: '',
    process :{
      printingBackSide: {},
      printingFrontSide: {},
      UVLamination: {},
      foiling: {},
      embossDeboss: {},
      dieCutting: {},
      erecting: {},
      wPasting: {},
      glueing: {},
    }, 
    despatch: {
      date: [],
      cartonQty: [],
      noOfBoxes: [],
      totalQty: [],
      excessQty: [],
      wastageQty: [],
      outerCartonSize: [],
      remarks: [],
    },
    delivery: {
      deliveryDate: [],
      deliveryQty: [],
    }
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
    throw new Error(
      "Context was used outside the Job Context Provider."
    );
  return context;
}

export { JobProvider, useJobOrder};