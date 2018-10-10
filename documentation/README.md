# CloudKibo Demo App
Link to design document:
https://docs.google.com/document/d/1yMBFKvNYf9bBIDbNMGg3Bbzo_I6ffMJllcjv07G8dT0/edit#

Description:
This project will be a demo app to show customer information. Further explanation can be found on design document.

## Operations Guide (Production Only)

#### Setup Database

You should have MongoDB installed on your system.

#### Setup Nodejs and NPM

You should have Nodejs and NPM installed on your system.

#### Install Forever

To install forever run the following command:

    npm install forever -g

#### Install Git

    sudo apt-get update
    sudo apt-get install git

#### Clone

Now, clone the project:

    git clone https://github.com/Cloudkibo/DemoApp/

#### Redirect the ports to our application ports
Run following two commands

    iptables -t nat -A PREROUTING -i eth0 -p tcp --dport 80 -j REDIRECT --to-port 3000
    iptables -t nat -A PREROUTING -i eth0 -p tcp --dport 443 -j REDIRECT --to-port 8443

Now on terminal, set the environment variables in /etc/environment.

    nano /etc/environment

We need to set the following variables: (Just copy paste and then change the values)

    NODE_ENV=production
    DOMAIN=<YOUR DOMAIN>
    MONGO_URI=<DATABASE STRING>

Now, run the following command to install dependencies:

    cd DemoApp
    npm install               

After this, we can run the server by running the script deployment.sh.

    bash deployment.sh
