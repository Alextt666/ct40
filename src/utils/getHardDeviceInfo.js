export function getHardDeviceInfo() {
  const diskUsed = window.sessionStorage.getItem("diskUsed") || "16.6";
  const diskFree = window.sessionStorage.getItem("diskFree") || "50.2";
  const cameraNum = window.sessionStorage.getItem("cameraStatus") || 0;
  const screenNum = window.sessionStorage.getItem("screenStatus") || 0;
  return {
    diskFree,
    diskUsed,
    cameraNum,
    screenNum,
  };
}
