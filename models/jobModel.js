const { default: mongoose } = require('mongoose');
// const slugify = require('slugify');
// const validator = require('validator');

const jobSchema = new mongoose.Schema(
  {
    jobNo: {
      type: Number,
      required: [true, 'Job number needed'],
      unique: true,
    },
    lpoNo: {
      type: Number,
      required: [true, 'LPO number needed'],
    },
    date: {
      type: Date,
      required: [true, 'Date required'],
    },
    customer: {
      type: String,
      required: [true, 'Customer Name required'],
    },
    telMob: {
      type: Number,
      required: [true, 'Phone number needed'],
    },
    jobTitle: String,
    qty: Number,
    openSize: String,
    closedSize: String,
    colourProcess: String,
    colourSpot: String,
    box: String,
    materialType: String,
    gsm: Number,
    size: String,
    artwork: String,
    proof: String,
    jobReceivedOn: Date,
    processOn: Date,
    approvedOn: Date,
    output: String,
    die: String,
    foilingFile: String,
    spotUVFile: String,
    embossDebossFile: String,
    prePressJobElements: [String],
    prePressPlanningSize: [String],
    prePressScheme: [String],
    prePressNoOfUps: [Number],
    prePressNoOfPlates: [Number],
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
    printingBackSide:  [
      {
        type: {type: String},
        machine: String,
        date: String,
        shift: String,
        totalQty: Number,
        finishedQty: Number,
        wastage: String,
        reason: String,
      },
    ],
    remarks: String,
    remarks: String,
    remarks: String,
    remarks: String,
    remarks: String,
    remarks: String,
    remarks: String,
    remarks: String,
    remarks: String,
    remarks: String,
    remarks: String,
    remarks: String,
    remarks: String,
    remarks: String,
    remarks: String,
    remarks: String,
    remarks: String,
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  },
);

// tourSchema.index({ price: 1 });
tourSchema.index({ price: 1, ratingsAverage: -1 });
tourSchema.index({ slug: 1 });
tourSchema.index({ startLocation: '2dsphere' });

// DOCUMENT MIDDLEWARE: ONLY RUNS BEFORE THE .save() and .create()
tourSchema.virtual('durationWeeks').get(function () {
  return this.duration / 7;
});

// Virtual populate
tourSchema.virtual('reviews', {
  ref: 'Review',
  foreignField: 'tour',
  localField: '_id',
});

tourSchema.pre('save', function (next) {
  // console.log(this);
  this.slug = slugify(this.name, { lower: true });
  next();
});

// Embedding Users into the Tour document
// tourSchema.pre('save', async function (next) {
//   const guidesPromises = this.guides.map(async (id) => await User.findById(id));
//   this.guides = await Promise.all(guidesPromises);

//   next();
// });

// tourSchema.pre('save', function (next) {
//   console.log('Will save document');
//   next();
// });

// tourSchema.post('save', function (doc, next) {
//   console.log(doc);
//   next();
// });

// QUERY MIDDLEWARE
tourSchema.pre(/^find/, function (next) {
  this.find({ secretTour: { $ne: true } });

  this.start = Date.now();
  next();
});

tourSchema.pre(/^find/, function (next) {
  this.populate({
    path: 'guides',
    select: '-__v -passwordChangedAt',
  });

  next();
});

// tourSchema.post(/^find/, function (docs, next) {
//   console.log(`Query took ${Date.now() - this.start} milliseconds`);
//   // console.log(docs);
//   next();
// });

// AGGREGATION MIDDLEWARE
// tourSchema.pre('aggregate', function (next) {
//   this.pipeline().unshift({ $match: { secretTour: { $ne: true } } });

//   console.log(this.pipeline());
//   next();
// });

const Job = mongoose.model('Job', jobSchema);

module.exports = Job;