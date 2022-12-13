import { Schema, Types, model, Model } from "mongoose";
import { ISchedule } from "../interfaces/schedule.interface";

const scheduleSchema = new Schema<ISchedule> (
  {
    employeeId: [{
      type: Types.ObjectId,
      ref: 'employee',
    }],
    entryTime: {
      type: Number,
      required: false      
    },
    closingHour: {
      type: Number,
      required: false      
    },
    done: {
      type: Boolean,
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