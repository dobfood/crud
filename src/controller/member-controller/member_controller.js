import Member from "../../model/member_model.js";

class MemberController {
  async postMember(req, res) {
    try {
      const data = {
        fullName: req.body.fullName,
        sex: req.body.sex,
        dateBirth: req.body.dateBirth,
        email: req.body.email,
        phone: req.body.phone,
      };

      let member = new Member({
        fullName: data.fullName,
        sex: data.sex,
        dateBirth: data.dateBirth,
        email: data.email,
        phone: data.phone,
      });
      await member.save();

      return res.status(200).json({
        status: "success",
        message: "Member create successfully",
        member:member
      });
    } catch (err) {
      return res.json({
        status: "error",
        message: "Create error",
      });
    }
  }
  async getMembers(req, res) {
    try {
      const members = await Member.find();
      if (members) {
        return res.status(200).send({
          status: "success",
          message: "Get member successfully",
          members: members,
        });
      } else {
        return res
          .status(404)
          .json({ status: "member not found", message: "Get error" });
      }
    } catch (err) {
      return res.json({
        status: "error",
        message: "Create error",
      });
    }
  }
  async deleteMember(req, res) {
    try {
      await Member.findByIdAndRemove(req.params.id);
      res.status(200).json("delete success!");
    } catch (err) {
      err.message;
    }
  }
  async updateMember(req, res) {
    try {
      let data = req.body;
      let id = req.params.id;
      let updateMember = await Member.findByIdAndUpdate(id, data);
      return res.status(200).json({
        status: "success",
        message: "Update successfully",
        updateMember: updateMember,
      });
    } catch (err) {
      return res.status(404).json({ status: "error", message: "Update error" });
    }
  }
}
export default MemberController;
