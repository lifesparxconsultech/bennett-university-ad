// lib/scrollToForm.ts
export function scrollToForm() {
  const el = document.getElementById("eligibility-form")
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "center" })
  }
}