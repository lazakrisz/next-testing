"use client";

import { useActionState } from "react";
import { submitMutation } from "./action";

export default function GraphQLMutationPage() {
  const [state, formAction, isPending] = useActionState(submitMutation, null);

  return (
    <form action={formAction}>
      <input type="text" name="name" />
      <button type="submit" disabled={isPending}>
        {isPending ? "Submitting..." : "Submit"}
      </button>

      {state?.name ? (
        <p data-testid="new-product">New product: {String(state.name)}</p>
      ) : null}
    </form>
  );
}
