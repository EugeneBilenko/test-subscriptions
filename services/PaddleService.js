const { v4: uuid } = require('uuid');

function processIncomingData(payload) {
	const parsedPassthroughData = JSON.parse(payload.data.passthrough);
	const clickId = parsedPassthroughData.clickID;
	const payout = parsedPassthroughData.payoutValue;
	if (!payout || !clickId) {
		throw new Error('Please provide passthrough.clickID and passthrough.payoutValue');
	}
	const transactionId = uuid();
	return { cid: clickId, payout, txid: transactionId };
}

module.exports = processIncomingData;
