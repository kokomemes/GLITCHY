/* Edit only these values when your contract address or links are ready. */
const CONFIG = {
  contractAddress: "", // Example: "0x1234..." (use a real address, never a placeholder)
  x: "https://x.com/GlitchyWorld",
  telegram: "", // Example: "https://t.me/yourchannel"
  github: "" // Example: "https://github.com/your-org"
};

const addressEl = document.getElementById("contractValue");
const copyBtn = document.getElementById("copyButton");
const feedback = document.getElementById("feedback");
const ca = CONFIG.contractAddress.trim();
if (ca) {
  addressEl.textContent = ca;
  addressEl.title = ca;
  copyBtn.disabled = false;
  copyBtn.title = "Copy contract address";
  copyBtn.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(ca);
      feedback.textContent = "Contract address copied";
      copyBtn.title = "Copied!";
    } catch (_) {
      feedback.textContent = "Copy unavailable. Select the address manually.";
    }
  });
}

function setLink(id, url) {
  const element = document.getElementById(id);
  if (!url || !/^https:\/\//i.test(url)) return;
  element.href = url;
  element.target = "_blank";
  element.rel = "noopener noreferrer";
  element.classList.remove("unavailable");
  element.removeAttribute("aria-disabled");
  element.removeAttribute("tabindex");
  element.removeAttribute("title");
}
setLink("xLink", CONFIG.x);
setLink("telegramLink", CONFIG.telegram);
setLink("githubLink", CONFIG.github);

const video = document.querySelector(".background-video");
video.play().catch(() => { /* poster remains visible when autoplay is blocked */ });
