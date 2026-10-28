// HTTPS for phones and tablets on the same Wi-Fi.
// Browsers only allow the microphone (reading aloud with the mic) on https pages or on localhost,
// so http://192.168.x.x:5000 cannot use the mic. https://192.168.x.x:5443 can.
// The certificate is self-made: the first time, the browser shows a warning — tap
// "Advanced" → "Proceed / Continue".
const fs = require('fs');
const os = require('os');
const path = require('path');
const https = require('https');
const selfsigned = require('selfsigned');

const CERT_DIR = path.join(__dirname, '.cert');

function lanAddresses() {
  return Object.values(os.networkInterfaces())
    .flat()
    .filter((a) => a && a.family === 'IPv4' && !a.internal)
    .map((a) => a.address);
}

async function loadCert(ips) {
  const keyFile = path.join(CERT_DIR, 'key.pem');
  const certFile = path.join(CERT_DIR, 'cert.pem');
  const ipsFile = path.join(CERT_DIR, 'ips.json');
  const saved = fs.existsSync(ipsFile) ? JSON.parse(fs.readFileSync(ipsFile, 'utf8')) : [];
  // make a new certificate when the computer's network address changed
  if (fs.existsSync(keyFile) && fs.existsSync(certFile) && ips.every((ip) => saved.includes(ip))) {
    return { key: fs.readFileSync(keyFile), cert: fs.readFileSync(certFile) };
  }
  const altNames = [{ type: 2, value: 'localhost' }, { type: 7, ip: '127.0.0.1' }, ...ips.map((ip) => ({ type: 7, ip }))];
  const pems = await selfsigned.generate([{ name: 'commonName', value: 'English Masti (local)' }], {
    days: 825,
    keySize: 2048,
    algorithm: 'sha256',
    extensions: [{ name: 'subjectAltName', altNames }],
  });
  fs.mkdirSync(CERT_DIR, { recursive: true });
  fs.writeFileSync(keyFile, pems.private);
  fs.writeFileSync(certFile, pems.cert);
  fs.writeFileSync(ipsFile, JSON.stringify(ips));
  return { key: pems.private, cert: pems.cert };
}

async function startHttps(app, port) {
  const ips = lanAddresses();
  const creds = await loadCert(ips);
  https.createServer(creds, app).listen(port, () => {
    console.log(`HTTPS (for phones, mic works): https://localhost:${port}`);
    for (const ip of ips) console.log(`   on this Wi-Fi:              https://${ip}:${port}`);
  });
}

module.exports = { startHttps };
