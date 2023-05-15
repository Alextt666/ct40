export function getHardDeviceInfo() {
  const diskUsed = window.sessionStorage.getItem("diskUsed") || "16.6";
  const diskFree = window.sessionStorage.getItem("diskFree") || "50.2";

  return {
    diskFree,
    diskUsed,
  };
}
