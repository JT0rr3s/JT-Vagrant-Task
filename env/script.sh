echo ---- Updating Sources ----
sudo apt-get update -y

echo ---- Installing Python ----
sudo apt-get install software-properties-common -y

echo ---- Downloaded Node ----
curl -fsSL https://deb.nodesource.com/setup_16.x | sudo -E bash -

echo ---- Install Node ----
sudo apt-get install nodejs -y

echo ---- Install NPM ----
sudo apt-get install npm -y

echo ---- Move to app folder ----
cd ../vagrant/app

echo --- Downloading NPM Packages ----
npm install

echo ---- Run App  ----
node script.js


