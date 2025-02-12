import { ModeToggle } from "@/components/ui/modo-toggle";

export function HeaderComponent() {
    return (
        <header className="flex border-b border-border bg-background justify-between items-center sticky top-0 p-4">
            <div>
                <h1>Production</h1>
            </div>
            <div className="flex space-x-4">
                <a>Home</a>
                <a>About</a>
                <a>Services</a>
                <a>Contact</a>
            </div>
            <div>
                <ModeToggle />
            </div>
        </header>
    )
}