import express from 'express';
import * as controller from './../controllers/bitbucket.controller';

const router = express.Router();

router.get('/', controller.index);
router.get('/callback', controller.callback);

export default router;