const qs = require('query-string');

const fakeRequest = require('../../utils/fakeRequest');

const CUSTOM_VOLUUM_DOMAIN = 'your-custom-domain.com';

function subscriptionEventJob(job) {
	const str = qs.stringify(job.data);
	fakeRequest(`https://${CUSTOM_VOLUUM_DOMAIN}/postback?${str}`);
}

module.exports = subscriptionEventJob;
