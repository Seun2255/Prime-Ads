# Prime Ads

Prime Books is a dapp for both those who want to make use of ads and those looking to earn fri=om them to easily connect and maximize their benefits.

- ### [Prime Ads](https://prime-ads.vercel.app/)

## Resources

- #### [Prime Ads Contract](https://mumbai.polygonscan.com/address/0xe64766cFD3b39Ba08Ea8C8900E0411774eE6cD9A)

- #### [Prime Token Contract](https://mumbai.polygonscan.com/address/0x2C3eF3866a4272816d8020ccAe266B36079D3E9B)

## What it does

As an individual/ company who wants to earn from hosting ads you can access the site and look through the available ad requests going on. You select one and then use the API endpoint generated to make a link o your own Dapp that users should click to count as a referral. Each referral earns you some amount of our custom Prime token which you can then withdraw any time you want.

For those looking to advertise their Dapp/business this is a an easy way to post an add, the only cost you pay is the amount for the adds. You can also choose specific people or companies to advertise for you if you feel their site matches with the customer base you want.

## Inspiration

Ads are a huge source of revenue for both tech companies and the people who are paid promote them. A lot of times though it is hard to earn from ads both as a company and as an individual getting paid for spreading these ads.
Prime Ads fixes this, it connects content creators/influencers e.t.c directly with the company thereby making it easier for smaller companies and upcoming content creators/influencers to earn.

## How I built it

- I used the powerful features of Next.js, Django and firebase.
- I built the Frontend using Next.js, and authentication with Next auth and the Moralis auth API. For smart contract integration I used ethers and Moralis SDK.
- I built the smart contract on the polygon Mumbai chain using solidity and ethers.js.

## Challenges I ran into

At the beginning I found it very hard to get started due to a lack of a design to follow and working on this myself.
At a point I had an issue with the Moralis Auth API but that was quickly resolved after I asked on the moralis server.

## What I learned

This was a solo project and I had to work on everything myself, I had to biuld a backend that interacts with firebase.
I got more familiar with Moralis by solving problems I faced and got help from the Moralis discord server.
I improved my knowledge on the usage of Next.js.

## What's next for Prime Ads

I plan to make prime ads the next big thing, npm packages facilitating customized ads that are easy to add to your Dapp and features that will ensure that both those looking to advertise and those hoping to earn from promoting ads are satisfied.

## Backend API

this app has a backend functionalty, this is in a seperate github folder where i added the firebase Django functions to a pre-existing api i made.
