import express from 'express';
const router = express.Router();
import MemberController from '../controller/member-controller/member_controller.js'
const memberController = new MemberController()

router.post('/',memberController.postMember)
router.get('/',memberController.getMembers)
// router.delete('/:id',memberController.deleteMember)
// router.patch('/:id',memberController.updateMember)
export default router