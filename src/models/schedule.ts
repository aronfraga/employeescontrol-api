import { Schema, Types, model, Model } from "mongoose";
import { ISchedule } from "../interfaces/schedule.interface";

const scheduleSchema = new Schema<ISchedule> (
  {
    employeeID: [{
      type: Types.ObjectId,
      ref: 'employee',
    }],
    entryTime: {
      type: Number,
      required: true      
    },
    closingHour: {
      type: Number,
      required: true      
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
);

const scheduleModel = model('schedule', scheduleSchema);
export default scheduleModel;