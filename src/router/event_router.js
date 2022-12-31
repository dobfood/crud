import express from 'express';
import EventController from '../controller/event-controller/event_controller.js';
const eventRouter = express.Router();
const eventController = new EventController()

eventRouter.post('/',eventController.postEvent)
eventRouter.get('/',eventController.getEvents)
eventRouter.delete('/:id',eventController.deleteEvent)
eventRouter.patch('/:id',eventController.updateEvent)
eventRouter.get('/:id',eventController.getEvent)
export default eventRouter