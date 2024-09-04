"use client";
import { Button } from "@/components/ui/button";
import { ButtonProps } from "../../../../data";

export function ButtonContent({ props }: { props: ButtonProps }) {
  return (
    <Button onClick={props.onClick} variant="outline">
      hola
    </Button>
  );
}
