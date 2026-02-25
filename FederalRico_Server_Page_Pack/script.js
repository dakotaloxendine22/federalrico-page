
(() => {
  const connect = document.getElementById('connectText');
  const btn = document.getElementById('copyConnect');
  if (!connect || !btn) return;

  const addr = connect.textContent.trim();
  btn.addEventListener('click', async (e) => {
    e.preventDefault();
    try{
      await navigator.clipboard.writeText(`connect ${addr}`);
      btn.textContent = "COPIED ✅";
      setTimeout(() => (btn.textContent = "COPY CONNECT"), 1400);
    }catch(err){
      // fallback
      prompt("Copy this:", `connect ${addr}`);
    }
  });
})();
