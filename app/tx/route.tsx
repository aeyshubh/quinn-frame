import { createFrames, Button } from "frames.js/next";
import { TransactionTargetResponse } from "frames.js";
import { gql, GraphQLClient } from "graphql-request";
import { encodeFunctionData, parseEther,encodePacked, stringToBytes  } from 'viem';
import { init } from "@airstack/node";
const AIRSTACK_API_URL = "https://api.airstack.xyz/graphql";
import abi from "../../contract/abi.json";
import { NextResponse } from "next/server";

const frames = createFrames({
    basePath: "/frames",
  });
export const POST = frames(async (ctx) => {
   const AIRSTACK_API_KEY = process.env.AIRSTACK_API_KEY;
  console.log("In");
  init(AIRSTACK_API_KEY?`${AIRSTACK_API_KEY}`:`${AIRSTACK_API_KEY}`);


  const fid = ctx.message?.requesterFid;

  if (!fid) throw new Error("No FID found in request");

  const query = `query MyQuery {
    Socials(
      input: {
        filter: {
          dappName: {
            _eq: farcaster
          },
          identity: { _eq: "fc_fid:${fid}" }
        },
        blockchain: ethereum
      }
    ) {
      Social {
        socialCapital {
          socialCapitalRank
        }
      }
    }
  }`;

  if (!AIRSTACK_API_KEY) throw new Error("AIRSTACK_API_KEY not set");

  const graphQLClient = new GraphQLClient(AIRSTACK_API_URL, {
    headers: {
      Authorization: AIRSTACK_API_KEY, // Add API key to Authorization header
    },
  });
  const getFidData = await graphQLClient.request<any>(query);
  let rank = Number(JSON.stringify(getFidData.Socials.Social[0].socialCapital.socialCapitalRank));
  let address = ctx.message?.connectedAddress;
  console.log("address :",address);
  let tokenAmt=0;
   if(rank <1000){
        tokenAmt = 2000;
    }
   else if(rank<5000 && rank > 1000){
        tokenAmt = 1000;
    }
   else if(rank < 15000 && rank > 5000){
        tokenAmt = 800;
    }
    else if(rank < 25000 && rank > 15000){
        tokenAmt = 400;
    }
    else if(rank < 50000 && rank > 25000){
        tokenAmt = 200;
    }
    else if(rank < 75000 && rank > 50000){
        tokenAmt = 100;
    }
    else if(rank < 100000 && rank > 75000){
        tokenAmt = 50;
    }
    console.log("tokenAmt :",tokenAmt);
  // Do something with the request data to generate transaction data
 
  // Create calldata for the transaction using Viem's `encodeFunctionData`
   const myCalldata = encodeFunctionData({
    abi: abi,
    functionName: "mintSocialToken333",
    args: [fid,address, parseEther(tokenAmt.toString())],
  });
 
  // Return transaction data that conforms to the correct type
  return NextResponse.json({
    chainId: "eip155:8453", // OP Mainnet
    method: "eth_sendTransaction",
    params: {
      abi: [],
      to: "0x960374C48DdAf175164c183d64fCBD8151617CC3",
      data: myCalldata,
      value: '0',
    },
  });
});
