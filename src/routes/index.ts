import { Router } from 'express';

const router = Router();
const TrackController = require('../controllers/TrackController');

// Home Route
router.get('/', async (req, res) => {
  console.log("You don't have access to this api route");
  res.status(200).json({
    statusCode: 200, message: 'success', data:"You don't have access to this api route", error: null, errorMessage: null,
  });
});

router.get('/track/getHistory', TrackController.get);
router.post('/track/trackValue', TrackController.add);

export default router;