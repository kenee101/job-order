const Job = require("../models/jobModel");
const catchAsync = require("../utils/catchAsync");

exports.createOrder = catchAsync(async (req, res, next) => {
  console.log(req.body);
  const order = await Job.create(req.body);

  // SEND RESPONSE
  res.status(201).json({
    status: "success",
    data: {
      order,
    },
  });
});
