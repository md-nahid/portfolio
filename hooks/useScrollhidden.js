export default function useScrollhidden(freezescroll = false) {
  if (freezescroll) {
    document.body.classList.add("overflow-hidden");
  } else {
    document.body.classList.remove("overflow-hidden");
  }
}
