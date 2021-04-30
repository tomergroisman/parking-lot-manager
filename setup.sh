# Node js install
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash
. ~/.nvm/nvm.sh
nvm install node
# Git install
sudo apt-get install git
# Clone repo
git clone https://github.com/tomergroisman/parking-lot-manager.git
cd parking-lot-manager
# Start app
npm start