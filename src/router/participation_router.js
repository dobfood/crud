import express from 'express';
import ParticipationController from '../controller/participation-controller/participation_controller.js';
const routerParticipation = express.Router();

const participationController = new ParticipationController()
routerParticipation.post('/',participationController.postParticipation)
routerParticipation.get('/',participationController.getParticipation)
routerParticipation.delete('/:id',participationController.deleteParticipation)
routerParticipation.patch('/:id',participationController.updateParticipation)
export default routerParticipation