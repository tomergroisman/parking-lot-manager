# Parking Lot Manager

## Description

This project implements a cloud-based system to manage a parking lot.\
Camera will recognize the license plate and ping cloud service.\
The system includes two endpoints:\
`POST /entry?plate=123-456-789&parkingLot=382`, returns the parking ticket id.\
`POST /exit?ticketId=1234`, Returns the license plate, total parked time, the parking lot id and the charge (based on 15 minutes increments).\
The charge for parking is 10$ per hour.

## Setup

### Set the Instance Environment

To start this app we need to set the environment.\
We need to install Node JS, Git, clone the repo, install dependencies and finally run the app.\
To do so, you can either run the following commands from the command line:

``` bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash
. ~/.nvm/nvm.sh
nvm install node
sudo apt-get install git
git clone https://github.com/tomergroisman/parking-lot-manager.git
cd parking-lot-manager
npm install
npm start
```

Or to create a `setup.sh` file and copy it's content from the [corresponding file](https://github.com/tomergroisman/parking-lot-manager/blob/main/setup.sh) in the repo.

### Set the Security Group

Our app runs on port 3000, therefore we need to add this port to inbound rules in our instance's security group.\
Go to your security group section, select your current security group and add new **Custom TCP** rule with port range **3000** and CIDR blocks **0.0.0.0/0**

## Run

To run the app, just run `npm start` on the project root directory

### Have Fun
