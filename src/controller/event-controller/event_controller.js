import Event from "../../model/event_model.js";
class EventController {
  async postEvent(req, res) {
    try {
      const data = {
        nameEvent: req.body.nameEvent,
        describeEvent: req.body.describeEvent,
        startDate: req.body.startDate,
        endDate: req.body.endDate,
        minQuantity: req.body.minQuantity,
        maxQuantity: req.body.maxQuantity,
        dateTime: req.body.dateTime,
        status: req.body.status,
        reasonCancel: req.body.reasonCancel,
        idMember: req.body.idMember,
      };
      let event = new Event({
        nameEvent: data.nameEvent,
        describeEvent: data.describeEvent,
        startDate: data.startDate,
        endDate: data.endDate,
        minQuantity: data.minQuantity,
        maxQuantity: data.maxQuantity,
        status:data.status,
        dateTime: data.dateTime,
        reasonCancel: data.reasonCancel,
        idMember: data.idMember,
      });
      await event.save();

      return res.status(200).json({
        status: "success",
        message: "event create successfully",
        event:event
      });
    } catch (err) {
      return res.json({
        status: "error",
        message: "Create error",
      });
    }
  }
  async getEvents(req, res) {
    try {
      const events = await Event.find();
      if (events) {
        return res.status(200).send({
          status: "success",
          message: "Get event successfully",
          events: events,
        });
      } else {
        return res
          .status(404)
          .json({ status: "event not found", message: "Get error" });
      }
    } catch (err) {
      return res.json({
        status: "error",
        message: "get error",
      });
    }
  }
  async deleteEvent(req, res) {
    try {
      const findEvent = await Event.findById(req.params.id);
      console.log('123',findEvent);
      if(findEvent.status == 'finished'){
        res.status(400).json("can not delete!")
      }else{
      await Event.findByIdAndRemove(req.params.id);
      res.status(200).json("delete success!");}
    } catch (err) {
      err.message;
    }
  }
  async updateEvent(req,res){
    try {
      let data = req.body;
      let id = req.params.id;
      let updateEvent = await Event.findByIdAndUpdate(id, data);
      return res.status(200).json({
        status: "success",
        message: "Update successfully",
        updateEvent: updateEvent,
      });
    } catch (err) {
      return res.status(404).json({ status: "error", message: "Update error" });
    }
  }
  async getEvent(req,res){
    try{
      let event = await Event.findById(req.params.id)
          return res.status(200).json({
            status: "success",
            message:'find successfully',
            event: event
          })
    }catch(err){
      return res.status(404).json({status:'can not find event'})
    }
  }
}
export default EventController;
