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
  const AIRSTACK_API_KEY = process.env.AIRSTACK_API_KEY;
  const VERCEL_URL = process.env.VERCEL_URL;
export const POST = frames(async (ctx) => {
    return {
        image: `https://media.makeameme.org/created/mission-completed-5a4d12.jpg`,
        buttons: [
          <Button action='post' target={`${VERCEL_URL}`}>
            Play Again!
          </Button>,
        ],
      };
});

export const GET = frames(async (ctx) => {
    return {
        image: `https://social-rank.vercel.app/end.png`,
        buttons: [
          <Button action='post' target={`${VERCEL_URL}`}>
            Play Again!
          </Button>,
        ],
      };
});

