import IMask from 'imask';

const TextMask = {};

TextMask.getMaskedValue = (text = '', userMask) => {
	const masked = IMask.createMask({mask: userMask});
	masked.resolve(text);
	return masked.value;
};

export {TextMask};
