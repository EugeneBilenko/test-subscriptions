const processIncomingData = require('../services/PaddleService');
const subscribeEventQueue = require('../queues/subscribeEvent/queue');
const minutes = require('../utils/minutes');

function PaddleController(req, res) {
	try {
		const payload = req.body;
		const postBackData = processIncomingData(payload);
		subscribeEventQueue.add(postBackData, { delay: minutes(10) });
		res.sendStatus(200);
	} catch (e) {
		res.status(400).json({ message: e.message });
	}
}

module.exports = PaddleController;
