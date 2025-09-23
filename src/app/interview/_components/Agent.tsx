"use client";

import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import React, { useState } from "react";
import HologramImage from "../../../../public/hologarm.jpeg";
import { Button } from "@/components/ui/button";
import { Loader, PhoneCall, PhoneOff } from "lucide-react";
import { IconPhoneRinging } from "@tabler/icons-react";
import { cn } from "@/lib/utils";

type Props = {
  username: string;
  userId: string;
  type: string;
  imageUrl: string;
};

enum CallStatus {
  INACTIVE = "INACTIVE",
  ACTIVE = "ACTIVE",
  FINISHED = "FINISHED",
  CONNECTING = "CONNECTING",
}

const Agent = ({ username, userId, type, imageUrl }: Props) => {
  const callStatus = CallStatus.ACTIVE;
  const [isSpeaking, setIsSpeaking] = useState(true);

  const messages = [
    "Hey what's up!, tell me about your self",
    "My self vishu verma, i'm a full stack developer",
  ];

  const lastMessage = messages[messages.length - 1];

  return (
    <div className="p-4 space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-between gap-6">
        <Card
          className={`rounded-sm min-h-[400px] flex items-center justify-center bg-transparent ${
            isSpeaking ? "border-primary" : ""
          }`}
        >
          <CardContent className="flex items-center justify-center flex-col gap-10">
            <div className="relative w-[150px] h-[150px] rounded-full">
              <Image
                src={HologramImage}
                alt="agent"
                width={200}
                height={200}
                className="object-cover w-full h-full rounded-full"
              />

              {/* Wave 1 */}
              {isSpeaking && (
                <div
                  className="speaking bg-accent-foreground -z-10"
                  style={{ animationDelay: "0s" }}
                ></div>
              )}
              {/* Wave 2 */}
              {isSpeaking && (
                <div
                  className="speaking bg-accent-foreground -z-10"
                  style={{ animationDelay: "0.6s" }}
                ></div>
              )}
              {/* Wave 3 */}
              {isSpeaking && (
                <div
                  className="speaking bg-accent-foreground/80 -z-10"
                  style={{ animationDelay: "1.1s" }}
                ></div>
              )}
            </div>
            <p className="text-medium mt-4">AI Voice Interviewer</p>
          </CardContent>
        </Card>

        <Card
          className={`rounded-sm min-h-[400px] flex items-center justify-center bg-transparent`}
        >
          <CardContent className="flex items-center justify-center flex-col gap-10">
            <div className="relative w-[150px] h-[150px] rounded-full">
              <Image
                src={imageUrl}
                alt="agent"
                width={200}
                height={200}
                className="object-cover w-full h-full rounded-full"
              />
            </div>

            <p className="text-medium mt-4">{username}</p>
          </CardContent>
        </Card>
      </div>

      {/* transcript messages  */}
      {messages.length > 0 && (
        <Card className="bg-transparent">
          <CardContent>
            <p
              className={cn(
                "transition-opacity duration-500 opacity-0 tracking-wider text-center",
                "animate-fade-in opacity-100"
              )}
            >
              {lastMessage}
            </p>
          </CardContent>
        </Card>
      )}

      {/* call status */}
      <div className="w-full flex justify-center ">
        {callStatus !== "ACTIVE" ? (
          <Button
            className={`cursor-pointer ${
              callStatus === "INACTIVE" || callStatus === "FINISHED"
                ? "bg-green-500 text-white hover:bg-green-600"
                : "bg-amber-500 text-white hover:bg-amber-600"
            }`}
          >
            <span>
              {callStatus === "INACTIVE" || callStatus === "FINISHED" ? (
                <span className="flex items-center ">
                  <IconPhoneRinging />
                  <span className="ml-2">Start Call</span>
                </span>
              ) : (
                <span className="flex items-center">
                  <Loader className="animate-spin" />
                  <span className="ml-2">Connecting...</span>
                </span>
              )}
            </span>
          </Button>
        ) : (
          <Button variant={"destructive"} className="cursor-pointer">
            <span className="flex items-center">
              <PhoneOff className="mr-2" />
              <span>End Call</span>
            </span>
          </Button>
        )}
      </div>
    </div>
  );
};

export default Agent;
