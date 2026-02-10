import React from 'react';
import * as Shared from '../shared-demos';
import { Button } from "@/components/ui/button";
import { Input } from "@base-ui/react";
import { Label } from "@/components/ui/label";
import { ShineBorder } from "@/components/magicui/ShineBorder";

export default function Render(props: any) {
  return (
    <Shared.Card className="relative w-full max-w-[350px] justify-self-center overflow-hidden">
<ShineBorder shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]} />
<Shared.CardHeader>
<Shared.CardTitle>Login</Shared.CardTitle>
<Shared.CardDescription>
Enter your credentials to access your account
</Shared.CardDescription>
</Shared.CardHeader>
<Shared.CardContent>
<form>
<div className="grid gap-4">
<div className="grid gap-2">
<Label htmlFor="email">Email</Label>
<Input
id="email"
type="email"
placeholder="name@example.com"
/>
</div>
<div className="grid gap-2">
<Label htmlFor="password">Password</Label>
<Input id="password" type="password" />
</div>
</div>
</form>
</Shared.CardContent>
<Shared.CardFooter>
<Button className="w-full">Sign In</Button>
</Shared.CardFooter>
</Shared.Card>
  );
}