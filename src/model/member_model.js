import { Schema, model } from "mongoose";

const MemberSchema = new Schema({
  fullName: { type: String, require: true },
  sex: { type: String, require: true },
  dateBirth: { type: Number, require: true },
  email: { type: String, require: true, unique: true },
  phone:{ type: String, require: true, unique: true }
},
{timestamps:true}
);
const Member = model("member",MemberSchema);
export default Member;
