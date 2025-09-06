"use client";

import { useActionState } from "react";
import { submitForm } from "./action";

export default function FormPage() {
  const [state, formAction, isPending] = useActionState(submitForm, null);

  return (
    <form action={formAction}>
      <input type="text" name="name" />
      <button type="submit" disabled={isPending}>
        {isPending ? "Submitting..." : "Submit"}
      </button>

      <br />

      {state?.name ? (
        <p data-testid="submission-name">Name: {String(state.name)}</p>
      ) : null}
    </form>
  );
}
