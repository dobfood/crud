import { Schema, model } from "mongoose";

const ParticipationSchema = new Schema({
  member:{type: Schema.Types.ObjectId,ref:'member'},
  event:{type: Schema.Types.ObjectId,ref:'event'},
  dateRegister: { type: String, require: true },
  scoreLeader: { type: String, require: true},
  score1:{type: String},
  score2:{type: String},
  score3:{type: String},
  comment:{type: String}
},
{timestamps:true}
);
const Participation = model("participation",ParticipationSchema);
export default Participation;