// Enhanced version of api.js
export const verifyPolicyNumber = async (policyNumber, options = {}) => {
  const validPolicyNumbers = options.validPolicyNumbers || ["12345", "67890", "11223"];
  const delay = options.delay || 1000;

  try {
    if (!policyNumber || typeof policyNumber !== "string") {
      throw new Error("Policy number must be a non-empty string.");
    }
    await new Promise((res) => setTimeout(res, delay));
    if (validPolicyNumbers.includes(policyNumber)) {
      return {
        status: "success",
        code: "POLICY_VERIFIED",
        message: "Policy number verified successfully.",
      };
    } else {
      throw new Error("Invalid policy number.");
    }
  } catch (error) {
    return { status: "error", message: error.message };
  }
};