document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger');
  const mobileMenu = document.querySelector('.mobile-menu');

  if (!hamburger || !mobileMenu) return;

  hamburger.addEventListener('click', (e) => {
    e.stopPropagation();
    hamburger.classList.toggle('active');
    mobileMenu.classList.toggle('active');
    const expanded = hamburger.getAttribute('aria-expanded') === 'true';
    hamburger.setAttribute('aria-expanded', !expanded);
  });

  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    if (mobileMenu.classList.contains('active') && !mobileMenu.contains(e.target) && !hamburger.contains(e.target)) {
      mobileMenu.classList.remove('active');
      hamburger.classList.remove('active');
      hamburger.setAttribute('aria-expanded', 'false');
    }
  });

  // Close on link click (mobile)
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('active');
      hamburger.classList.remove('active');
      hamburger.setAttribute('aria-expanded', 'false');
    });
  });
});

// Make the header "Connect" button open the Select Wallet modal on ALL pages
const headerConnectBtn = document.querySelector('.connect .interact-button');
if (headerConnectBtn) {
  headerConnectBtn.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    // If the openSelectWalletModal function exists (get-support.html), use it
    if (typeof openSelectWalletModal === 'function') {
      openSelectWalletModal();
    } else {
      // Fallback: directly show the modal if the function is not defined (for index.html if needed)
      const modal = document.getElementById('selectWalletModal');
      if (modal) {
        modal.classList.remove('hidden');
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
      }
    }
  });
}

// Optional: Make the wallet GIF clickable too
const walletGif = document.querySelector('.connect .wallet-gif');
if (walletGif) {
  walletGif.style.cursor = 'pointer';
  walletGif.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (typeof openSelectWalletModal === 'function') {
      openSelectWalletModal();
    } else {
      const modal = document.getElementById('selectWalletModal');
      if (modal) {
        modal.classList.remove('hidden');
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
      }
    }
  });
}