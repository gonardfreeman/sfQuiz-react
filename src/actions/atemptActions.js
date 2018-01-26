export const ONE_ATTEMPT = 'ONE_ATTEMPT';
export const MANY_ATTEMPS = 'MANY_ATTEMPS';

export default {
  oneAttemptAction() {
    return {
      type: ONE_ATTEMPT
    };
  },
  manyAttemptsAction() {
    return {
      type: MANY_ATTEMPS
    };
  }
};
