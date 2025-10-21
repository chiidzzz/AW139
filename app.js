// ===============================
// Power Assurance: pre-check modal before redirect
// ===============================
document.addEventListener("DOMContentLoaded", () => {
  const powerCard = document.getElementById("power-card");
  if (!powerCard) return;

  powerCard.addEventListener("click", (e) => {
    e.preventDefault();

    const overlay = document.createElement("div");
    overlay.className = "modal-overlay";

    const box = document.createElement("div");
    box.className = "modal-box";
    box.innerHTML = `
      <h2>Power Assurance Check</h2>
      <ol class="modal-list">
        <li>POWER ASSURANCE CHECK in HOVER FLIGHT (NR=102%)</li>
        <li>HEATER/COND OFF</li>
        <li>GENERATOR LOAD TO MINIMUM (BELOW 17%)</li>
        <li>SET NR to 102%</li>
        <li>TEST ENGINE MODE SWITCH: FLIGHT</li>
        <li>OTHER ENGINE MODE SWITCH: IDLE</li>
        <li>INCREASE COLLECTIVE UNTIL LIGHT ON WHEELS OR HOVERING AT 5 FEET, NOSE ON WIND. DO NOT EXCEED 775°C ITT OR 102.4% NG OR 105% TQ</li>
        <li>STABILIZE POWER 1 MINUTE, THEN RECORD OAT, PRESSURE ALTITUDE, ENGINE TORQUE, ITT AND NG</li>
        <li>IF INDICATED ITT OR NG EXCEEDS MAXIMUM ALLOWABLE, REPEAT CHECK</li>
        <li>REPEAT CHECK USING OTHER ENGINE</li>
        <li>IF EITHER ENGINE EXCEEDS ALLOWABLE ITT OR NG, PUBLISHED PERFORMANCE MAY NOT BE ACHIEVABLE. REFER TO EMM</li>
      </ol>
      <p><strong>Reference:</strong> AW139-QRH Revision 26</p>
      <div class="modal-actions">
        <button class="modal-ok" type="button">OK</button>
      </div>
    `;

    overlay.appendChild(box);
    document.body.appendChild(overlay);

    box.querySelector(".modal-ok").addEventListener("click", () => {
      overlay.remove();
      window.location.href = "power.html";
    });

    overlay.addEventListener("click", (ev) => {
      if (ev.target === overlay) overlay.remove();
    });
    document.addEventListener("keydown", (ev) => {
      if (ev.key === "Escape") overlay.remove();
    });
  });
});
