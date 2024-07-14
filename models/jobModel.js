const { default: mongoose } = require("mongoose");
// const validator = require('validator');

const jobSchema = new mongoose.Schema({
  jobNo: {
    type: Number,
    required: [true, "Job number needed"],
    unique: true,
  },
  lpoNo: {
    type: Number,
    required: [true, "LPO number needed"],
  },
  customer: {
    type: String,
    required: [true, "Customer Name required"],
  },
  telMob: {
    type: Number,
    required: [true, "Phone number needed"],
  },
  date: Date,
  jobTitle: String,
  qty: Number,
  openSize: String,
  closedSize: String,
  colourProcess: String,
  colourSpot: String,
  materialsBox: String,
  materialsType: String,
  gsm: Number,
  materialSize: String,
  artwork: String,
  proof: String,
  origination: String,
  jobReceivedOn: Date,
  processOn: Date,
  approvedOn: Date,
  output: String,
  die: String,
  foilingFile: String,
  spotUVFile: String,
  embossDebossFile: String,
  jobElements: [String],
  planningSize: [String],
  scheme: [String],
  noOfUps: [Number],
  noOfPlates: [Number],
  pressGsmType: [String],
  pressPrintingSize: [String],
  pressNoOfPlates: [Number],
  pressPrintingQnty: [Number],
  pressWastageQnty: [Number],
  pressNoOfUps: [Number],
  createdAt: {
    type: Date,
    default: Date.now(),
    select: false,
  },
  postPress: [String],
  other: String,
  specialInstructions: String,
  operationManager: String,
  remarks: String,
  process: [String],
  machine: [String],
  processDate: [Date],
  shift: [String],
  processTotalQnty: [String],
  finishedQnty: [String],
  wastage: [String],
  reason: [String],
  operator: [String],
  despatchDate: [Date],
  cartonQnty: [String],
  noOfBoxes: [String],
  deliveryTotalQnty: [String],
  excessQnty: [String],
  deliveryWastageQnty: [String],
  outerCartonSize: [String],
  deliveryRemarks: [String],
  deliveryDate: [Date],
  deliveryQnty: [Number],
});

// tourSchema.post('save', function (doc, next) {
//   console.log(doc);
//   next();
// });

const Job = mongoose.model("Job", jobSchema);

module.exports = Job;
