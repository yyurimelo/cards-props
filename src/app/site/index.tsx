"use client"
import { Checkbox } from "@/components/ui/checkbox";
import Image from "next/image";
import { useState } from "react";
import { CardItens } from "../components/card";

const dadosMockacdos = [
    {
        id: 1,
        nome: "Google",
        checked: false,
        icon: "/google.png"
    },
    {
        id: 2,
        nome: "Twitter",
        checked: false,
        icon: "/twitter.png"
    },
    {
        id: 3,
        nome: "Youtube",
        checked: false,
        icon: "/youtube.png"
    },
    {
        id: 4,
        nome: "Facebook",
        checked: false,
        icon: "/facebook.png"
    }
]

export default function Cards() {
    const [checked, setChecked] = useState(dadosMockacdos);

    const handleCheckId = (id: number) => {
        setChecked((prevChecked) =>
            prevChecked.map((item) =>
                item.id === id
                    ? { ...item, checked: !item.checked } : item
            )
        );
    }
    const arrayChecked = checked.filter((data) => data.checked);

    return (
        <div className="flex flex-col lg:flex-row px-4 sm:px-8 md:px-[10%] py-10 relative">
            <div className={`flex-1 transition-all ${arrayChecked.length > 0 ? 'lg:mr-80' : ''}`}>
                <h1 className="text-2xl font-semibold">Apps</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                    {checked.map((card) => (
                        <div
                            key={card.id}
                            onClick={() => handleCheckId(card.id)}
                        >
                            <div className="flex items-center bg-border p-6 justify-between cursor-pointer rounded-xl space-x-2">
                                <div className="flex items-center space-x-2">
                                    <Image
                                        src={card.icon || "/"}
                                        alt={card.nome}
                                        width={30}
                                        height={30}
                                        className="rounded-lg"
                                    />
                                    <label className="text-2xl font-bold leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                        {card.nome}
                                    </label>
                                </div>
                                <Checkbox checked={card.checked} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {arrayChecked.length > 0 && (
                <div className="lg:absolute lg:right-0 lg:w-auto rounded-xl px-20 transition-all">
                    <CardItens items={arrayChecked} />
                </div>
            )
            }
        </div>
    );
}
