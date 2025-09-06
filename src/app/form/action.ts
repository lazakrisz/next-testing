"use server";

export async function submitForm(prevState: unknown, formData: FormData) {
  const name = formData.get("name");

  // Send to API
  await fetch("http://my-db/form", {
    method: "POST",
    body: JSON.stringify({ name }),
  });

  return { name };
}
