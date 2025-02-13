import * as React from "react";
import Image from "next/image";

import {
    Card,
    CardContent,
    CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

type Props = {
    items: {
        id: number;
        nome: string;
        checked: boolean;
        icon: string
    }[];
}

export function CardItens({ items }: Props) {
    const contador = items.length;

    return (
        <Card className="w-[350px] shadow-md">
            <CardContent className="flex p-6 flex-col space-y-5 items-start">
                <CardTitle className="text-lg font-semibold">
                    {contador === 1 ? `${contador} App selected` : `${contador} Apps selected`}
                </CardTitle>
                {items.map((item) => (
                    <div key={item.id} className="flex size-3 space-x-2 items-center">
                        <Image src={item.icon} alt={item.nome} width={30} height={30} />
                        <span>{item.nome}</span>
                    </div>
                ))}
                <Button className="w-full flex justify-between">
                    Next
                    <ChevronRight size={24} />
                </Button>
            </CardContent>
        </Card>
    );
}
