import React from 'react';
import * as Shared from '../shared-demos';
import { BorderBeam } from "@/components/magicui/BorderBeam";
import { Button } from "@/components/ui/button";
import { Input } from "@base-ui/react";
import { Label } from "@/components/ui/label";

export default function Render(props: any) {
  return (
    <Shared.Card className="relative w-[350px] justify-self-center overflow-hidden">
<Shared.CardHeader>
<Shared.CardTitle>Login</Shared.CardTitle>
<Shared.CardDescription>
Enter your credentials to access your account.
</Shared.CardDescription>
</Shared.CardHeader>
<Shared.CardContent>
<form>
<div className="grid w-full items-center gap-4">
<div className="flex flex-col space-y-1.5">
<Label htmlFor="email">Email</Label>
<Input
id="email"
type="email"
placeholder="Enter your email"
/>
</div>
<div className="flex flex-col space-y-1.5">
<Label htmlFor="password">Password</Label>
<Input
id="password"
type="password"
placeholder="Enter your password"
/>
</div>
</div>
</form>
</Shared.CardContent>
<Shared.CardFooter className="flex justify-between">
<Button variant="outline">Register</Button>
<Button>Login</Button>
</Shared.CardFooter>
<BorderBeam duration={8} size={100} />
</Shared.Card>
  );
}