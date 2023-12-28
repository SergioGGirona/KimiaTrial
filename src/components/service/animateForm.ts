import Swal from "sweetalert2";

export function showAnimation(): void {
  Swal.fire({
    title: "La curiosidad es el primer paso",
    text: "Ahora, solo tienes que completar el formulario y nos pondremos en contacto contigo.",
    showConfirmButton: false,
    timer: 4000,
    icon: "info",
  });
  setTimeout(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, 5000);
}
