import Participation from "../../model/participation_model.js"
class ParticipationController{
    async postParticipation(req,res){
        try{
            const data = {
                idMember: req.body.idMember,
                idEvent: req.body.idEvent,
                dateRegister:req.body.dataRegister,
                scoreLeader:req.body.scoreLeader,
                score1:req.body.score1,
                score2:req.body.score2,
                score3:req.body.score3,
                comment:req.body.comment
            }
            let participation = new Participation({
                member:data.idMember,
                event:data.idEvent,
                dateRegister:data.dateRegister,
                scoreLeader:data.scoreLeader,
                score1:data.score1,
                score2:data.score2,
                score3:data.score3,
                comment:data.comment
            })
            await participation.save()
            return res.status(200).json({
                status: "success",
                message: "participation create successfully",
                participation:participation
              });
        }
        catch (err) {
            return res.json({
              status: "error",
              message: "Create error",
            });
          }
    }
    async getParticipation(req,res){
        try {
            const getParticipations = await Participation.find();
            if (getParticipations) {
              return res.status(200).send({
                status: "success",
                message: "Get Participation successfully",
                getParticipations: getParticipations,
              });
            } else {
              return res
                .status(404)
                .json({ status: "Participation not found", message: "Get error" });
            }
          } catch (err) {
            return res.json({
              status: "error",
              message: "get error",
            });
          }
    }
    async deleteParticipation(req, res) {
        try {
          await Participation.findByIdAndRemove(req.params.id);
          res.status(200).json("delete success!");
        } catch (err) {
          err.message;
        }
      }
    async updateParticipation(req,res){
        try {
          let data = req.body;
          let id = req.params.id;
          let updateParticipation= await Participation.findByIdAndUpdate(id, data);
          return res.status(200).json({
            status: "success",
            message: "Update successfully",
            updateParticipation: updateParticipation,
          });
        } catch (err) {
          return res.status(404).json({ status: "error", message: "Update error" });
        }
      }
}
export default ParticipationController