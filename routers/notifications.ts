import {Router} from 'express'
import CreateNotificationDataTransferObject from '../dataTransferObjects/create-notification';
import Notification from '../models/notification';

const router = Router();
const notifications:Notification[] = []

router.get('/',(req,res) => {
    res.json(notifications)
})



router.post('/',(req,res) => {
   const {title} =  req.body as CreateNotificationDataTransferObject;
   const notification = new Notification(title)
   notifications.push(notification)
   res.status(201).json(notification)
})

export default router;