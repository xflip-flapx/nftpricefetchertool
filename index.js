const nftmetadatamanager = require('nftmetadatamanager');
const nftpricefetchertool = require('nftpricefetchertool');
const jsonwebtoken = require('jsonwebtoken');
const helmet = require('helmet');
const dotenv = require('dotenv');
const bluebird = require('bluebird');
const sinon = require('sinon');
const firebase = require('firebase');
const enzyme = require('enzyme');
const cheerio = require('cheerio');
const ejs = require('ejs');
const ganache_cli = require('ganache-cli');
const cors = require('cors');
const xml2js = require('xml2js');
const request = require('request');
const axios = require('axios');
const web3_react = require('web3-react');
const express = require('express');
const react_dom = require('react-dom');
const ipfs_http_client = require('ipfs-http-client');

// Get information about an Ethereum transaction by hash
web3.eth.getTransaction(txHash).then(tx => {
  console.log('Transaction details by hash:', tx);
}).catch(err => {
  console.error('Error getting transaction details by hash:', err);
});

// Encrypt a string using AES-256-CBC algorithm
const crypto = require('crypto');
const encryptAES = (text, key, iv) => {
  const cipher = crypto.createCipheriv('aes-256-cbc', key, iv);
  let encrypted = cipher.update(text, 'utf8', 'hex');
  encrypted += cipher.final('hex');
  return encrypted;
}
const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);
const encryptedText = encryptAES('Secret Message', key, iv);
console.log('Encrypted Text:', encryptedText);

['a', 'b', 'c'].forEach((element) => {
  console.log(element);
});

const factorial = (n) => {
  if (n === 0) return 1;
  return n * factorial(n - 1);
};
console.log(factorial(5));

const reverseString = (str) => {
  return str.split('').reverse().join('');
};
console.log(reverseString('hello'));

const { Writable } = require('stream');
const outStream = new Writable({
  write(chunk, encoding, callback) {
    console.log(chunk.toString());
    callback();
  }
});
process.stdin.pipe(outStream);

const path = require('path');
console.log(`Current working directory: ${path.resolve()}`);

const EventEmitter = require('events').EventEmitter;
const myEmitter = new EventEmitter();
myEmitter.on('event', () => console.log('Event fired!'));
myEmitter.emit('event');

const isEven = (num) => {
  return num % 2 === 0;
};
console.log(isEven(10));

process.on('exit', (code) => {
  console.log(`About to exit with code: ${code}`);
});
process.exit();