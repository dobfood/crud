import { Schema, model, Types } from "mongoose";

const EventSchema = new Schema({
  nameEvent: { type: String, require: true },
  describeEvent: { type: String, require: true },
  startDate: { type: Number, require: true },
  endDate:{ type: Number, require: true },
  minQuantity:{ type: Number, require: true },
  maxQuantity:{ type: Number, require: true },
  dateTime:{type: Number, require: true},
  status:{type: String ,require: true},
  reasonCancel:{type:String},
  idMember:{type: Schema.Types.ObjectId,ref:'member'}
},
{timestamps:true}
);
const Event = model("event",EventSchema);
export default Event;