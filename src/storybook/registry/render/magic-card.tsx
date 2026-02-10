import React from "react";
import * as Shared from "../shared-demos";
import { Button } from "@/components/ui/button";
import { Input } from "@base-ui/react";
import { Label } from "@/components/ui/label";
import { MagicCard } from "@/components/magicui/MagicCard";

type RenderProps = Record<string, unknown>;

export default function Render(props: RenderProps) {
  return (
    <Shared.Card className="w-full max-w-sm justify-self-center border-none p-0 shadow-none">
      <MagicCard gradientColor="#262626" className="p-0">
        <Shared.CardHeader className="border-border border-b p-4 [.border-b]:pb-4">
          <Shared.CardTitle>Login</Shared.CardTitle>
          <Shared.CardDescription>
            Enter your credentials to access your account
          </Shared.CardDescription>
        </Shared.CardHeader>
        <Shared.CardContent className="p-4">
          <form>
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="name@example.com" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" />
              </div>
            </div>
          </form>
        </Shared.CardContent>
        <Shared.CardFooter className="border-border border-t p-4 [.border-t]:pt-4">
          <Button className="w-full">Sign In</Button>
        </Shared.CardFooter>
      </MagicCard>
    </Shared.Card>
  );
}
