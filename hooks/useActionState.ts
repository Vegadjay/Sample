import { useState } from "react";
interface FormState {
  error: string;
  status: "INITIAL" | "SUCCESS" | "ERROR";
}

export const useActionState = (
  action: (prevState: FormState, formData: FormData) => Promise<any>,
  initialState: FormState
) => {
  const [state, setState] = useState<FormState>(initialState);
  const [isPending, setIsPending] = useState<boolean>(false);

  const formAction = async (formData: FormData) => {
    setIsPending(true);
    try {
      const result = await action(state, formData);
      if (result.status === "SUCCESS") {
        setState({ ...state, status: "SUCCESS" });
      }
      setIsPending(false);
      return result;
    } catch (error) {
      setState({ ...state, status: "ERROR", error: error.message || "Unknown Error" });
      setIsPending(false);
      return { status: "ERROR", error: error.message };
    }
  };

  return [state, formAction, isPending] as const;
};
