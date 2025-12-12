const normaliseNegZero = (e) => (Object.is(e, -0) ? 0 : e);

export { normaliseNegZero };
