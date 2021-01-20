const get = require('lodash/get');
const { v4: uuid } = require('uuid');

const centsToDollars = require('../utils/centsToDollars');

function processIncomingData(payload) {
	const payoutCents = get(payload, 'data.object.plan.amount', null);
	const clickId = get(payload, 'data.object.metadata.clickID', null);
	if (!payoutCents || !clickId) {
		throw new Error('Please provide data.object.plan.amount and data.object.metadata.clickID');
	}
	const payout = centsToDollars(payoutCents);
	const transactionId = uuid();
	return { cid: clickId, payout, txid: transactionId };
}


module.exports.processIncomingData = processIncomingData;
