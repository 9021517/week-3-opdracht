document.getElementById('new-account-form').addEventListener('submit', function (event) {
    event.preventDefault();
  
    const accountName = document.getElementById('account-name').value.trim();
    const startingBalance = parseFloat(document.getElementById('starting-balance').value);
  
    if (accountName && !isNaN(startingBalance)) {
      // Voeg nieuwe rekening toe aan de lijst
      const accountList = document.getElementById('accounts-list');
      const newAccount = document.createElement('li');
      newAccount.textContent = `${accountName}: €${startingBalance.toFixed(2)}`;
      accountList.appendChild(newAccount);
  
      // Formulier resetten
      document.getElementById('new-account-form').reset();
    } else {
      alert('Vul alle velden correct in.');
    }
  });

  // Smooth scroll effect
document.querySelectorAll('.menu a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);
      
      window.scrollTo({
        top: targetSection.offsetTop,
        behavior: 'smooth'
      });
    });
  });
  
  