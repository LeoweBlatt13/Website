document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Verhindert das Standardverhalten des Formulars
    
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    
    // Hier kannst du die Benutzerdaten überprüfen (z.B. mit AJAX-Anfrage an den Server)
    if (username === 'admin' && password === 'passwort') {
      // Erfolgreicher Login, weiterleiten oder weitere Aktionen durchführen
      window.location.href = 'dashboard.html';
    } else {
      if (username === 'marlon' && password === '22022013') {
        window.location.href = 'marlonfoto.html'}
    }